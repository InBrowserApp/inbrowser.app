import type { AppInfo } from "./types";

const apps: Record<string, AppInfo> = {
  "tldr.inbrowser.app": {
    title: "tldr",
    url: "https://tldr.inbrowser.app",
    features: {
      offline: true,
      darkMode: true,
      printerFriendly: true,
      mobileFriendly: true,
      staticSite: true,
      openSource: true,
    },
  },
};

export function getApps() {
  return apps;
}
