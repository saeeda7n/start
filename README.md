# Chat Metric

This project is the base for all startup apps that will be developed for customers.

## Features

- Seamless functionality for handling api calls by utilizing mockapi.io and connecting to it using React Query.
- Next.js framework for server-side rendering and optimized performance.
- TypeScript for type safety and enhanced development experience.
- Tailwind CSS and Shadcn UI for scalable and maintainable styling.
- Reusable components that can be easily integrated into other projects.

## Getting Started

To get started with BlockT, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/lWarwolfl/blockt.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blockt
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app.

## Directory Structure

The project's directory structure is as follows:

```
sugimoto-boilerplate/
  ├── src/
    ├── app/                        # Project pages and favicon ONLY
    ├── components/                 # All project components
    ├── components/common           # Reusable UI components
    ├── components/feature          # Reusable Feature components
    ├── components/layout           # Components needed in app layouts
    ├── components/pages            # Components used in pages following this naming convention:
                                    component name: {Route Name(Pascal Case)}Component used in tsx component
                                    folder: {route}/index.tsx
                                    Eg. dashboard/index.tsx DashboardComponent
    ├── components/providers        # Wrapper components
    ├── components/ui               # Shadcn components
    ├── data/                       # All mock data
    ├── lib/                        # All reusable scripts
    ├── lib/context                 # Reusable contexts for features
    ├── lib/form                    # Form configurationm files
    ├── lib/form/actions            # Serverside form actions
    ├── lib/form/validations        # Project form validation schemas
    ├── lib/hooks                   # Reusable hooks
    ├── lib/store                   # Zustand configuration
    ├── lib/supabase                # Supabase configuration
    ├── lib/typescript              # Reusable typescript definitions
    ├── lib/typescript/interfaces   # Reusable interfaces
    ├── lib/typescript/types        # Reusable types
    ├── lib/utils.ts                # All reusable functions
    ├── styles/                     # Project global styles
```

Delete .gitignore file from empty directories after using them.

## Env file (.env.local) should always be available

```
NEXT_PUBLIC_SUPABASE_URL={URL}
NEXT_PUBLIC_SUPABASE_ANON_KEY={Key}
```

## Extra data

- All used packages are viewable in `package.json`
- [Iconify](https://icon-sets.iconify.design/) is used for icon handling

## How to add an icon package

If you want to use a new icon package you have to install its json package from iconify
Eg. this is the right way to import an icon `import TablerIcon from '~icons/tabler/icon.jsx`

```bash
   pnpm install -D @iconify-json/tabler
```
