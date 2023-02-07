import { defineComponent, h } from "vue";
import FeatureBase from "./FeatureBase.vue";
import { icons } from "./icons";
import { labels } from "./labels";
import type { Feature } from "@/data/features";

const FeatureBaseFactory = (feature: Feature) => {
  return defineComponent({
    feature,
    render() {
      return h(
        FeatureBase,
        {
          icon: icons[feature],
        },
        () => labels[feature]
      );
    },
  });
};

export const FeatureDarkMode = FeatureBaseFactory("darkMode");
export const FeatureOffline = FeatureBaseFactory("offline");
