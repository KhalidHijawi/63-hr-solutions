/* =====================================================================
   63 HR SOLUTIONS — BRAND & CONTACT SETTINGS
   ---------------------------------------------------------------------
   This is the ONLY place contact details are stored. Every WhatsApp
   button, email link, social link, the footer and the search-engine data
   on the website read from here. Change a value once and it updates
   everywhere.

   HOW TO UPDATE
   - WhatsApp: "number" = digits only with country code (no +, no spaces).
               "display" = how the number is shown to visitors.
   - Add a country: copy one block inside "whatsapp", change the values.
                    "timezones" lets the site pre-select that country for
                    visitors located there.
   - LinkedIn: paste the page URL into "url" and change "status" from
               "coming-soon" to "active".
   - Add a channel (Facebook, YouTube, TikTok, X): copy a block inside
               "social", set "id" to facebook / youtube / tiktok / x,
               fill in "url" and "handle", and set "status": "active".
   - Website: paste the public address into "website" once it is live.
   - Another language: add a key such as "fr" next to "en" and "ar" in
               each label (and in the I18N block of index.html).
   Keep the quotes and commas exactly as they are.
   ===================================================================== */
window.BRAND_SETTINGS = {
  "brandName": "63 HR Solutions",
  "tagline": { "en": "Your Outsourced HR Department.", "ar": "قسم الموارد البشرية الخارجي لشركتك." },
  "website": "",
  "email": "mrkhalidhijawi@gmail.com",
  "defaultCountry": "sa",
  "whatsappPrefilledMessage": true,
  "whatsapp": [
    {
      "country": "sa",
      "number": "966506655192",
      "display": "+966 50 665 5192",
      "countryName": { "en": "Saudi Arabia", "ar": "السعودية" },
      "label": { "en": "Saudi Arabia WhatsApp", "ar": "واتساب السعودية" },
      "cta": { "en": "Contact us on WhatsApp – Saudi Arabia", "ar": "تواصل معنا عبر واتساب – السعودية" },
      "timezones": ["Asia/Riyadh"]
    },
    {
      "country": "jo",
      "number": "962798400327",
      "display": "+962 79 840 0327",
      "countryName": { "en": "Jordan", "ar": "الأردن" },
      "label": { "en": "Jordan WhatsApp", "ar": "واتساب الأردن" },
      "cta": { "en": "Contact us on WhatsApp – Jordan", "ar": "تواصل معنا عبر واتساب – الأردن" },
      "timezones": ["Asia/Amman"]
    }
  ],
  "social": [
    {
      "id": "instagram",
      "name": "63HR Solutions",
      "url": "https://www.instagram.com/63hrsolutions/",
      "handle": "@63hrsolutions",
      "label": { "en": "Instagram", "ar": "إنستغرام" },
      "status": "active"
    },
    {
      "id": "linkedin",
      "name": "63 HR Solutions",
      "url": "",
      "handle": "",
      "label": { "en": "LinkedIn", "ar": "لينكدإن" },
      "status": "coming-soon"
    }
  ]
};
