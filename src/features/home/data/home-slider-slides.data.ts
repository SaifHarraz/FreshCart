import type { HomeSliderSlide } from "../types/home.types";
export const homeSliderSlides: HomeSliderSlide[] = [
  {
    id: "fresh-products",
    title: "Fresh Products Delivered to your Door",
    description: "Get 20% off your first order",
    primaryAction: {
  label: "Shop Now",
  href: "/products",
  textColor: "#22C55E",
},
    secondaryAction: {
      label: "View Deals",
      href: "/deals",
    },
  },
  {
    id: "premium-quality",
    title: "Premium Quality Guaranteed",
    description: "Fresh from farm to your table",
    primaryAction: {
  label: "Shop Now",
  href: "/products",
  textColor: "#2B7FFF",
},
    secondaryAction: {
      label: "Learn More",
      href: "/about",
    },
  },
  {
    id: "fast-delivery",
    title: "Fast & Free Delivery",
    description: "Same day delivery available",
    primaryAction: {
  label: "Order Now",
  href: "/products",
  textColor: "#AD46FF",
},
    secondaryAction: {
      label: "Delivery Info",
      href: "/delivery",
    },
  },
];
