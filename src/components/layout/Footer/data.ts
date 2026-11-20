import type { FooterLinkGroup, SocialLink } from "./types";

export const shopLinks = [
  { label: "All Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "Brands", href: "/brands" },
  { label: "Electronics", href: "/products" },
  { label: "Men's Fashion", href: "/products" },
  { label: "Women's Fashion", href: "/products" },
];

export const guestAccountLinks = [
  { label: "Wishlist", href: "/wishlist" },
  { label: "Shopping Cart", href: "/cart" },
  { label: "Sign In", href: "/login" },
  { label: "Create Account", href: "/signup" },
];

export const authenticatedAccountLinks = [
  { label: "My Account", href: "/profile" },
  { label: "Order History", href: "/orders" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Shopping Cart", href: "/cart" },
];

export const supportLinks = [
  { label: "Contact Us", href: "mailto:support@freshcart.com" },
  { label: "Help Center", href: "#help-center" },
  { label: "Shipping Info", href: "#shipping-info" },
  { label: "Returns & Refunds", href: "#returns-refunds" },
  { label: "Track Order", href: "/orders" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "Terms of Service", href: "#terms-of-service" },
  { label: "Cookie Policy", href: "#cookie-policy" },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
];

export const footerContact = {
  phone: "+1 (800) 123-4567",
  phoneHref: "tel:+18001234567",
  email: "support@freshcart.com",
  emailHref: "mailto:support@freshcart.com",
  address: "123 Commerce Street, New York, NY 10001",
};