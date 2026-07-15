from pathlib import Path

from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "package-documentation-portal-goal.pdf"
FONT_PATH = "/System/Library/Fonts/Supplemental/AppleGothic.ttf"

pdfmetrics.registerFont(TTFont("Korean", FONT_PATH))

W, H = 720, 405
BG = colors.HexColor("#20242A")
PANEL = colors.HexColor("#2B3038")
INK = colors.HexColor("#20242A")
MUTED = colors.HexColor("#777D86")
WHITE = colors.white
LIGHT = colors.HexColor("#F5F6F7")
ORANGE = colors.HexColor("#FF7A21")
ORANGE_SOFT = colors.HexColor("#FFF0E4")
GREEN = colors.HexColor("#86B87F")


def txt(c, value, x, y, size, color=INK, font="Korean"):
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawString(x, y, value)


def box(c, x, y, w, h, fill, radius=8):
    c.setFillColor(fill)
    c.setStrokeColor(fill)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=0)


def title(c, number, value, subtitle):
    txt(c, f"{number}.", 44, 354, 22, ORANGE)
    txt(c, value, 79, 354, 22)
    txt(c, subtitle, 45, 329, 10, MUTED)


def footer(c, number, dark=False):
    col = colors.HexColor("#747A83") if dark else MUTED
    txt(c, "PACKAGE DOCUMENTATION PORTAL", 44, 20, 7, col)
    c.setFont("Korean", 7)
    c.setFillColor(col)
    c.drawRightString(676, 20, f"0{number}")


def mono(c, lines, x, y, size=10, gap=18, palette=None):
    for i, line in enumerate(lines):
        txt(c, line, x, y - i * gap, size, palette[i] if palette else WHITE, "Courier")


OUTPUT.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(OUTPUT), pagesize=(W, H))
c.setTitle("Package Documentation Portal Goal")
c.setAuthor("Codex")

# 1 Cover
c.setFillColor(BG)
c.rect(0, 0, W, H, fill=1, stroke=0)
txt(c, "DEVELOPER EXPERIENCE GOAL", 62, 310, 10, ORANGE)
txt(c, "패키지 문서", 62, 244, 35, WHITE)
txt(c, "포털 구축", 62, 198, 35, WHITE)
txt(c, "Fumadocs · Package API · CI Synchronization", 63, 153, 13, colors.HexColor("#BBC0C7"))
c.setStrokeColor(ORANGE)
c.setLineWidth(4)
c.line(62, 126, 133, 126)
txt(c, "Monorepo documentation goal", 62, 39, 9, colors.HexColor("#747A83"))
c.showPage()

# 2 Goal / portal navigation
c.setFillColor(WHITE)
c.rect(0, 0, W, H, fill=1, stroke=0)
title(c, 1, "문서 포털 목표", "공개 패키지와 개발 운영 정보를 하나의 탐색 경험으로 만든다")
box(c, 44, 76, 632, 221, PANEL, 10)
txt(c, "Documentation Portal", 73, 258, 15, WHITE)

tabs = ["Design System", "Hooks", "Core", "Utilities", "Engineering / CI"]
x = 73
for i, label in enumerate(tabs):
    width = 110 if i == 0 else (72 if i < 4 else 128)
    fill = ORANGE if i == 0 else colors.HexColor("#3A414B")
    box(c, x, 215, width, 29, fill, 6)
    c.setFont("Korean", 8)
    c.setFillColor(WHITE)
    c.drawCentredString(x + width / 2, 225, label)
    x += width + 8

c.setStrokeColor(colors.HexColor("#505865"))
c.line(73, 192, 647, 192)
txt(c, "Sidebar", 74, 166, 9, colors.HexColor("#AEB5BE"))
for i, label in enumerate(["Overview", "Installation", "Button", "Tokens"]):
    txt(c, label, 74, 142 - i * 20, 10, ORANGE if i == 2 else colors.HexColor("#D6DAE0"))

box(c, 224, 100, 423, 73, colors.HexColor("#353C46"), 7)
txt(c, "Button", 246, 146, 14, WHITE)
txt(c, "공개 API · 사용법 · 예제 · 운영 정책", 246, 121, 10, colors.HexColor("#D6DAE0"))
footer(c, 2)
c.showPage()

# 3 Source ownership
c.setFillColor(WHITE)
c.rect(0, 0, W, H, fill=1, stroke=0)
title(c, 2, "문서의 기준점", "src/index.ts는 공개 API, MDX는 사용법과 정책의 기준이다")
box(c, 45, 72, 391, 238, PANEL, 9)
tree = [
    "packages/",
    "|-- design/",
    "|   |-- src/index.ts     # public API",
    "|   `-- docs/            # MDX",
    "|-- hooks/",
    "|   |-- src/index.ts",
    "|   `-- docs/",
    "|-- core/",
    "|   |-- src/index.ts",
    "|   `-- docs/",
    "`-- utils/",
    "    |-- src/index.ts",
    "    `-- docs/",
]
palette = [ORANGE, ORANGE, GREEN, GREEN, ORANGE, GREEN, GREEN, ORANGE, GREEN, GREEN, ORANGE, GREEN, GREEN]
mono(c, tree, 66, 284, 9.1, 17, palette)

txt(c, "관리 원칙", 474, 274, 13)
rules = [
    ("01", "index.ts", "공개 API의 단일 기준"),
    ("02", "MDX", "사용법 · 예제 · 정책"),
    ("03", "Fumadocs", "탐색 · 검색 · 표현"),
]
for i, (num, label, desc) in enumerate(rules):
    y = 221 - i * 62
    c.setFillColor(ORANGE)
    c.circle(489, y + 2, 13, fill=1, stroke=0)
    c.setFont("Korean", 8)
    c.setFillColor(WHITE)
    c.drawCentredString(489, y - 1, num)
    txt(c, label, 518, y + 6, 11)
    txt(c, desc, 518, y - 13, 9, MUTED)
footer(c, 3)
c.showPage()

# 4 CI
c.setFillColor(WHITE)
c.rect(0, 0, W, H, fill=1, stroke=0)
title(c, 3, "CI 동기화", "패키지나 앱 변경은 문서 검증과 최신 문서 배포로 이어진다")

flow = [
    ("패키지 / 앱 변경", "PR 또는 main 반영"),
    ("문서 검증", "docs:check"),
    ("문서 빌드", "docs:build"),
    ("앱 build / test", "관련 앱만 실행"),
    ("문서 배포", "최신 문서 공개"),
]
for i, (main, sub) in enumerate(flow):
    x = 47 + i * 133
    box(c, x, 183, 112, 78, ORANGE_SOFT if i in (1, 2) else LIGHT, 8)
    c.setFont("Korean", 11)
    c.setFillColor(INK)
    c.drawCentredString(x + 56, 226, main)
    c.setFont("Korean", 8)
    c.setFillColor(MUTED)
    c.drawCentredString(x + 56, 204, sub)
    if i < len(flow) - 1:
        c.setStrokeColor(ORANGE)
        c.setLineWidth(2)
        c.line(x + 116, 222, x + 128, 222)
        c.line(x + 124, 226, x + 128, 222)
        c.line(x + 124, 218, x + 128, 222)

box(c, 126, 86, 468, 48, PANEL, 8)
txt(c, "공개 API 변경 + 문서 누락", 157, 104, 11, WHITE)
txt(c, "→ CI 실패", 429, 104, 11, ORANGE)
footer(c, 4)
c.showPage()

# 5 Definition of done
c.setFillColor(BG)
c.rect(0, 0, W, H, fill=1, stroke=0)
txt(c, "완료 정의", 60, 342, 26, WHITE)

items = [
    ("01", "패키지 탐색", "카테고리 · 사이드바 · 검색으로 문서를 이동한다"),
    ("02", "공개 API", "각 index.ts의 API와 사용법을 확인한다"),
    ("03", "문서 동기화", "패키지 변경 시 문서 검증이 함께 실행된다"),
    ("04", "자동 배포", "main 반영 후 최신 문서가 자동 배포된다"),
]
for i, (num, label, desc) in enumerate(items):
    y = 270 - i * 54
    c.setFillColor(ORANGE)
    c.circle(80, y + 3, 14, fill=1, stroke=0)
    c.setFont("Korean", 9)
    c.setFillColor(WHITE)
    c.drawCentredString(80, y, num)
    txt(c, label, 113, y - 2, 13, ORANGE)
    txt(c, desc, 218, y - 2, 10.5, colors.HexColor("#D3D7DD"))

c.setStrokeColor(colors.HexColor("#3A414A"))
c.line(60, 40, 660, 40)
txt(c, "패키지 API · 문서 탐색 · CI 자동 갱신", 60, 21, 8, colors.HexColor("#7B818A"))
c.setFont("Korean", 7)
c.setFillColor(colors.HexColor("#7B818A"))
c.drawRightString(660, 21, "05")
c.showPage()

c.save()
print(OUTPUT)
