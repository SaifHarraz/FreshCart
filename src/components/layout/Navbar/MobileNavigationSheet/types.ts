export interface MobileNavigationSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user?: { name: string } | null;
  logoSrc?: string;
  navItems: { label: string; href: string }[];
  supportHref: string;
  onLogout?: () => void;
  onSearch?: (query: string) => void;
}