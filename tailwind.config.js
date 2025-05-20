module.exports = {
  content: [
    '/src/app/**/*.{js,ts,jsx,tsx}',
    '/src/app/components/**/*.{js,ts,jsx,tsx}', // If you move components here gildedrp\src\app\components\calltoaction.tsx
  ],
theme: {
    extend: {
      colors: {
        gold: "var(--color-gold)",
        darkbrown: "var(--color-gold)",
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
    },
  },
  plugins: [],
};
