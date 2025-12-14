# Clone Checklist: interim.Quest → [new-domain].Quest

## Pre-Clone (in interim.Quest)
- [ ] Delete cruft files (legacy .md docs, one-time scripts)
- [ ] Ensure all features working
- [ ] Commit any pending changes

## Clone Process

### Step 1: Duplicate Directory
In Finder: Right-click `interim.Quest` → Duplicate → Rename to `[new-domain].Quest`

### Step 2: Delete Before Find-Replace
Delete these from the new clone:
```
node_modules/
.next/
.git/
.env.local
.DS_Store
```

### Step 3: Find-Replace (Domain & Branding)

| Find | Replace | Notes |
|------|---------|-------|
| `interim.quest` | `[new].quest` | Domain URLs |
| `Interim.Quest` | `[New].Quest` | Brand name |
| `interim-quest` | `[new]-quest` | Package name |
| `@interim.quest` | `@[new].quest` | Email addresses |
| `site = 'interim'` | `site = '[new]'` | Database filter |
| `app = 'interim'` | `app = '[new]'` | Database filter |
| `WHERE site = 'interim'` | `WHERE site = '[new]'` | SQL queries |

### Step 4: Rename Page Directories

For **interim.Quest**:
- Keep: `interim-cfo`, `interim-cmo`, etc. (already exist)
- Rename: `interim-cfo-jobs-uk` → `interim-cfo-jobs-uk`
- Rename: `interim-jobs` → `interim-jobs`
- Delete: `part-time-*` pages (not relevant)

For **part-time.Quest**:
- Keep: `part-time-cfo-jobs-uk`, `part-time-cmo-jobs-uk`
- Rename: `interim-cfo-jobs-uk` → `part-time-cfo-jobs-uk`
- Rename: `interim-jobs` → `part-time-jobs`
- Delete: `interim-*` pages (not relevant)

### Step 5: Update Key Files Manually

**package.json:**
```json
{
  "name": "[new]-quest",
  ...
}
```

**app/layout.tsx:**
- Update metadata title template
- Update OpenGraph URLs
- Update Twitter handle if different

**app/sitemap.ts:**
- Update static route list
- Update database query filter

**app/robots.ts:**
- Update default URL

**.env.example:**
- Update NEXT_PUBLIC_APP_URL example

### Step 6: Environment Setup

Create `.env.local` with:
```
DATABASE_URL=<same Neon connection>
NEXT_PUBLIC_APP_URL=https://[new].quest
NEXT_PUBLIC_HUME_CONFIG_ID=<new Hume config for this domain>
STACK_PROJECT_ID=<new Stack Auth project>
STACK_SECRET_SERVER_KEY=<new Stack Auth secret>
```

### Step 7: External Services

- [ ] **Hume AI**: Create new config with domain-specific voice/persona
- [ ] **Stack Auth**: Create new project for this domain
- [ ] **Vercel**: Create new project, connect repo
- [ ] **Domain**: Configure DNS for [new].quest

### Step 8: Database

The shared Neon database uses `site` column to filter:
- `interim` - interim.quest data
- `interim` - interim.quest data
- `part-time` - part-time.quest data

No new tables needed - just filter by site.

### Step 9: Test & Deploy

```bash
cd [new].Quest
pnpm install
pnpm dev
# Test locally at localhost:3000
pnpm build  # Verify no build errors
```

Deploy to Vercel and verify:
- [ ] Homepage loads
- [ ] Job listings filter correctly
- [ ] Contact forms submit
- [ ] Hume voice connects
- [ ] SEO metadata correct

---

## Quick Reference: Domain-Specific Values

| Domain | Site Filter | Email | Hume Config |
|--------|-------------|-------|-------------|
| interim.quest | `interim` | @interim.quest | (existing) |
| interim.quest | `interim` | @interim.quest | (create new) |
| part-time.quest | `part-time` | @part-time.quest | (create new) |
