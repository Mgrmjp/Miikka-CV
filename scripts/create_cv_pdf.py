#!/usr/bin/env python3
"""Deprecated: use `npm run cv:pdf` (Playwright + /cv-print). Kept for reference."""

from __future__ import annotations

from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "public" / "miikka-makela-cv.pdf"

PAGE_WIDTH, _PAGE_HEIGHT = A4
MARGIN_X = 18 * mm
CONTENT_WIDTH = PAGE_WIDTH - (2 * MARGIN_X)

INK = colors.HexColor("#0a0a0a")
TEXT = colors.HexColor("#525252")
MUTED = colors.HexColor("#737373")
ACCENT = colors.HexColor("#8b1528")
BORDER = colors.HexColor("#dedede")
PAPER = colors.HexColor("#ffffff")

ACCENT_HEX = "#8b1528"
ACCENT_LINK_HEX = "#8b1528"

NAME = "Miikka Mäkelä"
TITLE = "Full stack kehittäjä WordPressin vaikeaan päähän"
TAGLINE = "Tuotanto · integraatiot · automaatio · liiketoimintakriittinen WordPress"
INTRO = (
    "Full stack WordPress-kehittäjä vaativiin verkkopalveluihin. "
    "Yli viisi vuotta tuotannon WordPress-, WooCommerce- ja integraatiotyötä Into-Digitalin Huolenpidossa."
)
LOCATION = "Jyväskylä, Suomi"
EMAIL = "miikka.mla@gmail.com"
LINKEDIN_URL = "https://www.linkedin.com/in/miikkamgr/"
GITHUB_URL = "https://github.com/Mgrmjp"

EXPERIENCES = [
    {
        "company": "Into-Digital Oy",
        "url": "https://into-digital.fi/",
        "role": "Verkkokehittäjä · Full-Stack Care / Huolenpito",
        "period": "helmi 2021 –",
        "location": "Jyväskylä",
        "bullets": [
            "Rakennan ja ylläpidän tuotannon WordPress- ja WooCommerce-palveluita ACF:n, WP-CLI:n, LiteSpeedin ja API-integraatioiden kanssa.",
            "Parannan luotettavuutta staging-käytännöillä, debuggausrutiineilla, automaatioskripteillä ja selkeällä dokumentaatiolla.",
            "Tuettavia asiakaskriittisiä sivustoja ovat mm. World Vision Suomi, Burger King Suomi ja Plan Suomi.",
        ],
    },
    {
        "company": "Zaibatsu Interactive Inc.",
        "url": "https://zaibatsu.fi/",
        "role": "Harjoittelija · suunnittelu ja kehitys",
        "period": "syys 2019 – touko 2020",
        "location": "Jyväskylä",
        "bullets": [
            "Aloitin graafisesta suunnittelusta, siirryin 3D-mallinnukseen ja edelleen JavaScript-tehtäviin (Vue, React).",
            "Askel kohti full stack -työtä ja visuaalista silmää WordPress-projekteissa.",
        ],
    },
]

CLIENTS = [
    (
        "World Vision Suomi",
        "https://www.worldvision.fi/",
        "Verkkopalvelun ylläpito ja jatkuva kehitys: saavutettavuus, turvallisuus ja toimintavarmuus varainhankinnan tarpeisiin.",
    ),
    (
        "Burger King Suomi",
        "https://www.burgerking.fi/",
        "Ylläpito ja kehitys: tuotteet, ravintolat, kampanjat, data, analytiikka ja suorituskyky.",
    ),
    (
        "Plan Suomi",
        "https://www.plan.fi/",
        "Päivittäinen ylläpito ja jatkokehitys: tietosisältö, digitaalinen varainhankinta ja luotettava tuotanto.",
    ),
]

CASES = [
    {
        "title": "Maksu oli onnistunut, mutta vienti ei aina tiennyt sitä",
        "problem": "Stripe, Gravity Forms ja WP All Export eivät aina kertoneet samaa totuutta ennen kuin raportti ajettiin.",
        "work": "Selvitin webhook-, merkintä- ja vientiketjun. Rakensin tarkistus- ja korjauslogiikkaa WP-CLI:n kautta.",
        "result": "Luotettavampi maksudata ja auditoitava polku ilman arvailua.",
        "tags": ["Stripe", "Gravity Forms", "WP-CLI", "WP All Export"],
    },
    {
        "title": "Paikallinen kehitys hidasti työtä ja rikkoi rytmin",
        "problem": "Projektin käynnistys ja deploy nojasivat muistiin. Sama virhe toistui Stagingissa.",
        "work": "Yhtenäistin Lando- ja WP-CLI-työnkulut dry runeilla ja polulla Local → Staging → Tuotanto.",
        "result": "Nopeampi käynnistys ja vähemmän ympäristöjen välisiä yllätyksiä.",
        "tags": ["Lando", "WP-CLI", "Docker", "Bitbucket Pipelines"],
    },
    {
        "title": "Varasto katosi vain tiettyyn aikaan",
        "problem": "Tuotteet hävisivät kieliversioista importin jälkeen tietyllä kellonajalla.",
        "work": "Jäljitin PIM-, kategoria- ja tag-ristiriidat sekä aikavyöhykelogiikan. Säädin näkyvyyden importin ympärille.",
        "result": "Selkeä vikapolku ilman uutta arvailukierrosta.",
        "tags": ["WooCommerce", "WP All Import", "WPML", "PIM"],
    },
]

SKILL_GROUPS = [
    ("Alustat", "WordPress · WooCommerce · Multisite · ACF · Gutenberg · WPML"),
    ("Integraatiot", "REST ja SOAP · CRM ja PIM · Stripe · Gravity Forms · WP All Import / Export"),
    ("Automaatio", "WP-CLI · Cron · Export/import · Lando · Docker · CI/CD"),
    ("Laatu", "Suorituskyky · LiteSpeed · Redis · GA4 · GTM · Consent Mode · tuotantodebuggaus"),
    ("Työkalut", "Git · Playwright"),
    ("AI-työnkulut", "AI-avusteinen kehitys · agenttipohjainen koodaus · Cursor · MCP · paikalliset LLM:t"),
]

PROJECTS = [
    (
        "Suomalaiset NHL:ssä",
        "https://suomalaisetnhlssa.fi/",
        "NHL-pelaajien live-tilastot virallisista lähteistä.",
    ),
    (
        "Waves Jyväskylä",
        "https://wavesdemo.koubou.eu/",
        "Kaksikielinen ravintolasivusto Jyväskylän satamassa.",
    ),
    (
        "Lukko kokoonpano",
        "https://lukkokokoonpano.koubou.eu/",
        "Liiga-fanityökalu kokoonpanoihin ja erikoistilanteisiin.",
    ),
]

EDUCATION = [
    ("Insinööri (AMK), mediatekniikka / ICT", "JAMK · 2016 – 2020"),
    ("Ylioppilas", "Vammalan lukio"),
    ("Varusmiespalvelus", "Niinisalo"),
]

LANGUAGES = [
    ("Suomi", "Äidinkieli"),
    ("Englanti", "Ammattitaitoinen työkieli"),
    ("Ruotsi", "Perustaso, työn alla"),
]

INTERESTS = (
    "3D-tulostus · paikalliset LLM:t · musiikki (myös AI:n avulla) · tekniikka · botaniikka. "
    "Musiikki inspiroi; soittimen opetteluun ei juuri nyt riitä aikaa."
)


def mark(text: str) -> str:
    return escape(text)


def linked(text: str, href: str) -> str:
    return f'<link href="{href}" color="{ACCENT_LINK_HEX}">{mark(text)}</link>'


def build_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "eyebrow": ParagraphStyle(
            "Eyebrow",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=7.5,
            leading=9,
            textColor=MUTED,
            spaceAfter=2,
            letterSpacing=0.6,
        ),
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=26,
            textColor=INK,
            spaceAfter=2,
        ),
        "title": ParagraphStyle(
            "Title",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=14,
            textColor=ACCENT,
            spaceAfter=6,
        ),
        "intro": ParagraphStyle(
            "Intro",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=13.2,
            textColor=TEXT,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.4,
            leading=11,
            textColor=MUTED,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8,
            leading=10,
            textColor=ACCENT,
            spaceBefore=10,
            spaceAfter=5,
        ),
        "company": ParagraphStyle(
            "Company",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=13,
            textColor=INK,
            spaceAfter=1,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.3,
            leading=10.5,
            textColor=MUTED,
            spaceAfter=4,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=12.5,
            textColor=TEXT,
            spaceAfter=3,
            leftIndent=0,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.8,
            leading=12.2,
            textColor=TEXT,
            spaceAfter=2,
            leftIndent=10,
            bulletIndent=0,
            firstLineIndent=-6,
        ),
        "case_meta": ParagraphStyle(
            "CaseMeta",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.5,
            leading=9.5,
            textColor=MUTED,
            spaceAfter=2,
        ),
        "case_title": ParagraphStyle(
            "CaseTitle",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.8,
            leading=12,
            textColor=INK,
            spaceAfter=4,
        ),
        "case_row": ParagraphStyle(
            "CaseRow",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.2,
            leading=11.5,
            textColor=TEXT,
            spaceAfter=2,
        ),
        "skill_label": ParagraphStyle(
            "SkillLabel",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.4,
            leading=10.5,
            textColor=INK,
        ),
        "skill_items": ParagraphStyle(
            "SkillItems",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.2,
            leading=11.2,
            textColor=TEXT,
        ),
        "footer": ParagraphStyle(
            "Footer",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.5,
            leading=9,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
    }


def rule(width: float = CONTENT_WIDTH, thickness: float = 0.5) -> Table:
    table = Table([[""]], colWidths=[width], rowHeights=[0.1])
    table.hAlign = "LEFT"
    table.setStyle(
        TableStyle(
            [
                ("LINEABOVE", (0, 0), (-1, -1), thickness, BORDER),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def accent_rule() -> Table:
    table = Table([[""]], colWidths=[CONTENT_WIDTH], rowHeights=[0.1])
    table.hAlign = "LEFT"
    table.setStyle(
        TableStyle(
            [
                ("LINEABOVE", (0, 0), (-1, -1), 2.2, ACCENT),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def section(title: str, styles: dict[str, ParagraphStyle]) -> list:
    return [Paragraph(mark(title.upper()), styles["section"]), rule(thickness=0.4)]


def bullets(items: list[str], styles: dict[str, ParagraphStyle]) -> list:
    return [Paragraph(f"• {mark(item)}", styles["bullet"]) for item in items]


def job_block(job: dict, styles: dict[str, ParagraphStyle]) -> list:
    return [
        Paragraph(linked(job["company"], job["url"]), styles["company"]),
        Paragraph(f'{mark(job["role"])} · {mark(job["period"])} · {mark(job["location"])}', styles["meta"]),
        *bullets(job["bullets"], styles),
        Spacer(1, 5),
    ]


def case_block(case: dict, index: int, styles: dict[str, ParagraphStyle]) -> list:
    tags = mark(" · ".join(case["tags"]))
    rows = [
        Paragraph(
            f'<font color="{ACCENT_HEX}"><b>Case {index:02}</b></font> · {tags}',
            styles["case_meta"],
        ),
        Paragraph(mark(case["title"]), styles["case_title"]),
        Paragraph(f'<b>Ongelma</b> · {mark(case["problem"])}', styles["case_row"]),
        Paragraph(f'<b>Mitä tein</b> · {mark(case["work"])}', styles["case_row"]),
        Paragraph(f'<b>Lopputulos</b> · {mark(case["result"])}', styles["case_row"]),
        Spacer(1, 5),
    ]
    return rows


def skills_table(styles: dict[str, ParagraphStyle]) -> Table:
    rows = [
        [
            Paragraph(mark(label), styles["skill_label"]),
            Paragraph(mark(items), styles["skill_items"]),
        ]
        for label, items in SKILL_GROUPS
    ]
    table = Table(rows, colWidths=[28 * mm, CONTENT_WIDTH - 28 * mm])
    table.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 3),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LINEBELOW", (0, 0), (-1, -2), 0.25, BORDER),
            ]
        )
    )
    return table


def two_column_block(left: list, right: list, styles: dict[str, ParagraphStyle]) -> Table:
    table = Table([[left, right]], colWidths=[CONTENT_WIDTH / 2, CONTENT_WIDTH / 2])
    table.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (0, 0), 0),
                ("RIGHTPADDING", (0, 0), (0, 0), 8),
                ("LEFTPADDING", (1, 0), (1, 0), 8),
                ("RIGHTPADDING", (1, 0), (1, 0), 0),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        )
    )
    return table


def page_canvas(canvas, doc) -> None:
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, PAGE_WIDTH, _PAGE_HEIGHT, stroke=0, fill=1)
    canvas.setFillColor(ACCENT)
    canvas.rect(0, _PAGE_HEIGHT - 3 * mm, PAGE_WIDTH, 3 * mm, stroke=0, fill=1)
    canvas.setFont("Helvetica", 7.2)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(PAGE_WIDTH - MARGIN_X, 10 * mm, f"{NAME} · {canvas.getPageNumber()}/2")
    canvas.restoreState()


def build_story() -> list:
    styles = build_styles()
    contact = (
        f'{linked(EMAIL, f"mailto:{EMAIL}")} · '
        f'{linked("LinkedIn", LINKEDIN_URL)} · '
        f'{linked("GitHub", GITHUB_URL)} · '
        f"{mark(LOCATION)}"
    )

    page_one: list = [
        accent_rule(),
        Spacer(1, 8),
        Paragraph(mark(TAGLINE), styles["eyebrow"]),
        Paragraph(NAME, styles["name"]),
        Paragraph(mark(TITLE), styles["title"]),
        Paragraph(mark(INTRO), styles["intro"]),
        Paragraph(contact, styles["contact"]),
        Spacer(1, 4),
        *section("Kokemus", styles),
        *[block for job in EXPERIENCES for block in job_block(job, styles)],
        *section("Asiakastyötä", styles),
    ]

    for name, url, summary in CLIENTS:
        page_one.extend(
            [
                Paragraph(linked(name, url), styles["company"]),
                Paragraph(mark(summary), styles["body"]),
                Spacer(1, 3),
            ]
        )

    page_one.extend(
        [
            *section("Tekniset työnäytteet", styles),
            *[block for i, case in enumerate(CASES[:2], start=1) for block in case_block(case, i, styles)],
            PageBreak(),
        ]
    )

    page_two: list = [
        Paragraph(NAME, ParagraphStyle("CompactName", parent=styles["name"], fontSize=14, spaceAfter=2)),
        Paragraph(contact, styles["contact"]),
        Spacer(1, 6),
        rule(),
        Spacer(1, 6),
        *case_block(CASES[2], 3, styles),
        *section("Taidot", styles),
        skills_table(styles),
        Spacer(1, 6),
        *section("Omat projektit", styles),
    ]

    for name, url, summary in PROJECTS:
        page_two.extend(
            [
                Paragraph(f'{linked(name, url)} · {mark(summary)}', styles["body"]),
            ]
        )

    education_col = [
        Paragraph(mark("Koulutus"), styles["section"]),
        rule(thickness=0.4),
    ]
    for title, org in EDUCATION:
        education_col.append(Paragraph(f"<b>{mark(title)}</b><br/>{mark(org)}", styles["body"]))

    languages_col = [
        Paragraph(mark("Kielet"), styles["section"]),
        rule(thickness=0.4),
    ]
    for name, level in LANGUAGES:
        languages_col.append(Paragraph(f"<b>{mark(name)}</b> · {mark(level)}", styles["body"]))

    page_two.extend(
        [
            Spacer(1, 6),
            two_column_block(education_col, languages_col, styles),
            Spacer(1, 6),
            *section("Kiinnostuksen kohteet", styles),
            Paragraph(mark(INTERESTS), styles["body"]),
        ]
    )

    return page_one + page_two


def write_pdf() -> None:
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=MARGIN_X,
        rightMargin=MARGIN_X,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
        title=f"{NAME} | Ansioluettelo",
        author=NAME,
    )
    doc.build(build_story(), onFirstPage=page_canvas, onLaterPages=page_canvas)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    write_pdf()
