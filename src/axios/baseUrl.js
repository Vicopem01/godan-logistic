const base = `
${
  process.env.NODE_ENV === "development"
    ? "https://05fb-41-242-66-22.ngrok.io"
    : "https://api.godanlogistics.com"
}`;

export const baseUrl = base;
