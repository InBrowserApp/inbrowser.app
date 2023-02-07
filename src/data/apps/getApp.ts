import type { AppInfo } from "./types";
import { getApps } from "./getApps";

export function getApp(appId: string): AppInfo {
  return getApps()[appId];
}
