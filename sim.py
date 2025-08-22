import pyglet
from pyglet import shapes
from pyglet.math import Vec2
import math
import random

window = pyglet.window.Window(1000, 800, "Solar System Simulator")
batch = pyglet.graphics.Batch()

SUN_RADIUS = 30
FONT_SIZE = 14
TITLE_FONT_SIZE = 24

stars = []
for _ in range(300):
    x = random.randint(0, window.width)
    y = random.randint(0, window.height)
    size = random.uniform(0.5, 2)
    brightness = random.randint(150, 255)
    stars.append(shapes.Star(x, y, outer_radius=size, inner_radius=size / 2,
                             num_spikes=5, rotation=random.randint(0, 360),
                             color=(brightness, brightness, brightness), batch=batch))

class Planet:
    def __init__(self, name, color, radius, semi_major, eccentricity, orbital_period, trail_color=None):
        self.name = name
        self.color = color
        self.radius = radius
        self.semi_major = semi_major
        self.eccentricity = eccentricity
        self.orbital_period = orbital_period
        self.angle = random.uniform(0, 2 * math.pi)
        self.speed = 0.3 / (orbital_period ** 0.5)  # Increased speed multiplier here
        self.trail = []
        self.trail_color = trail_color if trail_color else color
        self.trail_length = 300
        self.x = 0
        self.y = 0

    def update_position(self, center, time_scale):
        r = (self.semi_major * (1 - self.eccentricity ** 2)) / (1 + self.eccentricity * math.cos(self.angle))
        self.angle += self.speed * time_scale
        self.x = center[0] + r * math.cos(self.angle)
        self.y = center[1] + r * math.sin(self.angle)
        self.trail.append((self.x, self.y))
        if len(self.trail) > self.trail_length:
            self.trail.pop(0)

planets = [
    Planet("Mercury", (200, 200, 200), 5, 60, 0.205, 88),
    Planet("Venus", (255, 165, 0), 8, 100, 0.007, 225),
    Planet("Earth", (100, 149, 237), 9, 140, 0.017, 365),
    Planet("Mars", (193, 68, 14), 7, 180, 0.094, 687),
    Planet("Jupiter", (210, 180, 140), 15, 250, 0.049, 4333),
    Planet("Saturn", (238, 232, 170), 13, 320, 0.057, 10759),
    Planet("Uranus", (175, 238, 238), 11, 390, 0.046, 30687),
    Planet("Neptune", (65, 105, 225), 11, 460, 0.011, 60190)
]

center = Vec2(window.width // 2, window.height // 2)
time_scale = 1.0
selected_planet = None
offset_x, offset_y = 0, 0
zoom = 1.0
dragging = False
last_mouse_pos = Vec2(0, 0)

# Initial position update
for planet in planets:
    planet.update_position(center, time_scale)

title_label = pyglet.text.Label("Solar System Simulator", font_name="Arial", font_size=TITLE_FONT_SIZE,
                                x=window.width // 2, y=window.height - 30,
                                anchor_x='center', anchor_y='center',
                                color=(255, 255, 255, 255), batch=batch)

time_label = pyglet.text.Label(f"Time Scale: {time_scale:.2f}x", font_name="Arial", font_size=FONT_SIZE,
                               x=window.width - 10, y=20,
                               anchor_x='right', anchor_y='center',
                               color=(255, 255, 255, 255), batch=batch)

info_labels = []

instructions = [
    "Controls:",
    "Mouse Wheel - Zoom",
    "Drag - Pan",
    "Up/Down Arrow - Speed up/Slow down time",
    "Space - Pause/Resume",
    "R - Reset view",
    "Click on a planet for info"
]

for i, text in enumerate(instructions):
    pyglet.text.Label(text, font_name="Arial", font_size=FONT_SIZE,
                      x=10, y=window.height - 60 - i * 25,
                      anchor_x='left', anchor_y='center',
                      color=(255, 255, 255, 255), batch=batch)

def create_info_labels():
    global info_labels
    info_labels = []
    if selected_planet:
        info = [
            f"Planet: {selected_planet.name}",
            f"Semi-major axis: {selected_planet.semi_major} px",
            f"Eccentricity: {selected_planet.eccentricity:.3f}",
            f"Orbital period: {selected_planet.orbital_period} Earth days",
            f"Current speed: {selected_planet.speed * time_scale:.6f} rad/frame"
        ]
        for i, text in enumerate(info):
            label = pyglet.text.Label(text, font_name="Arial", font_size=FONT_SIZE,
                                      x=window.width - 160, y=window.height - 100 - i * 25,
                                      anchor_x='left', anchor_y='center',
                                      color=(255, 255, 255, 255))
            info_labels.append(label)

@window.event
def on_draw():
    window.clear()
    batch.draw()

    sun = shapes.Circle(center.x + offset_x, center.y + offset_y, SUN_RADIUS * zoom,
                        color=(255, 255, 0))
    sun.draw()

    for planet in planets:
        planet_pos = Vec2((planet.x - center.x) * zoom + center.x + offset_x,
                          (planet.y - center.y) * zoom + center.y + offset_y)

        if planet.trail:
            for i in range(1, len(planet.trail)):
                start_x = (planet.trail[i - 1][0] - center.x) * zoom + center.x + offset_x
                start_y = (planet.trail[i - 1][1] - center.y) * zoom + center.y + offset_y
                end_x = (planet.trail[i][0] - center.x) * zoom + center.x + offset_x
                end_y = (planet.trail[i][1] - center.y) * zoom + center.y + offset_y
                line = shapes.Line(start_x, start_y, end_x, end_y, color=planet.trail_color)
                line.opacity = int(255 * i / len(planet.trail))
                line.draw()

        planet_circle = shapes.Circle(planet_pos.x, planet_pos.y, planet.radius * zoom,
                                      color=planet.color)
        planet_circle.draw()

        pyglet.text.Label(planet.name, font_name="Arial", font_size=FONT_SIZE,
                          x=planet_pos.x, y=planet_pos.y + planet.radius * zoom + 15,
                          anchor_x='center', anchor_y='center', color=(255, 255, 255, 255)).draw()

    if selected_planet:
        box = shapes.Rectangle(window.width - 310, window.height - 220, 300, 150,
                               color=(30, 30, 30))
        box.draw()
        border = shapes.Rectangle(window.width - 310, window.height - 220, 300, 150,
                                  color=selected_planet.color)
        border.opacity = 150
        border.draw()
        for label in info_labels:
            label.draw()

@window.event
def on_mouse_press(x, y, button, modifiers):
    global dragging, last_mouse_pos, selected_planet
    if button == pyglet.window.mouse.LEFT:
        for planet in planets:
            planet_pos = Vec2((planet.x - center.x) * zoom + center.x + offset_x,
                              (planet.y - center.y) * zoom + center.y + offset_y)
            dx = x - planet_pos.x
            dy = y - planet_pos.y
            if math.sqrt(dx ** 2 + dy ** 2) <= planet.radius * zoom:
                selected_planet = planet
                create_info_labels()
                break
        else:
            dragging = True
            last_mouse_pos = Vec2(x, y)

@window.event
def on_mouse_release(x, y, button, modifiers):
    global dragging
    if button == pyglet.window.mouse.LEFT:
        dragging = False

@window.event
def on_mouse_drag(x, y, dx, dy, buttons, modifiers):
    global offset_x, offset_y, last_mouse_pos
    if dragging:
        offset_x += (x - last_mouse_pos.x) / zoom
        offset_y += (y - last_mouse_pos.y) / zoom
        last_mouse_pos = Vec2(x, y)

@window.event
def on_mouse_scroll(x, y, scroll_x, scroll_y):
    global zoom
    if scroll_y > 0:
        zoom *= 1.1
    elif scroll_y < 0:
        zoom /= 1.1

@window.event
def on_key_press(symbol, modifiers):
    global time_scale, offset_x, offset_y, zoom, selected_planet
    if symbol == pyglet.window.key.UP:
        time_scale *= 1.1
        time_label.text = f"Time Scale: {time_scale:.2f}x"
    elif symbol == pyglet.window.key.DOWN:
        time_scale /= 1.1
        time_label.text = f"Time Scale: {time_scale:.2f}x"
    elif symbol == pyglet.window.key.R:
        offset_x, offset_y, zoom, time_scale = 0, 0, 1.0, 1.0
        time_label.text = f"Time Scale: {time_scale:.2f}x"
    elif symbol == pyglet.window.key.SPACE:
        time_scale = 0 if time_scale != 0 else 1.0
        time_label.text = f"Time Scale: {time_scale:.2f}x"
    elif symbol == pyglet.window.key.ESCAPE:
        pyglet.app.exit()

def update(dt):
    for planet in planets:
        planet.update_position(center, time_scale)

pyglet.clock.schedule_interval(update, 1 / 60)

if __name__ == "__main__":
    pyglet.app.run()
