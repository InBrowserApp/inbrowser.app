import type { Component } from "vue";
import type { Feature } from "@/data/features";
import IconDarkMode from "@vicons/fluent/DarkTheme20Filled";
import IconOffline from "@vicons/carbon/CloudOffline";

export const icons = {
  darkMode: IconDarkMode,
  offline: IconOffline,
} as Record<Feature, Component>;
