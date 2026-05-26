#!/usr/bin/env python3
"""Build public/miikka-makela-cv.pdf — keep in sync with src/data/profile.ts."""

from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUTPUT = Path(__file__).resolve().parent.parent / "public" / "miikka-makela-cv.pdf"

ACCENT = colors.HexColor("#8b1528")
ACCENT_LIGHT = colors.HexColor("#e3b4b8")
INK = colors.HexColor("#0a0a0a")
MUTED = colors.HexColor("#525252")
FAINT = colors.HexColor("#737373")
RULE = colors.HexColor("#dedede")
SURFACE = colors.HexColor("#f8f8f8")

NAME = "Miikka Mäkelä"
TITLE = "Verkkokehittäjä · Full-Stack Care / Huolenpito"
CONTACT = "Jyväskylä, Suomi  ·  miikka.mla@gmail.com  ·  linkedin.com/in/miikkamgr  ·  github.com/miikkamgr"


def build_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "header_name": ParagraphStyle(
            "HeaderName",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=26,
            textColor=colors.white,
            spaceAfter=2,
        ),
        "header_role": ParagraphStyle(
            "HeaderRole",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=11,
            leading=14,
            textColor=colors.HexColor("#f5e6e8"),
            spaceAfter=6,
        ),
        "header_contact": ParagraphStyle(
            "HeaderContact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11,
            textColor=colors.HexColor("#f0d4d8"),
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11.5,
            leading=14,
            textColor=ACCENT,
            spaceBefore=14,
            spaceAfter=4,
        ),
        "job_title": ParagraphStyle(
            "JobTitle",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=13,
            textColor=INK,
            spaceBefore=8,
            spaceAfter=1,
        ),
        "job_meta": ParagraphStyle(
            "JobMeta",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=9,
            leading=12,
            textColor=FAINT,
            spaceAfter=4,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=13.5,
            textColor=MUTED,
            spaceAfter=6,
        ),
        "body_tight": ParagraphStyle(
            "BodyTight",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=13,
            textColor=MUTED,
            spaceAfter=3,
        ),
        "label": ParagraphStyle(
            "Label",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9,
            leading=12,
            textColor=INK,
        ),
        "client": ParagraphStyle(
            "Client",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.5,
            leading=12,
            textColor=INK,
            spaceBefore=5,
            spaceAfter=1,
        ),
        "case_title": ParagraphStyle(
            "CaseTitle",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.5,
            leading=12,
            textColor=INK,
            spaceBefore=7,
            spaceAfter=2,
        ),
        "footer": ParagraphStyle(
            "Footer",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.5,
            leading=9,
            textColor=FAINT,
            alignment=TA_LEFT,
        ),
    }


def header_block(styles: dict[str, ParagraphStyle]) -> Table:
    inner = Table(
        [
            [Paragraph(NAME, styles["header_name"])],
            [Paragraph(TITLE, styles["header_role"])],
            [Paragraph(CONTACT, styles["header_contact"])],
        ],
        colWidths=[170 * mm],
    )
    inner.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    outer = Table([[inner]], colWidths=[170 * mm])
    outer.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), ACCENT),
                ("LEFTPADDING", (0, 0), (-1, -1), 18),
                ("RIGHTPADDING", (0, 0), (-1, -1), 18),
                ("TOPPADDING", (0, 0), (-1, -1), 16),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 14),
                ("ROUNDEDCORNERS", [4, 4, 0, 0]),
            ]
        )
    )
    return outer


def section_rule() -> HRFlowable:
    return HRFlowable(width="100%", thickness=0.6, color=ACCENT_LIGHT, spaceBefore=0, spaceAfter=6)


def bullet_list(items: list[str], styles: dict[str, ParagraphStyle]) -> ListFlowable:
    return ListFlowable(
        [ListItem(Paragraph(text, styles["body_tight"]), leftIndent=12) for text in items],
        bulletType="bullet",
        bulletFontName="Helvetica",
        bulletFontSize=8,
        bulletColor=ACCENT,
        start="•",
        leftIndent=14,
    )


def section_heading(title: str, styles: dict[str, ParagraphStyle]) -> list:
    return [Paragraph(title, styles["section"]), section_rule()]


def build_story() -> list:
    s = build_styles()
    story: list = []

    story.append(header_block(s))
    story.append(Spacer(1, 10 * mm))

    story.extend(section_heading("Profiili", s))
    story.append(
        Paragraph(
            "Mediatekniikan insinööri (JAMK). Autan rakentamaan WordPress-kokonaisuuksia, "
            "joissa suorituskyky, integraatiot ja mitattava hyöty kulkevat käsi kädessä.",
            s["body"],
        )
    )
    story.append(
        Paragraph(
            "Yli viisi vuotta Into-Digitalin Huolenpidossa: WordPress, WooCommerce, ACF, "
            "WP-CLI, integraatiot, analytiikka ja tekninen ylläpito. Uusi ei pelota — "
            "dokumentoin niin, että seuraavalla tekijällä on helpompaa.",
            s["body"],
        )
    )

    story.extend(section_heading("Kokemus", s))

    story.append(Paragraph("Into-Digital Oy", s["job_title"]))
    story.append(
        Paragraph(
            "Verkkokehittäjä · Full-Stack Care / Huolenpito  ·  helmi 2021 –  ·  Jyväskylä",
            s["job_meta"],
        )
    )
    story.append(
        bullet_list(
            [
                "WordPress- ja WooCommerce-sivustot, ACF, Vue, WP-CLI, LiteSpeed ja API-integraatiot.",
                "Huolenpito: turvallisuus, suorituskyky, WP-CLI-skriptit ja omat lisäosat.",
                "Asiakkaat mm. World Vision Suomi, Burger King Suomi, Plan Suomi — ylläpito ja tuotantodebuggaus.",
                "Selvitän, miksi jokin toimii vain stagingissa, ja vien projektia käytännössä eteenpäin.",
            ],
            s,
        )
    )

    story.append(Paragraph("Zaibatsu Interactive Inc.", s["job_title"]))
    story.append(
        Paragraph("Graafikon harjoittelija  ·  syys 2019 – touko 2020  ·  Jyväskylä", s["job_meta"])
    )
    story.append(
        bullet_list(
            [
                "Graafinen suunnittelu, 3D-mallinnus ja JavaScript (Vue, React).",
                "Askel kohti full stack -työtä ja visuaalista silmää WordPress-projekteissa.",
            ],
            s,
        )
    )

    story.extend(section_heading("Asiakastyötä", s))
    clients = [
        ("World Vision Suomi", "Verkkopalvelun ylläpito ja kehitys: saavutettavuus, turvallisuus ja toimintavarmuus."),
        ("Burger King Suomi", "Sivuston ylläpito: tuotteet, ravintolat, kampanjat, data ja analytiikka."),
        ("Plan Suomi", "Ylläpito ja jatkokehitys: tietosisältö, varainhankinta ja WordPress-tuotanto."),
    ]
    for name, desc in clients:
        story.append(Paragraph(f"<b>{name}</b> — {desc}", s["body_tight"]))

    story.extend(section_heading("Omat projektit", s))
    projects = [
        ("suomalaisetnhlssa.fi", "Suomalaisten NHL-pelaajien tilastot NHL:n virallisista lähteistä."),
        ("wavesjyvaskyla.fi", "Waves-konttiravintola Jyväskylässä — kaksikielinen sivusto (fi/en)."),
        ("lukkokokoonpano.koubou.eu", "Rauman Lukon Liiga-kokoonpanotyökalu fanikäyttöön."),
    ]
    for host, desc in projects:
        story.append(Paragraph(f"<b>{host}</b> — {desc}", s["body_tight"]))

    story.extend(section_heading("Taidot", s))
    skills_box = Table(
        [
            [
                Paragraph(
                    "WordPress · WooCommerce · PHP · ACF · Gutenberg · WP-CLI · Vue.js · JavaScript · "
                    "REST · SOAP · WPML · Polylang · LiteSpeed · Redis · Lando · Docker · GA4 · GTM · "
                    "Consent Mode · Playwright · automaatio · suorituskyky",
                    ParagraphStyle(
                        "Skills",
                        fontName="Helvetica",
                        fontSize=9,
                        leading=12.5,
                        textColor=MUTED,
                    ),
                )
            ]
        ],
        colWidths=[170 * mm],
    )
    skills_box.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), SURFACE),
                ("BOX", (0, 0), (-1, -1), 0.5, ACCENT_LIGHT),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    story.append(skills_box)

    story.extend(section_heading("Tekniset työnäytteet", s))
    cases = [
        (
            "Lando + WP-CLI — ympäristöputki",
            "Manuaalinen synkkaus toisti samat virheet stagingissa.",
            "Lando-pohjainen putki: dry run, varmuuskopiot, URL-korvaukset, polku local → staging → tuotanto.",
            "Vähemmän säätöä ja nopeampi debuggaus.",
        ),
        (
            "Stripe + Gravity Forms — maksusynkronointi",
            "Maksustatukset eivät ehtineet mukaan ennen vientiä.",
            "Yhtenäinen Stripe-laskulogiikka, audit-metadata ja WP-CLI-rekonsiliointi.",
            "Luotettavampi maksudata ja auditoitava polku.",
        ),
        (
            "WooCommerce + WPML — varasto ja aikavyöhyke",
            "Tuotteet katosivat kieliversioista importin jälkeen tietyllä kellonajalla.",
            "PIM/kategoria/tag-ristiriidat ja EN/DE/FI-näkyvyyslogiikan korjaus.",
            "Selkeä vikapolku ilman arvailua.",
        ),
    ]
    for title, problem, work, result in cases:
        story.append(Paragraph(title, s["case_title"]))
        story.append(Paragraph(f"<b>Ongelma.</b> {problem}", s["body_tight"]))
        story.append(Paragraph(f"<b>Työ.</b> {work}", s["body_tight"]))
        story.append(Paragraph(f"<b>Lopputulos.</b> {result}", s["body_tight"]))

    story.extend(section_heading("Koulutus", s))
    story.append(
        Paragraph(
            "<b>Jyväskylän ammattikorkeakoulu (JAMK)</b> — Insinööri (AMK), mediatekniikka · 2016 – 2020",
            s["body"],
        )
    )

    story.extend(section_heading("Kiinnostuksen kohteet & kielet", s))
    story.append(
        Paragraph(
            "3D-tulostus · paikalliset LLM:t · tekniikka · botaniikka · seuraava projekti aina suunnitteilla.",
            s["body_tight"],
        )
    )
    story.append(
        Paragraph("Suomi — äidinkieli  ·  Englanti — ammattitaitoinen työkieli", s["body"])
    )

    return story


def add_page_footer(canvas, doc) -> None:
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.4)
    canvas.line(20 * mm, 14 * mm, 190 * mm, 14 * mm)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(FAINT)
    canvas.drawString(20 * mm, 9 * mm, NAME)
    canvas.drawRightString(190 * mm, 9 * mm, f"Sivu {canvas.getPageNumber()}")
    canvas.restoreState()


def write_pdf() -> None:
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
        topMargin=16 * mm,
        bottomMargin=20 * mm,
        title=f"{NAME} — CV",
        author=NAME,
    )
    doc.build(build_story(), onFirstPage=add_page_footer, onLaterPages=add_page_footer)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    write_pdf()
