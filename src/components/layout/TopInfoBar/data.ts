import type { TopInfoBarData } from "../types";

export const topInfoBarData: TopInfoBarData = {
  promotions: [
    {
      id: "free-shipping",
      label: "Free Shipping on Orders 500 EGP",
      icon: "truck",
    },
    {
      id: "new-arrivals",
      label: "New Arrivals Daily",
      icon: "gift",
    },
  ],

  phone: {
    label: "+1 (800) 123-4567",
    href: "tel:+18001234567",
  },

  email: {
    label: "support@freshcart.com",
    href: "mailto:support@freshcart.com",
  },
};