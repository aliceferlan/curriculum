// src/theme/theme.ts
export const supportedTheme = [
    "light", "dark", "cupcake", "bumblebee",
    "emerald", "corporate", "synthwave", "retro",
    "cyberpunk", "valentine", "halloween", "garden",
    "forest", "aqua", "lofi", "pastel",
    "fantasy", "wireframe", "black", "luxury",
    "dracula", "cmyk", "autumn", "business",
    "acid", "lemonade", "night", "coffee",
    "winter", "dim", "nord", "sunset",
] as const;

export type ThemeType = typeof supportedTheme[number];