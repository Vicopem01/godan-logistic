const base = `
${
  process.env.NODE_ENV === "development"
    ? "https://godanlogistics.herokuapp.com"
    : "https://api.godanlogistics.com"
}`;

export const baseUrl = base;
