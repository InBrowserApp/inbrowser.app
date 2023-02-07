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
    source: "https://github.com/InBrowserApp/tldr.inbrowser.app",
  },
};

export function getApps() {
  return apps;
}
