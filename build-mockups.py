from PIL import Image, ImageDraw, ImageFilter
import os

src = r"C:\Users\Jack\Desktop\AI Website\htdocs\Websites\fast-launch\mockup-source"
out = r"C:\Users\Jack\Desktop\AI Website\htdocs\Websites\fast-launch\mockup-output"
os.makedirs(out, exist_ok=True)

screens = [
    ("screenshot-dfc.png", "dfc"),
    ("screenshot-aramas.png", "aramas"),
    ("screenshot-memorymarket.png", "memorymarket"),
]

# ------------------------------------------------------------------ #
#  Background styles (5 options)
# ------------------------------------------------------------------ #
# minimal      - light gray gradient    (clean/neutral, light-theme hero)
# dark         - deep dark charcoal     (matches site's #000/#0A0A0A)
# orange-glow  - dark + orange radial   (brand accent, most impactful)
# purple-haze  - dark blue->purple       (modern SaaS / AI vibes)
# grid-dark    - dark + subtle grid     (techy, geometric)

BACKGROUNDS = {
    "minimal": {
        "desc": "Light gray gradient — clean, neutral",
        "type": "gradient",
        "top": (248, 249, 250),
        "bottom": (220, 223, 228),
    },
    "dark": {
        "desc": "Dark studio — matches site #000 / #0A0A0A theme",
        "type": "gradient",
        "top": (10, 10, 12),
        "bottom": (22, 22, 28),
    },
    "orange-glow": {
        "desc": "Dark bg + orange radial glow — brand accent (F97316)",
        "type": "orange-glow",
        "base": (8, 8, 10),
    },
    "purple-haze": {
        "desc": "Dark blue-to-purple — modern SaaS / AI look",
        "type": "gradient",
        "top": (8, 10, 28),
        "bottom": (22, 10, 44),
    },
    "grid-dark": {
        "desc": "Dark with subtle geometric grid — techy / structured",
        "type": "grid",
        "base_top": (10, 10, 12),
        "base_bottom": (18, 18, 24),
        "grid_color": (28, 28, 36),
        "cell": 80,
    },
}

# ------------------------------------------------------------------ #
#  Background factories
# ------------------------------------------------------------------ #

def make_gradient(w, h, top_color, bottom_color):
    """Row-fill gradient (no numpy required)."""
    base = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(base)
    for y in range(h):
        t = y / max(h - 1, 1)
        r = int(top_color[0] + (bottom_color[0] - top_color[0]) * t)
        g = int(top_color[1] + (bottom_color[1] - top_color[1]) * t)
        b = int(top_color[2] + (bottom_color[2] - top_color[2]) * t)
        draw.line([(0, y), (w - 1, y)], fill=(r, g, b))
    return base


def make_orange_glow(w, h, base_color=(8, 8, 10)):
    """Dark background with a soft orange radial glow (brand #F97316)."""
    base = make_gradient(w, h, base_color, tuple(min(c + 10, 255) for c in base_color))

    # Layer radial glow ellipses — each as a blurred RGBA overlay
    glow_layers = [
        # (orange_rgb, rx, ry, alpha, blur_radius)
        ((249, 115, 22), 350, 250,  60, 120),  # bright core
        ((200,  80, 10), 600, 420,  35,  80),
        ((120,  40,  5), 900, 620,  20,  60),
        (( 60,  15,  2), 1300, 850, 10,  40),
    ]
    cx, cy = w // 2, h // 2
    for rgb, rx, ry, alpha, blur in glow_layers:
        overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        od = ImageDraw.Draw(overlay)
        od.ellipse([cx - rx, cy - ry, cx + rx, cy + ry], fill=(*rgb, alpha))
        overlay = overlay.filter(ImageFilter.GaussianBlur(radius=blur))
        base = Image.alpha_composite(base.convert("RGBA"), overlay).convert("RGB")
    return base


def make_grid_bg(w, h, base_top, base_bottom, grid_color, cell=80):
    """Dark gradient with subtle grid lines."""
    base = make_gradient(w, h, base_top, base_bottom)
    draw = ImageDraw.Draw(base)
    for x in range(0, w, cell):
        draw.line([(x, 0), (x, h - 1)], fill=grid_color, width=1)
    for y in range(0, h, cell):
        draw.line([(0, y), (w - 1, y)], fill=grid_color, width=1)
    return base


def make_background(bg_key, w, h):
    s = BACKGROUNDS[bg_key]
    t = s["type"]
    if t == "gradient":
        return make_gradient(w, h, s["top"], s["bottom"])
    elif t == "orange-glow":
        return make_orange_glow(w, h, s["base"])
    elif t == "grid":
        return make_grid_bg(w, h, s["base_top"], s["base_bottom"], s["grid_color"], s.get("cell", 80))
    return make_gradient(w, h, (200, 200, 200), (180, 180, 180))


# ------------------------------------------------------------------ #
#  Drawing helpers
# ------------------------------------------------------------------ #

def rounded_rect(draw, box, radius, outline_color=None, outline_width=2, fill=None):
    x0, y0, x1, y1 = box
    if fill:
        draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=fill)
    if outline_color:
        draw.rounded_rectangle([x0, y0, x1, y1], radius=radius,
                                outline=outline_color, width=outline_width)


# ------------------------------------------------------------------ #
#  Mockup builders
# ------------------------------------------------------------------ #

def build_laptop(screenshot, bg_key, label):
    W, H = 2800, 1800
    canvas = make_background(bg_key, W, H)

    screen_w, screen_h = 1860, 1160
    screen_x = (W - screen_w) // 2
    screen_y = 80
    canvas.paste(screenshot.resize((screen_w, screen_h), Image.LANCZOS), (screen_x, screen_y))

    draw = ImageDraw.Draw(canvas)
    # Lid frame
    rounded_rect(draw, [screen_x - 30, screen_y - 20,
                         screen_x + screen_w + 30, screen_y + screen_h + 20],
                  radius=10, outline_color=(160, 160, 160), outline_width=14)
    # Hinge bar
    draw.rectangle([screen_x - 30, screen_y + screen_h + 6,
                    screen_x + screen_w + 30, screen_y + screen_h + 40],
                   fill=(210, 210, 210))
    # Base
    draw.rectangle([screen_x - 200, screen_y + screen_h + 40,
                    screen_x + screen_w + 200, screen_y + screen_h + 140],
                   fill=(220, 221, 222))
    rounded_rect(draw, [screen_x - 200, screen_y + screen_h + 40,
                         screen_x + screen_w + 200, screen_y + screen_h + 140],
                  radius=0, outline_color=(180, 180, 180), outline_width=3)
    # Trackpad
    rounded_rect(draw, [W // 2 - 180, screen_y + screen_h + 60,
                         W // 2 + 180, screen_y + screen_h + 120],
                  radius=8, outline_color=(180, 180, 180), outline_width=2, fill=(210, 211, 212))

    fname = f"laptop-{label}-{bg_key}.png"
    canvas.save(os.path.join(out, fname), "PNG")
    print(f"    laptop  -> {fname}  ({os.path.getsize(os.path.join(out, fname)) // 1024} KB)")


def build_mobile(screenshot, bg_key, label):
    MW, MH = 900, 1900
    canvas = make_background(bg_key, MW, MH)

    draw = ImageDraw.Draw(canvas)
    px0, py0, px1, py1 = 120, 80, 780, 1820
    # Phone body
    rounded_rect(draw, [px0, py0, px1, py1], radius=50, fill=(32, 32, 35))
    # Screen
    sx0, sy0, sx1, sy1 = 145, 160, 755, 1740
    canvas.paste(screenshot.resize((sx1 - sx0, sy1 - sy0), Image.LANCZOS), (sx0, sy0))
    rounded_rect(draw, [sx0, sy0, sx1, sy1], radius=8, outline_color=(20, 20, 23), outline_width=3)
    # Dynamic island
    rounded_rect(draw, [MW // 2 - 60, py0 + 18, MW // 2 + 60, py0 + 48],
                  radius=15, fill=(20, 20, 23))
    # Home indicator
    rounded_rect(draw, [MW // 2 - 60, py1 - 50, MW // 2 + 60, py1 - 34],
                  radius=6, fill=(80, 80, 85))
    # Frame outline
    rounded_rect(draw, [px0, py0, px1, py1], radius=50,
                  outline_color=(55, 55, 58), outline_width=3)

    fname = f"mobile-{label}-{bg_key}.png"
    canvas.save(os.path.join(out, fname), "PNG")
    print(f"    mobile  -> {fname}  ({os.path.getsize(os.path.join(out, fname)) // 1024} KB)")


def build_tablet(screenshot, bg_key, label):
    """iPad-style portrait tablet — 1600×2100 px."""
    TW, TH = 1600, 2100
    canvas = make_background(bg_key, TW, TH)

    draw = ImageDraw.Draw(canvas)
    tx0, ty0, tx1, ty1 = 80, 80, 1520, 2020
    # Tablet body
    rounded_rect(draw, [tx0, ty0, tx1, ty1], radius=30, fill=(28, 28, 32))
    # Screen
    sx0, sy0, sx1, sy1 = 105, 200, 1495, 1900
    canvas.paste(screenshot.resize((sx1 - sx0, sy1 - sy0), Image.LANCZOS), (sx0, sy0))
    rounded_rect(draw, [sx0, sy0, sx1, sy1], radius=6, outline_color=(18, 18, 22), outline_width=3)
    # Top camera / Face ID pill
    rounded_rect(draw, [TW // 2 - 40, ty0 + 24, TW // 2 + 40, ty0 + 56],
                  radius=12, fill=(18, 18, 22))
    draw.ellipse([TW // 2 - 9, ty0 + 32, TW // 2 + 9, ty0 + 52], fill=(10, 10, 14))
    # Home indicator bar (bottom)
    rounded_rect(draw, [TW // 2 - 80, ty1 - 60, TW // 2 + 80, ty1 - 40],
                  radius=6, fill=(60, 60, 65))
    # Frame outline
    rounded_rect(draw, [tx0, ty0, tx1, ty1], radius=30,
                  outline_color=(50, 50, 56), outline_width=3)
    # Right-side power button
    rounded_rect(draw, [tx1, TH // 2 - 40, tx1 + 7, TH // 2 + 40],
                  radius=3, fill=(45, 45, 50))

    fname = f"tablet-{label}-{bg_key}.png"
    canvas.save(os.path.join(out, fname), "PNG")
    print(f"    tablet  -> {fname}  ({os.path.getsize(os.path.join(out, fname)) // 1024} KB)")


# ------------------------------------------------------------------ #
#  Main build loop
# ------------------------------------------------------------------ #

total = len(screens) * len(BACKGROUNDS) * 3   # 3 device types
built = 0

for filename, label in screens:
    path = os.path.join(src, filename)
    if not os.path.exists(path):
        print(f"[SKIP] Missing source: {filename}")
        continue
    screenshot = Image.open(path).convert("RGB")
    print(f"\n[{label}]  source: {screenshot.size}")

    for bg_key in BACKGROUNDS:
        print(f"  bg={bg_key}")
        build_laptop(screenshot, bg_key, label)
        build_mobile(screenshot, bg_key, label)
        build_tablet(screenshot, bg_key, label)
        built += 3

print(f"\nDone — {built} mockups written to: {out}")
print("\nBackground styles:")
for k, v in BACKGROUNDS.items():
    print(f"  [{k}]  {v['desc']}")
