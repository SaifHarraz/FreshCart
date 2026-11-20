import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headset,
} from "lucide-react";

export const homeBenefits = [
  {
    id: "shipping",
    title: "Free Shipping",
    description: "On orders over 500 EGP",
    icon: Truck,
    iconColor: "#2B7FFF",
    iconBackground:  "#EFF6FF",
  },
  {
    id: "payment",
    title: "Secure Payment",
    description: "100% secure transactions",
    icon: ShieldCheck,
    iconColor: "#10B981",
    iconBackground:  "#ECFDF5",
  },
  {
    id: "returns",
    title: "Easy Returns",
    description: "14-day return policy",
    icon: RotateCcw,
    iconColor: "#F97316",
    iconBackground: "#FFF7ED",
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Dedicated support team",
    icon: Headset,
    iconColor: "#A855F7",
    iconBackground:  "#FAF5FF",
  },
];