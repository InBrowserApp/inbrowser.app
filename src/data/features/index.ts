export const features = ["offline", "darkMode"] as const;

export type Feature = (typeof features)[number];
