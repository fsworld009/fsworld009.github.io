# fsworld009 Portfolio Page

## Dependencies

- [NuxtJS](https://nuxtjs.org/) with TypeScript


## Development

### Dev Server

```bash
npm bun build_projects
npm run dev
```

Open dev server at https://localhost:3000
Has hot reload support


### Add a new project

1. Update `src/projects/index.json`
2. Create `src/projects/{project_id}.json`
3. Add screenshots in `src/static/screenshots/{project_id}`
4. Run `npm bun build_projects`
5. Test the new page with `npm run dev`
6. Build and deploy


## Build

```bash
npm run build
# Test the build
npm run test_dist
```

Open https://localhost:4000 to verify the build

## Deploy

```bash
npm run deploy
```


Read [Nuxt Readme](Nuxt_README.md) for more details