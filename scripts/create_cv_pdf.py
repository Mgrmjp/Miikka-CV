from pathlib import Path
from textwrap import wrap


OUTPUT = Path("public/miikka-makela-cv.pdf")

SECTIONS = [
    (
        "Miikka Mäkelä",
        [
            "Verkkokehittäjä - Full-Stack Care / Huolenpito - Into-Digital Oy",
            "Jyväskylä, Suomi | miikka.mla@gmail.com | linkedin.com/in/miikkamgr/",
        ],
    ),
    (
        "Profiili",
        [
            "Mediatekniikan insinööri (JAMK). Autan rakentamaan WordPress-kokonaisuuksia, joissa suorituskyky, integraatiot ja mitattava hyöty kulkevat käsi kädessä.",
            "Yli viisi vuotta Into-Digitalin Huolenpidossa: WordPress, WooCommerce, ACF, WP-CLI, integraatiot, analytiikka ja tekninen ylläpito.",
        ],
    ),
    (
        "Kokemus - Into-Digital Oy",
        [
            "Verkkokehittäjä, Full-Stack Care / Huolenpito | helmi 2021 - | Jyväskylä.",
            "WordPress- ja WooCommerce-sivustot, ACF, Vue, WP-CLI, LiteSpeed, API-integraatiot ja omat lisäosat.",
            "World Vision Suomi, Burger King Suomi, Plan Suomi ja muut - ylläpito ja tuotantodebuggaus.",
        ],
    ),
    (
        "Kokemus - Zaibatsu Interactive Inc.",
        [
            "Graafikon harjoittelija | syys 2019 - touko 2020 | Jyväskylä.",
            "Graafinen suunnittelu, 3D-mallinnus, JavaScript (Vue, React) - askel kohti full stack -työtä.",
        ],
    ),
    (
        "Asiakastyötä",
        [
            "World Vision Suomi - verkkopalvelun ylläpito ja kehitys.",
            "Burger King Suomi - sivuston ylläpito, kampanjat ja analytiikka.",
            "Plan Suomi - ylläpito, varainhankinta ja WordPress-tuotanto.",
        ],
    ),
    (
        "Omat projektit",
        [
            "suomalaisetnhlssa.fi - suomalaisten NHL-pelaajien tilastot NHL:n virallisista lähteistä.",
            "wavesjyvaskyla.fi - Waves-konttiravintola Jyväskylässä, kaksikielinen sivusto.",
            "lukkokokoonpano.koubou.eu - Rauman Lukon Liiga-kokoonpanotyökalu.",
        ],
    ),
    (
        "Taidot",
        [
            "WordPress, WooCommerce, PHP, ACF, Gutenberg, WP-CLI, Vue.js, JavaScript, REST, SOAP, WPML, Polylang, LiteSpeed, Redis, Lando, Docker, GA4, GTM, Playwright, automaatio, suorituskyky.",
        ],
    ),
    (
        "Tekniset työnäytteet",
        [
            "Lando + WP-CLI: toistettava polku localista stagingiin ja tuotantoon.",
            "Stripe + Gravity Forms: maksustatus, audit-metadata, WP-CLI-rekonsiliointi.",
            "WooCommerce + WPML: importin, aikavyöhykkeen ja ajastusten varasto-ongelmat.",
        ],
    ),
    (
        "Koulutus",
        [
            "Jyväskylän ammattikorkeakoulu (JAMK) - insinööri (AMK), mediatekniikka - 2016-2020.",
        ],
    ),
    (
        "Kiinnostuksen kohteet",
        [
            "3D-tulostus, paikalliset LLM:t, tekniikka, botaniikka, seuraava projekti aina suunnitteilla.",
        ],
    ),
    (
        "Kielet",
        [
            "Suomi - äidinkieli. Englanti - ammattitaitoinen työkieli.",
        ],
    ),
]


def clean_text(value: str) -> str:
    replacements = {
        "–": "-",
        "—": "-",
        "“": '"',
        "”": '"',
        "’": "'",
    }
    for source, target in replacements.items():
        value = value.replace(source, target)
    return value


def escape_pdf_text(value: str) -> str:
    value = clean_text(value)
    return value.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def build_lines() -> list[str]:
    lines: list[str] = []
    for heading, paragraphs in SECTIONS:
        lines.append(heading)
        for paragraph in paragraphs:
            lines.extend(wrap(clean_text(paragraph), width=92))
        lines.append("")
    return lines


def paginate(lines: list[str], lines_per_page: int = 47) -> list[list[str]]:
    return [lines[index : index + lines_per_page] for index in range(0, len(lines), lines_per_page)]


def add_object(objects: list[bytes], body: bytes) -> int:
    objects.append(body)
    return len(objects)


def build_content_stream(lines: list[str]) -> bytes:
    commands = ["BT", "/F1 10.5 Tf", "72 790 Td", "14 TL"]
    for line in lines:
        commands.append(f"({escape_pdf_text(line)}) Tj")
        commands.append("T*")
    commands.append("ET")
    stream = "\n".join(commands).encode("latin-1")
    return b"<< /Length " + str(len(stream)).encode("ascii") + b" >>\nstream\n" + stream + b"\nendstream"


def write_pdf() -> None:
    pages = paginate(build_lines())
    objects: list[bytes] = []

    font_id = add_object(
        objects,
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    )
    pages_id = add_object(objects, b"")
    page_ids: list[int] = []

    for page_lines in pages:
        content_id = add_object(objects, build_content_stream(page_lines))
        page_body = (
            b"<< /Type /Page /Parent "
            + f"{pages_id} 0 R".encode("ascii")
            + b" /MediaBox [0 0 595 842] /Resources << /Font << /F1 "
            + f"{font_id} 0 R".encode("ascii")
            + b" >> >> /Contents "
            + f"{content_id} 0 R".encode("ascii")
            + b" >>"
        )
        page_ids.append(add_object(objects, page_body))

    kids = " ".join(f"{page_id} 0 R" for page_id in page_ids).encode("ascii")
    objects[pages_id - 1] = b"<< /Type /Pages /Kids [" + kids + b"] /Count " + str(len(page_ids)).encode("ascii") + b" >>"
    catalog_id = add_object(objects, b"<< /Type /Catalog /Pages " + f"{pages_id} 0 R".encode("ascii") + b" >>")

    pdf = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for object_id, body in enumerate(objects, start=1):
        offsets.append(len(pdf))
        pdf.extend(f"{object_id} 0 obj\n".encode("ascii"))
        pdf.extend(body)
        pdf.extend(b"\nendobj\n")

    xref_offset = len(pdf)
    pdf.extend(f"xref\n0 {len(objects) + 1}\n".encode("ascii"))
    pdf.extend(b"0000000000 65535 f \n")
    for offset in offsets[1:]:
        pdf.extend(f"{offset:010d} 00000 n \n".encode("ascii"))
    pdf.extend(
        b"trailer\n<< /Size "
        + str(len(objects) + 1).encode("ascii")
        + b" /Root "
        + f"{catalog_id} 0 R".encode("ascii")
        + b" >>\nstartxref\n"
        + str(xref_offset).encode("ascii")
        + b"\n%%EOF\n"
    )

    OUTPUT.write_bytes(bytes(pdf))


if __name__ == "__main__":
    write_pdf()
