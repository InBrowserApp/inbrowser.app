import type { AppInfo } from "./types";
import apps from "@/data/temp/infos.json";

export function getApps(): Record<string, AppInfo> {
  return apps;
}
