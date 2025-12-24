# 🏗️ Architecture Diagram: Map Component

## Component Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     Next.js Application                      │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              app/page.tsx (Home)                      │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │          <ExploreMap />                         │  │  │
│  │  │                                                  │  │  │
│  │  │  Component Lifecycle:                           │  │  │
│  │  │  1. Mount → useEffect triggers                  │  │  │
│  │  │  2. Load mapData (TypeScript)                   │  │  │
│  │  │  3. Set window.simplemaps_countrymap_mapdata    │  │  │
│  │  │  4. Inject <script> tag dynamically             │  │  │
│  │  │  5. Wait for script.onload                      │  │  │
│  │  │  6. Call window.simplemaps_countrymap.load()    │  │  │
│  │  │  7. Render map in #map div                      │  │  │
│  │  │  8. Unmount → cleanup                           │  │  │
│  │  │                                                  │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ loads from
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              public/vendor/html5countrymapv4.5/              │
│                                                               │
│  ┌─────────────────────┐      ┌──────────────────────────┐ │
│  │  countrymap.js      │      │    map_images/           │ │
│  │  (Vanilla JS Lib)   │◄─────│    - frog.png           │ │
│  │  - Raphael.js       │      │    - x.png              │ │
│  │  - SVG rendering    │      └──────────────────────────┘ │
│  │  - Map logic        │                                    │
│  └─────────────────────┘                                    │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

```
┌───────────────────┐
│   TypeScript      │
│   Component       │
│                   │
│   mapData: {      │
│     main_settings │
│     state_specific│
│     locations     │
│     labels        │
│   }               │
└─────────┬─────────┘
          │
          │ assign to
          ▼
┌───────────────────┐
│  window.global    │
│  .simplemaps_     │
│  countrymap_      │
│  mapdata          │
└─────────┬─────────┘
          │
          │ read by
          ▼
┌───────────────────┐
│  countrymap.js    │
│  (Vanilla JS)     │
│                   │
│  Raphael.js       │
│  renders SVG      │
└─────────┬─────────┘
          │
          │ outputs to
          ▼
┌───────────────────┐
│   DOM Element     │
│   <div id="map">  │
│                   │
│   [Interactive    │
│    SVG Map]       │
└───────────────────┘
```

## File Dependencies

```
app/atoms/explore-map.tsx (TypeScript React Component)
    ├── Dependencies:
    │   ├── react (useEffect, useRef)
    │   ├── Type definitions (MapSettings, StateData, etc.)
    │   └── DOM manipulation
    │
    ├── Loads at runtime:
    │   └── public/vendor/html5countrymapv4.5/countrymap.js
    │       ├── Raphael.js (embedded)
    │       ├── Shifty.js (embedded)
    │       └── SVG rendering engine
    │
    └── Outputs:
        └── Interactive Indonesia Map
            ├── 34 provinces (clickable)
            ├── Hover effects
            ├── Zoom controls
            ├── Labels
            └── Popups
```

## Type Safety Layer

```
┌────────────────────────────────────────────┐
│         TypeScript Interfaces               │
├────────────────────────────────────────────┤
│                                             │
│  interface MapSettings {                    │
│    width: string;                           │
│    background_color: string;                │
│    state_color: string;                     │
│    // ... 50+ more properties               │
│  }                                          │
│                                             │
│  interface StateData {                      │
│    name: string;                            │
│    description?: string;                    │
│    color?: string;                          │
│  }                                          │
│                                             │
│  interface MapData {                        │
│    main_settings: MapSettings;              │
│    state_specific: Record<string, State>;   │
│    locations: Record<string, Location>;     │
│  }                                          │
│                                             │
└────────────────────────────────────────────┘
                    │
                    │ provides type safety for
                    ▼
┌────────────────────────────────────────────┐
│         Component Implementation            │
│                                             │
│  const mapData: MapData = { ... }          │
│                                             │
│  ✅ Autocomplete                            │
│  ✅ Error checking                          │
│  ✅ Refactoring support                     │
└────────────────────────────────────────────┘
```

## Lifecycle Diagram

```
Component Mount
    │
    ├─► useEffect runs
    │   │
    │   ├─► Check if already loaded (scriptsLoadedRef)
    │   │   │
    │   │   ├─► No: Continue
    │   │   └─► Yes: Exit
    │   │
    │   ├─► Define mapData (TypeScript)
    │   │
    │   ├─► Assign to window.simplemaps_countrymap_mapdata
    │   │
    │   ├─► Create <script> element
    │   │   └─► src: /vendor/.../countrymap.js
    │   │
    │   ├─► Set script.onload handler
    │   │   └─► Call window.simplemaps_countrymap.load()
    │   │
    │   └─► Append script to document.body
    │
    └─► Render <div id="map">
        │
        │ (wait for script load)
        │
        └─► Map appears in div
            │
            ├─► User interactions work
            ├─► Hover effects active
            ├─► Zoom functional
            └─► Clicks registered

Component Unmount
    │
    └─► Cleanup function runs
        │
        └─► Call window.simplemaps_countrymap.delete()
            └─► Remove map instance
            └─► Free memory
```

## Integration Points

```
┌─────────────────────────────────────────────┐
│         Your Next.js App                     │
│                                              │
│  app/page.tsx                                │
│    │                                         │
│    ├─► <Hero />                              │
│    ├─► <Marquee />                           │
│    ├─► <IntroSection />                      │
│    ├─► <Timeline />                          │
│    └─► <ExploreMap />  ◄─── Integration     │
│                             Point            │
└─────────────────────────────────────────────┘

Component can be used anywhere:
✅ In pages
✅ In layouts
✅ In other components
✅ Multiple instances (with different IDs)
```

## Browser Compatibility

```
Modern Browsers (Chrome, Firefox, Safari, Edge)
    │
    ├─► SVG Support ✅
    ├─► ES6+ Support ✅
    ├─► Dynamic Script Loading ✅
    └─► useEffect/useRef Support ✅

Older Browsers (IE11)
    │
    └─► May need polyfills ⚠️
        ├─► Array methods
        ├─► Object methods
        └─► Promise
```

## Performance Characteristics

```
Initial Load:
    │
    ├─► Component: ~5KB (gzipped)
    ├─► countrymap.js: ~200KB (one-time load)
    ├─► map_images: ~5KB (cached)
    └─► Total: ~210KB first visit

Subsequent Loads:
    │
    └─► All cached by browser ✅
        └─► Near-instant load

Runtime:
    │
    ├─► Memory: ~10-15MB
    ├─► CPU: Minimal (only on interactions)
    └─► Network: 0 after initial load
```

## Security Considerations

```
✅ No external API calls
✅ All assets served from own domain
✅ No user data collection
✅ No third-party scripts
✅ Client-side only rendering
```

---

**Legend:**
- `┌─┐ └─┘` = Container/Module
- `│` = Connection/Flow
- `►` = Action/Process
- `✅` = Supported/Working
- `⚠️` = Warning/Caution
