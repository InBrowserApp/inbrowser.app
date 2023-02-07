export const features = [
  "offline",
  "darkMode",
  "printerFriendly",
  "mobileFriendly",
  "staticSite",
  "openSource",
] as const;

export type Feature = (typeof features)[number];
