from pathlib import Path

from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "pnpm-cross-platform-design-package.pdf"
FONT_PATH = "/System/Library/Fonts/Supplemental/AppleGothic.ttf"

pdfmetrics.registerFont(TTFont("Korean", FONT_PATH))

W, H = 720, 405
BG = colors.HexColor("#22252A")
PANEL = colors.HexColor("#2C3038")
INK = colors.HexColor("#22252A")
MUTED = colors.HexColor("#74777D")
LIGHT = colors.HexColor("#F5F6F7")
WHITE = colors.white
ORANGE = colors.HexColor("#FF7A21")
ORANGE_SOFT = colors.HexColor("#FFF1E6")
GREEN = colors.HexColor("#7BAA74")


def txt(c, text, x, y, size, color=INK, font="Korean"):
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawString(x, y, text)


def box(c, x, y, w, h, fill, radius=8):
    c.setFillColor(fill)
    c.setStrokeColor(fill)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=0)


def slide_title(c, number, title, subtitle=None):
    txt(c, f"{number}.", 43, 354, 22)
    txt(c, title, 78, 354, 22)
    if subtitle:
        txt(c, subtitle, 44, 328, 10, MUTED)


def footer(c, page):
    txt(c, "CROSS-PLATFORM DESIGN SYSTEM", 44, 20, 7, MUTED)
    c.setFont("Korean", 7)
    c.setFillColor(MUTED)
    c.drawRightString(676, 20, f"0{page}")


def code_lines(c, lines, x, y, size=10, gap=19, colors_by_line=None, font="Courier"):
    for i, line in enumerate(lines):
        color = colors_by_line[i] if colors_by_line else colors.HexColor("#D5D8DE")
        txt(c, line, x, y - i * gap, size, color, font)


OUTPUT.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(OUTPUT), pagesize=(W, H))
c.setTitle("pnpm 모노레포 단일 디자인 패키지 플랫폼 분기")
c.setAuthor("Codex")

# 1. Cover
c.setFillColor(BG)
c.rect(0, 0, W, H, fill=1, stroke=0)
txt(c, "CROSS-PLATFORM DESIGN SYSTEM", 62, 307, 10, ORANGE)
txt(c, "단일 패키지", 62, 244, 34, WHITE)
txt(c, "플랫폼별 구현", 62, 198, 34, WHITE)
txt(c, "pnpm 모노레포 · Web · React Native · Shared Core", 63, 153, 13, colors.HexColor("#B8BBC0"))
c.setStrokeColor(ORANGE)
c.setLineWidth(4)
c.line(62, 126, 132, 126)
txt(c, "내부 아키텍처 공유용", 62, 39, 9, colors.HexColor("#6F737A"))
c.showPage()

# 2. Architecture - text tree only
c.setFillColor(WHITE)
c.rect(0, 0, W, H, fill=1, stroke=0)
slide_title(c, 1, "전체 구조", "하나의 공개 패키지에서 플랫폼 구현을 나눈다")
box(c, 78, 58, 564, 242, PANEL, 10)

diagram = [
    ("Web App  ─┐", 126, 258, WHITE),
    ("          ├─  @package/design", 126, 226, ORANGE),
    ("RN App   ─┘", 126, 194, WHITE),
    ("                 ├─  Web 구현", 126, 150, colors.HexColor("#D5D8DE")),
    ("                 └─  RN 구현", 126, 119, colors.HexColor("#D5D8DE")),
    ("                         ↑", 126, 98, GREEN),
    ("                    Shared Core", 126, 72, GREEN),
]
for text, x, y, color in diagram:
    txt(c, text, x, y, 15, color, "Korean")
footer(c, 2)
c.showPage()

# 3. Folder structure
c.setFillColor(WHITE)
c.rect(0, 0, W, H, fill=1, stroke=0)
slide_title(c, 2, "실제 폴더 구조", "Button 이름은 같고 구현 파일과 진입점만 플랫폼별로 분리한다")

box(c, 44, 69, 430, 244, PANEL, 9)
folder = [
    "packages/",
    "`-- design/",
    "    |-- src/",
    "    |   |-- components/",
    "    |   |   `-- Button/",
    "    |   |       |-- Button.web.tsx",
    "    |   |       `-- Button.native.tsx",
    "    |   |-- index.web.ts",
    "    |   `-- index.native.ts",
    "    `-- package.json",
]
folder_colors = [
    ORANGE,
    ORANGE,
    colors.HexColor("#D5D8DE"),
    colors.HexColor("#D5D8DE"),
    WHITE,
    GREEN,
    GREEN,
    colors.HexColor("#D5D8DE"),
    colors.HexColor("#D5D8DE"),
    ORANGE,
]
code_lines(c, folder, 67, 285, 9.5, 20, folder_colors)

txt(c, "구조 원칙", 507, 278, 12)
principles = [
    ("01", "Button 공개 이름 유지"),
    ("02", "Web/RN 구현 파일 분리"),
    ("03", "플랫폼 진입점 분리"),
    ("04", "package.json에서 연결"),
]
for i, (num, label) in enumerate(principles):
    y = 237 - i * 48
    c.setFillColor(ORANGE)
    c.circle(520, y + 3, 12, fill=1, stroke=0)
    c.setFont("Korean", 8)
    c.setFillColor(WHITE)
    c.drawCentredString(520, y, num)
    txt(c, label, 545, y - 2, 10)
footer(c, 3)
c.showPage()

# 4. Package configuration
c.setFillColor(WHITE)
c.rect(0, 0, W, H, fill=1, stroke=0)
slide_title(c, 3, "패키지 설정", "package.json에서 플랫폼별 공개 진입점을 선언한다")

box(c, 44, 77, 430, 231, PANEL, 9)
config = [
    "{",
    '  "name": "@package/design",',
    '  "private": true,',
    '  "exports": {',
    '    ".": {',
    '      "react-native": "./src/index.native.ts",',
    '      "browser": "./src/index.web.ts",',
    '      "default": "./src/index.web.ts"',
    "    }",
    "  }",
    "}",
]
config_colors = [
    WHITE,
    colors.HexColor("#D5D8DE"),
    colors.HexColor("#D5D8DE"),
    ORANGE,
    colors.HexColor("#D5D8DE"),
    GREEN,
    GREEN,
    GREEN,
    colors.HexColor("#D5D8DE"),
    ORANGE,
    WHITE,
]
code_lines(c, config, 66, 281, 9.5, 17, config_colors)

txt(c, "앱에서 참조", 508, 279, 12)
box(c, 504, 199, 172, 58, ORANGE_SOFT, 8)
c.setFont("Courier", 10)
c.setFillColor(INK)
c.drawCentredString(590, 229, '"@package/design"')
c.setFillColor(ORANGE)
c.drawCentredString(590, 210, '"workspace:*"')

txt(c, "핵심", 508, 163, 12)
txt(c, "• 패키지 이름 하나", 508, 136, 10)
txt(c, "• source 직접 참조", 508, 113, 10)
txt(c, "• dist 빌드 불필요", 508, 90, 10)
footer(c, 4)
c.showPage()

# 5. Summary
c.setFillColor(BG)
c.rect(0, 0, W, H, fill=1, stroke=0)
txt(c, "정리", 60, 342, 26, WHITE)

rows = [
    ("1", "공개 API", "Web과 RN 모두 @package/design에서 가져온다"),
    ("2", "연결", '각 앱은 "@package/design": "workspace:*"로 참조한다'),
    ("3", "구조", "Button.web.tsx와 Button.native.tsx로 구현을 나눈다"),
    ("4", "분기", "package.json exports에서 플랫폼 진입점을 선언한다"),
    ("5", "공유", "tokens · types · state · utilities는 Core에서 공유한다"),
]
for i, (num, label, desc) in enumerate(rows):
    y = 286 - i * 51
    c.setFillColor(ORANGE)
    c.circle(79, y + 3, 14, fill=1, stroke=0)
    c.setFont("Korean", 10)
    c.setFillColor(WHITE)
    c.drawCentredString(79, y - 2, num)
    txt(c, label, 113, y - 2, 13, ORANGE)
    txt(c, desc, 201, y - 2, 11, colors.HexColor("#D5D8DE"))

c.setStrokeColor(colors.HexColor("#3B3F46"))
c.line(60, 40, 660, 40)
txt(c, "단일 공개 API · 플랫폼 구현 분리 · 공통 Core 공유", 60, 21, 8, colors.HexColor("#777B82"))
c.setFont("Korean", 7)
c.setFillColor(colors.HexColor("#777B82"))
c.drawRightString(660, 21, "05")
c.showPage()

c.save()
print(OUTPUT)
