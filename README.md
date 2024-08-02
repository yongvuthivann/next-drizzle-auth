## Getting Started

#### Technologies

<img src="https://neon.tech/favicon/favicon.png" width="50" height="50"> &nbsp;
<img src="https://avatars.githubusercontent.com/u/108468352?v=4" width="50" height="50">&nbsp;
<img src="https://camo.githubusercontent.com/45f543462e369487c8f824b170681a44d572ec00ba2277e9ef23b9c180e7866a/68747470733a2f2f6e6578742d617574682e6a732e6f72672f696d672f6c6f676f2f6c6f676f2d736d2e706e67" width="50" height="50">

### First, install packages

```
pnpm install
```

#### Second, fill in all required environment variables

```
DATABASE_URL=
AUTH_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```

#### Third, run migration

```
pnpm run migration:run
```

##### Last, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Optional, run local drizzle studio

```
pnpm run studio
```
