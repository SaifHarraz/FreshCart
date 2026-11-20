import type { HeaderNavItem, HeaderLink } from "./types";

export const headerConfig = {
  shippingMessage: "Free Shipping on Orders 500 EGP",
  announcementMessage: "New Arrivals Daily",
  phone: "+1 (800) 123-4567",
  email: "support@freshcart.com",
  supportHref: "/contact",
};

export const navigationItems: HeaderNavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/products",
  },
  {
    label: "Categories",
    href: "/categories",
    children: [
      {
        label: "All Categories",
        href: "/categories",
      },
      {
        label: "Electronics",
        href: "/products?category=6439d58a0049ad0b52b9003f",
      },
      {
        label: "Women's Fashion",
        href: "/products?category=6439d5b90049ad0b52b90048",
      },
      {
        label: "Men's Fashion",
        href: "/products?category=6439d2d167d9aa4ca970649f",
      },
      {
        label: "Beauty & Health",
        href: "/products?category=6439d40367d9aa4ca97064a8",
      },
    ],
  },
  {
    label: "Brands",
    href: "/brands",
  },
];

export const accountLinks: HeaderLink[] = [
  { label: "My Profile", href: "/profile" },
  { label: "My Orders", href: "/orders" },
  { label: "My Wishlist", href: "/wishlist" },
  { label: "Addresses", href: "/profile/addresses" },
  { label: "Settings", href: "/profile/settings" },
];