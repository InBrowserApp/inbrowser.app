import type { AppInfo } from "./types";

const apps: Record<string, AppInfo> = {
  "tldr.inbrowser.app": {
    title: "tldr",
    url: "https://tldr.inbrowser.app",
  },
};

export function getApps() {
  return apps;
}
