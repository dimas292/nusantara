# 🗺️ Quick Reference: Indonesia Interactive Map Component

## 📦 Import
```tsx
import ExploreMap from '@/app/atoms/explore-map';
```

## 🚀 Basic Usage
```tsx
<ExploreMap />
```

## 🎨 Quick Customization

### Change Map Theme
Edit in `explore-map.tsx` → `main_settings`:
```typescript
background_color: "#YOUR_COLOR"
state_color: "#YOUR_COLOR"
state_hover_color: "#YOUR_COLOR"
```

### Highlight a Province
Edit in `explore-map.tsx` → `state_specific`:
```typescript
IDJK: { 
  name: "Jakarta", 
  color: "#0ea5e9",
  description: "Capital city"
}
```

## 📍 Province Codes (Quick Reference)

| Region | Provinces |
|--------|-----------|
| **Sumatra** | IDAC, IDBE, IDJA, IDLA, IDRI, IDSB, IDSS, IDSU |
| **Java** | IDBT, IDJB, IDJI, IDJK, IDJT, IDYO |
| **Kalimantan** | IDKB, IDKI, IDKS, IDKT, IDKU |
| **Sulawesi** | IDGO, IDSA, IDSG, IDSN, IDSR, IDST |
| **Others** | IDBA, IDBB, IDKR, IDMA, IDMU, IDNB, IDNT, IDPA, IDPB |

## 🛠️ Common Tasks

### Add Location Marker
```typescript
locations: {
  "1": {
    name: "Bali",
    lat: "-8.340539",
    lng: "115.091949"
  }
}
```

### Disable Zoom
```typescript
main_settings: {
  zoom: "no",
  manual_zoom: "no"
}
```

### Change Popup Style
```typescript
main_settings: {
  popup_color: "#1e293b",
  popup_opacity: 0.95,
  popup_corners: 8
}
```

## 📚 Documentation Files
- `MAP_INTEGRATION_GUIDE.md` - Complete guide
- `CONVERSION_SUMMARY.md` - Technical details
- Component file - JSDoc comments

## 🐛 Troubleshooting

**Map not showing?**
1. Check `/public/vendor/html5countrymapv4.5/countrymap.js` exists
2. Check browser console for errors
3. Verify component is client-side: `'use client'` at top

**TypeScript errors?**
- All types are defined in the component
- Check `window.simplemaps_countrymap_mapdata` declaration

## 🔗 File Locations
- Component: `app/atoms/explore-map.tsx`
- Library: `public/vendor/html5countrymapv4.5/countrymap.js`
- Guide: `app/atoms/MAP_INTEGRATION_GUIDE.md`

---
✨ **Status**: Production Ready | 🔒 **Type Safe**: Yes | 📱 **Responsive**: Yes
