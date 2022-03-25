const base = `
${
  process.env.NODE_ENV === "development"
    ? "http://172.20.10.11:4545"
    : "https://api.godanlogistics.com"
}`;

export const baseUrl = base;
