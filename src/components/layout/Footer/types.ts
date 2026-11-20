import type { HeaderUser } from "../types";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "twitter" | "instagram" | "youtube";
}

export interface FooterProps {
  user?: HeaderUser | null;
  logoSrc?: string;
}

export interface FooterLinkColumnProps {
  title: string;
  links: FooterLink[];
}