import type { ReactNode } from "react";

export interface HeaderUser {
  id: string;
  name: string;
  email?: string;
  avatarUrl?: string;
}

export interface HeaderLink {
  label: string;
  href: string;
}

export interface HeaderNavItem extends HeaderLink {
  children?: HeaderLink[];
}

export interface HeaderActionProps {
  href: string;
  label: string;
  icon: ReactNode;
  count?: number;
}

export interface PromoItem {
  id: string;
  label: string;
  icon: "truck" | "gift";
}

export interface ContactItem {
  label: string;
  href: string;
}

export interface TopInfoBarData {
  promotions: PromoItem[];
  phone: ContactItem;
  email: ContactItem;
}

export interface TopInfoBarProps {
  user?: HeaderUser | null;
  shippingMessage?: string;
  announcementMessage?: string;
  phone?: string;
  email?: string;
  onLogout?: () => void;
}

export interface NavbarProps {
  user?: HeaderUser | null;
  logoSrc?: string;
  navItems?: HeaderNavItem[];
  categories?: HeaderLink[];
  cartCount?: number;
  wishlistCount?: number;
  supportHref?: string;
  onLogout?: () => void;
  onSearch?: (query: string) => void;
}