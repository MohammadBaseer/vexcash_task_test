# VEXCASH – Responsive Account Page

React 18 + TypeScript + Vite, styled with **CSS Modules** (no CSS framework).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build in /dist
npm run typecheck  # type-check only
```

## Breakpoints (mobile-first)

| Breakpoint    | Range       | Navigation                       | Header                          | Content                          |
|---------------|-------------|----------------------------------|---------------------------------|----------------------------------|
| Small mobile  | ≤ 567px     | Hamburger → 2-column grid        | Logo row + user bar, "Status"   | 1 column, label above value      |
| Large mobile  | 568–767px   | Hamburger → 3-column grid        | same                            | 2 columns, label above value     |
| Tablet        | 768–991px   | Hamburger → 3-column grid        | "Status Ihrer Identifizierung"  | 2 columns, label/value in a row  |
| Desktop       | 992–1199px  | Always visible 3-column grid     | Logo + user bar in one row      | 2 columns, label/value in a row  |
| Large desktop | ≥ 1200px    | Vertical sidebar (280px)         | Logo cell aligned with sidebar  | 2 columns, label/value in a row  |
