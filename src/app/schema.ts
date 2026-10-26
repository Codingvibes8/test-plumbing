export const plumbingSchema = {
  "@context": "https://schema.org",
  "@type": "PlumbingService",
  "name": "ApexFlow Plumbing & Heating",
  "image": "https://apexflowplumbing.co.uk/logo.png",
  "telephone": "+448001234567",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "High Street",
    "addressLocality": "Slough",
    "postalCode": "SL1 1AA",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5104,
    "longitude": -0.5955
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "340"
  },
  "areaServed": ["Slough", "Windsor", "Maidenhead", "Eton", "Beaconsfield", "Gerrards Cross"]
};
