import type { Component } from "vue";
import type { Feature } from "@/data/features";
import IconDarkMode from "@vicons/fluent/DarkTheme20Filled";
import IconOffline from "@vicons/carbon/CloudOffline";
import IconPrinter from "@vicons/carbon/Printer";
import IconMobile from "@vicons/fluent/Phone16Regular";
import IconStatic from "@vicons/fluent/Box16Regular";
import IconOpenSource from "@vicons/fluent/Code16Regular";

export const icons = {
  darkMode: IconDarkMode,
  offline: IconOffline,
  printerFriendly: IconPrinter,
  mobileFriendly: IconMobile,
  staticSite: IconStatic,
  openSource: IconOpenSource,
} as Record<Feature, Component>;
