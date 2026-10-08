# 63 HR Solutions — Website

A one-page, bilingual (English / Arabic) website. Plain HTML, CSS and JavaScript: no build step, no paid services.

## What's in this folder

| File | Purpose |
|---|---|
| `index.html` | The whole website (content, design, language switch, 63-services directory) |
| `brand-settings.js` | **All contact details**: email, WhatsApp numbers by country, social channels |
| `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `logo-512.png` | Browser and phone icons |
| `og-image.png` | The preview image shown when the link is shared on Instagram, WhatsApp or LinkedIn |
| `logo.svg` | Vector logo |
| `site.webmanifest`, `robots.txt`, `sitemap.xml`, `vercel.json` | Search engine and hosting settings |

## 1. Contact details: `brand-settings.js`

All contact details live in **one file, `brand-settings.js`**. The contact section, the country selector, the floating WhatsApp button, the footer and the search-engine data all read from it. Nothing is repeated inside `index.html`.

Current settings:

| Setting | Value |
|---|---|
| Brand name | 63 HR Solutions |
| Email | mrkhalidhijawi@gmail.com |
| Saudi Arabia WhatsApp | +966 50 665 5192 |
| Jordan WhatsApp | +962 79 840 0327 |
| Instagram | @63hrsolutions (https://www.instagram.com/63hrsolutions/) |
| LinkedIn | Coming soon |
| Website | Add once it is live |

**Common updates** (instructions are also at the top of the file):

- **LinkedIn goes live:** paste the URL into `"url"` and change `"status": "coming-soon"` to `"status": "active"`.
- **Website:** paste your public address into `"website"`.
- **Facebook, YouTube, TikTok or X:** copy the Instagram block inside `"social"`, set `"id"` to `facebook`, `youtube`, `tiktok` or `x`, and fill in `"url"` and `"handle"`. The right icon appears automatically.
- **Another country:** copy a block inside `"whatsapp"`. A new button appears in the country selector.

### Country-specific links for marketing

The site chooses the WhatsApp number in this order:

1. The `country` in the link.
2. The visitor's last choice.
3. The visitor's time zone (Riyadh → Saudi Arabia, Amman → Jordan).
4. Saudi Arabia.

For campaigns, use:

- Saudi audience: `https://your-address/?country=sa` (add `&lang=ar` for Arabic)
- Jordan audience: `https://your-address/?country=jo`

The site reads these settings once and then removes them from the address bar, so visitors only see the clean address.

## 2. Publish for free on Vercel

**Option A: GitHub + Vercel (recommended; updates are easy later)**

1. Create a free account at **github.com**.
2. Click **New repository**, name it `63-hr-solutions`, set it to **Public**, and click **Create repository**.
3. On the new repository page, click **uploading an existing file**, drag in **all the files from this folder** (not the folder itself), then click **Commit changes**.
4. Go to **vercel.com** and choose **Sign Up → Continue with GitHub** (Hobby plan, free).
5. Click **Add New… → Project**, find `63-hr-solutions`, and click **Import**.
6. Leave **Framework Preset** as **Other** and click **Deploy**.
7. After about a minute you get a public address such as **https://63-hr-solutions.vercel.app**. Put it in your Instagram bio.

To change the site later, edit `index.html` on GitHub (pencil icon → **Commit changes**). Vercel republishes automatically.

**Option B: Vercel CLI (if you have Node.js installed)**

```bash
cd path/to/this/folder
npx vercel --prod
```

Follow the prompts (log in, accept the defaults).

## 3. If your address is not `63-hr-solutions.vercel.app`

Vercel may give you a slightly different name if that one is taken. If so, open `index.html`, `robots.txt` and `sitemap.xml`, and replace every `63-hr-solutions.vercel.app` with your actual address. This keeps the link preview image working on WhatsApp and LinkedIn.

You can also change the project name in Vercel under **Settings → General → Project Name**, or add a free alias under **Settings → Domains**.

## 4. Check the link preview

- **Facebook / Instagram / WhatsApp:** paste your URL into the Sharing Debugger at developers.facebook.com/tools/debug and click **Scrape Again**.
- **LinkedIn:** paste it into linkedin.com/post-inspector.

WhatsApp caches previews, so a change can take a while to show in chats where the link was already shared.

## Language

The site opens in Arabic for visitors whose phone or browser is set to Arabic, and in English otherwise. The **العربية / English** button switches languages, and the choice is remembered on that device. You can also share a link that opens in a specific language: `https://your-address/?lang=ar` or `?lang=en`.

## Editing text

All English and Arabic text lives in `index.html` inside `var I18N = {...}` (search for `"en":` and `"ar":`). Edit the text between the quotes. Keep the keys (the names before the colons) unchanged.
