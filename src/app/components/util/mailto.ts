export const makeMailto = (
  email: string,
  subject: string,
  body?: string
) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ''
  }`;