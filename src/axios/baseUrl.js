const base = `
${
  process.env.NODE_ENV === "development"
    ? "https://api.godanlogistics.com"
    : "https://api.godanlogistics.com"
}`;

export const baseUrl = base;
