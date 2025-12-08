## Test Tube — Exam Prep Platform

Next.js + HeroUI app for learning and exam preparation (JAMB/WAEC/NECO). Includes reusable UI components, Redux Toolkit with persistence, and a component catalog at `/components`.

---

### Quick start
```bash
yarn install
yarn dev
# open http://localhost:3000
```

Env: create `.env.local` as needed (none required for basic run).

### Scripts
- `yarn dev` – start dev server
- `yarn build` – production build
- `yarn start` – run built app
- `yarn lint` – lint

### Architecture
- `app/` — App Router pages and layout. Component catalog lives at `app/components/page.tsx`.
- `components/ui` — HeroUI-based primitives (buttons, modal, drawer, dropdown, form fields, table primitives).
- `components/reusable` — Opinionated pieces (SearchInput, Pagination, TableComponent).
- `store/` — Redux Toolkit + redux-persist (session). `app` slice placeholder ready for features.
- `hooks/` — Reusable React hooks.
- `constants/seo.ts` — SEO/meta defaults for Test Tube.

### Component catalog
Browse live usage and code snippets at `/components`:
- Buttons, Drawer, Dropdown, PopupModal
- Form inputs (Input, PasswordInput, PhoneInput, CheckBox, Radio, Select, TextArea, ErrorMessage, label helpers)
- TableComponent with selectable rows, empty/skeleton states
- SearchInput and Pagination

### Theming
Palette in `app/globals.css`:
- Primary blues, action yellows, neutral grays, system success/error/warning
- Body uses Lexend/Black Han Sans fonts

### Redux
`store/index.ts` configures persisted store. Add feature reducers under `store/slice/` and combine in `rootReducer`.

### Icons & assets
Favicons in `public/favicon_io/`; logos in `public/img/logo/`.

### Testing notes
Run `yarn lint` before committing. No test suite configured yet.
