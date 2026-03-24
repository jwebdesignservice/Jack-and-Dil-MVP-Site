from PIL import Image, ImageDraw
import os

src = r"C:\Users\Jack\Desktop\AI Website\htdocs\Websites\fast-launch\mockup-source"
out = r"C:\Users\Jack\Desktop\AI Website\htdocs\Websites\fast-launch\mockup-output"
os.makedirs(out, exist_ok=True)

screens = [
    ("screenshot-dfc.png", "dfc"),
    ("screenshot-aramas.png", "aramas"),
    ("screenshot-memorymarket.png", "memorymarket"),
]

def make_gradient(w, h, top_color, bottom_color):
    base = Image.new("RGB", (w, h))
    for y in range(h):
        t = y / h
        r = int(top_color[0] * (1-t) + bottom_color[0] * t)
        g = int(top_color[1] * (1-t) + bottom_color[1] * t)
        b = int(top_color[2] * (1-t) + bottom_color[2] * t)
        for x in range(w):
            base.putpixel((x, y), (r, g, b))
    return base

def draw_rounded_rect(draw, box, radius, outline_color, outline_width, fill=None):
    x0, y0, x1, y1 = box
    if fill:
        draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=fill)
    draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, outline=outline_color, width=outline_width)

for filename, label in screens:
    path = os.path.join(src, filename)
    if not os.path.exists(path):
        print(f"Missing: {filename}")
        continue
    screenshot = Image.open(path).convert("RGB")
    print(f"Processing {label} ({screenshot.size})")

    # ---- LAPTOP MOCKUP ----
    W, H = 2800, 1800
    canvas = make_gradient(W, H, (248, 249, 250), (225, 228, 232))

    # Screen area: centered, upper portion
    screen_w, screen_h = 1860, 1160
    screen_x = (W - screen_w) // 2
    screen_y = 80
    screen_img = screenshot.resize((screen_w, screen_h), Image.LANCZOS)
    canvas.paste(screen_img, (screen_x, screen_y))

    draw = ImageDraw.Draw(canvas)
    # Laptop lid frame
    draw_rounded_rect(draw, [screen_x - 30, screen_y - 20, screen_x + screen_w + 30, screen_y + screen_h + 20],
                      radius=10, outline_color=(160, 160, 160), outline_width=14)
    # Hinge bar
    draw.rectangle([screen_x - 30, screen_y + screen_h + 6, screen_x + screen_w + 30, screen_y + screen_h + 40],
                   fill=(210, 210, 210))
    # Base / trackpad area
    draw.rectangle([screen_x - 200, screen_y + screen_h + 40, screen_x + screen_w + 200, screen_y + screen_h + 140],
                   fill=(220, 221, 222))
    draw_rounded_rect(draw, [screen_x - 200, screen_y + screen_h + 40, screen_x + screen_w + 200, screen_y + screen_h + 140],
                      radius=0, outline_color=(180, 180, 180), outline_width=3)
    # Trackpad
    draw_rounded_rect(draw, [W//2 - 180, screen_y + screen_h + 60, W//2 + 180, screen_y + screen_h + 120],
                      radius=8, outline_color=(180, 180, 180), outline_width=2, fill=(210, 211, 212))

    out_path = os.path.join(out, f"laptop-{label}-minimal.png")
    canvas.save(out_path, "PNG")
    print(f"  Saved: laptop-{label}-minimal.png ({os.path.getsize(out_path)//1024}KB)")

    # ---- MOBILE MOCKUP ----
    MW, MH = 900, 1900
    canvas_m = make_gradient(MW, MH, (248, 249, 250), (225, 228, 232))

    # Phone body
    phone_x0, phone_y0 = 120, 80
    phone_x1, phone_y1 = 780, 1820
    draw_m = ImageDraw.Draw(canvas_m)
    draw_m.rounded_rectangle([phone_x0, phone_y0, phone_x1, phone_y1], radius=50, fill=(32, 32, 35))
    # Screen
    scr_x0, scr_y0 = 145, 160
    scr_x1, scr_y1 = 755, 1740
    mob_screen_w = scr_x1 - scr_x0
    mob_screen_h = scr_y1 - scr_y0
    mob_img = screenshot.resize((mob_screen_w, mob_screen_h), Image.LANCZOS)
    canvas_m.paste(mob_img, (scr_x0, scr_y0))
    # Screen bezel
    draw_m.rounded_rectangle([scr_x0, scr_y0, scr_x1, scr_y1], radius=8, outline=(20, 20, 23), width=3)
    # Notch / dynamic island
    draw_m.rounded_rectangle([MW//2 - 60, phone_y0 + 18, MW//2 + 60, phone_y0 + 48], radius=15, fill=(20, 20, 23))
    # Home indicator
    draw_m.rounded_rectangle([MW//2 - 60, phone_y1 - 50, MW//2 + 60, phone_y1 - 34], radius=6, fill=(80, 80, 85))
    # Phone frame outline
    draw_m.rounded_rectangle([phone_x0, phone_y0, phone_x1, phone_y1], radius=50, outline=(55, 55, 58), width=3)

    out_path_m = os.path.join(out, f"mobile-{label}-minimal.png")
    canvas_m.save(out_path_m, "PNG")
    print(f"  Saved: mobile-{label}-minimal.png ({os.path.getsize(out_path_m)//1024}KB)")

print("\nDone. All mockups built.")
