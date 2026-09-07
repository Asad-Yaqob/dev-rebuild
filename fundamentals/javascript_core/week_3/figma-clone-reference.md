# Figma Clone — Design Reference

## Colors

**Primary Palette**
| Name | Hex |
|---|---|
| Primary | #28CB8B |
| Secondary | #263238 |
| Info | #2194F3 |

**Neutral**
| Name | Hex |
|---|---|
| Black | #263238 |
| D_Grey | #4D4D4D |
| Grey | #717171 |
| L_Grey | #89939E |
| Grey-blue | #ABBED1 |
| Silver | #F5F7FA |
| White | #FFFFFF |

**Tint / Shade**
| Name | Hex |
|---|---|
| Shade 5 | #103E13 |
| Tint 5 | #E8F5E9 |

**Font Family:** Inter

---

## Page Structure (top-level groups)

- **Home** — Navbar, Hero, Clients, Community — group gap: `27.84` — max size: `1002x897`
- **Body** — Unlock, Achievements, Calendar, Customers, Community Updates — group gap: `33.41` — max size: `1002x1566`
- **Footer** — Final CTA, Main Footer — group gap: `0` — max size: `1002x439`

---

## Header

### Navbar
- Layout: flex row, `space-between`
- Logo: `111x21` — icon: `35x24`
- Padding: `100.23` (L/R) `/` `11.14` (T/B)
- Gap (logo ↔ right menu): `43.85`

### Right Menu
- Fixed size: `967x52`
- 5 menu items, gap between items: `16.71`, each item internal gap: `5.71`
- **CTA Button:** size `178x52` · padding `22.27 / 9.74` · label `11.14` medium · right arrow icon `16x16` · icon-label gap `5.57` · border-radius `2.78` · bg = Primary · label/icon = White

---

## Home

### Hero Section
- Layout: flex row, `space-between` · fixed size `1002x417` · padding `100.23 66.82`
- Two columns: (text + CTA) and (illustration image) — gap: `72.39`
- Heading: size `44.55` / line-height `52.9` — **two-tone text:** part 1 = Primary, part 2 = D_Grey
- Body text: size `11.14` / line-height `16.7`
- Button: size `90x33` · padding `22.27 9.74` · label `11.14` medium / line-height `16.7` · border-radius `2.78`
- Illustration image: `272x283`
- 3 dots (carousel indicator): container `32x7` · each dot `7x7` · fill = Primary

### Clients
- Horizontal padding: `100.23`
- **Client text block:** fixed size `773x54` · gap (heading↔text) `5.57` · heading `25.06` semibold · text `11.14` regular / line-height `16.7`
- **Client logos:** fixed size `802x68` · 7 logos · gap: auto · each logo `33x33`

### Community
- Layout: grid, 3 cols · fixed size `1002x292`
- **Heading block:** fixed size `1002x85` · gap `5.57` · heading `25.06` semibold / line-height `30.6` · text `11.14` regular
- **Cards:** padding `100.23` · each card `208x182` · gap between cards: auto
  - icon: `45x39`
  - title: `19.49` bold / line-height `25.1` — gap (icon↔title container): `11.14`
  - text below: `9.97` / line-height `13.9`
  - border-radius: `5.57` · bg: White
  - shadow: `x0 y1.39 blur2.78 spread0` · color `#ABBED1`

---

## Body

### Unlock
- Layout: 2-column (left image / right content) · fixed size `1002x301` · horizontal padding `100.23` · gap: auto
- Left image: `308x301`
- Right content: fixed size `460x188`
  - heading: `25.06` semibold / line-height `30.6`
  - text: `9.74` regular / line-height `13.9`
  - button: `106x36` · border-radius `2.78` · bg Primary · label White `11.14` / line-height `16.7`
  - gap between elements: `22.27`

### Achievements
- Layout: 2-column (left text / right 4-col icon grid) · fixed size `1002x203` · padding `100.23 44.55` · bg: Silver
- **Text section:** fixed size `376x85` · gap `5.57`
  - heading: two-tone (Primary + D_Grey) · `25.05` / line-height `30.6`
  - text: `11.14` / line-height `16.7`
- **Icons section:** fixed size `376x114` · row gap `27.84` · 2 icon-sets per row
  - icon-set: `177x43` · internal gap `11.14`
  - icon: `32.56x21.66`
  - number: `19.49` bold / line-height `25.1`
  - text: `11.14` / line-height `16.7`

### Calendar
- Same structure/config as **Unlock** (2-column, left image / right content)
- Fixed size: `1002x302`

### Customers
- Layout: 2-column (left image / right content) · fixed size `1002x271` · section gap `54.29` · padding `100.23 22.27`
- Left image: `227x227`
- **Content section:** fixed size `521x226` · gap `22.27`
  - text: `11.14` / line-height `16.7`
  - heading: `13.92` / line-height `19.5` · color Primary
  - secondary text: `11.14` / line-height `16.7`
  - gap (heading↔text): `5.57`
- **Icons + CTA container:** fixed size `521x33` · gap `22.27`
  - icons row: `343x33` · gap `28.54` · each icon `33x33`
  - CTA: fixed size `155x31` · padding `5.57 5.57` · gap `5.57` · text color Primary `13.92` / line-height `19.5` · arrow icon `17x17`

### Community Updates
- Layout: content block + 3-card grid overlay · fixed size `1002x354` · gap `11.14`
- **Content block:** fixed size `773x88` · gap `5.57`
  - heading: `25.05` / line-height `30.6` semibold · color D_Grey
  - text: `11.14` / line-height `16.7` · color D_Grey
- **Card grid:** fixed size `1002x256` · horizontal padding `100.23` · gap: auto
  - each card: `256x256`
  - image: `256x200`
  - content area: `221x124` · padding `11.14 11.14` · gap `11.14`
    - text: `13.92` / line-height `19.5` · color D_Grey
    - link: `198x31` · padding `5.57 5.57` · gap `5.57` · text `13.92` / line-height `19.5` · color Primary · arrow icon `17x17`

---

## Footer

### Final CTA
- Fixed size `1002x209` · vertical padding `22.27` · gap `22.27`
- Heading: `44.55` semibold / line-height `52.9` · color Black
- CTA button: `124x36` · bg Primary · text White · border-radius `2.78` · padding `22.27 9.74` · gap `5.57` · text `11.14` / line-height `16.7` · icon `17x17`

### Main Footer
- bg: Black · 2-column layout (company info / links) · fixed size `1002x229` · padding `114.85 44.55` · gap `87.01`
- **Company info:** logo `133x21` · text `9.74` / line-height `14.9` · social icons `22x22`
- **Links:** 2 link columns + email input column
  - heading↔links gap: `16.71` · heading `13.92` / line-height `19.5`
  - link↔link gap: `8.35` · link text `9.74` / line-height `14.9` · color Silver
  - email input (with icon): `255x40` · border-radius `5.57` · icon `18x18` · color White
