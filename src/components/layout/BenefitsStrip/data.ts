
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Headset,
} from "lucide-react";

import type { BenefitItem } from "./types";

export const benefitItems: BenefitItem[] = [
  {
    id: "free-shipping",
    title: "Free Shipping",
    description: "On orders over 500 EGP",
    icon: Truck,
  },
  {
    id: "easy-returns",
    title: "Easy Returns",
    description: "14-day return policy",
    icon: RotateCcw,
  },
  {
    id: "secure-payment",
    title: "Secure Payment",
    description: "100% secure checkout",
    icon: ShieldCheck,
  },
  {
    id: "customer-support",
    title: "24/7 Support",
    description: "Contact us anytime",
    icon: Headset,
  },
];
