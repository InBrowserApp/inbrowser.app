import { defineComponent, h } from "vue";
import FeatureBase from "./FeatureBase.vue";
import { icons } from "./icons";
import { labels } from "./labels";
import type { Feature } from "@/data/features";
import { features } from "@/data/features";

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

export const featureComponents = features.reduce((acc, feature) => {
  acc[feature] = FeatureBaseFactory(feature);
  return acc;
}, {} as Record<Feature, ReturnType<typeof FeatureBaseFactory>>);
