import {
  FaTruckFast,
  FaRotateLeft,
  FaShieldHalved,
  FaHeadset,
} from "react-icons/fa6";

import type { BenefitItem } from "./types";

export const benefitItems: BenefitItem[] = [
  {
    id: "free-shipping",
    title: "Free Shipping",
    description: "On orders over 500 EGP",
    icon: FaTruckFast,
  },
  {
    id: "easy-returns",
    title: "Easy Returns",
    description: "14-day return policy",
    icon: FaRotateLeft,
  },
  {
    id: "secure-payment",
    title: "Secure Payment",
    description: "100% secure checkout",
    icon: FaShieldHalved,
  },
  {
    id: "customer-support",
    title: "24/7 Support",
    description: "Contact us anytime",
    icon: FaHeadset,
  },
];