export type AppInfo = {
  title: string;
  url: string;
  source?: string;
  description?: string;
  features: {
    offline?: boolean;
    darkMode?: boolean;
    printerFriendly?: boolean;
    mobileFriendly?: boolean;
    staticSite?: boolean;
    openSource?: boolean;
  };
};
