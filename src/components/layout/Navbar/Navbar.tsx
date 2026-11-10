"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Headset,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";
import MobileNavigationSheet from "./MobileNavigationSheet/MobileNavigationSheet";
import { headerConfig, navigationItems } from "../header-config";
import type { NavbarProps } from "../types";
import SearchBar from "./SearchBar/SearchBar";
import NavigationLinks from "./NavigationLinks/NavigationLinks";
import HeaderAction from "./HeaderAction/HeaderAction";
import AccountMenu from "./AccountMenu/AccountMenu";

export default function Navbar({
  user,
  logoSrc,
  navItems = navigationItems,
  cartCount = 0,
  wishlistCount = 0,
  supportHref = headerConfig.supportHref,
  onLogout,
  onSearch,
}: NavbarProps) {
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileSheetOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[72px] lg:gap-8">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="FreshCart home">
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt="FreshCart"
                width={160}
                height={31}
                priority
                className="h-6 w-auto lg:h-8"
              />
            ) : (
              <span className="text-2xl font-bold tracking-tight text-primary">
                FreshCart
              </span>
            )}
          </Link>

          {/* Desktop search */}
          <SearchBar onSearch={onSearch} />

          {/* Desktop navigation */}
          <NavigationLinks items={navItems} />

          {/* Header actions */}
          <div className="flex items-center gap-1 lg:gap-2">
            {/* Support */}
            <Link
              href={supportHref}
              className="mr-2 hidden items-center gap-2 border-r border-gray-200 pr-3 transition-opacity hover:opacity-80 lg:flex"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Headset className="h-5 w-5 text-primary" />
              </div>

              <div className="text-xs">
                <p className="text-gray-400">Support</p>
                <p className="font-semibold text-gray-700">24/7 Help</p>
              </div>
            </Link>

            {/* Wishlist */}
            <HeaderAction
              href="/wishlist"
              label="Wishlist"
              count={wishlistCount}
              icon={<Heart className="h-5 w-5" />}
            />

            {/* Cart */}
            <HeaderAction
              href="/cart"
              label="Cart"
              count={cartCount}
              icon={<ShoppingCart className="h-5 w-5" />}
            />

            {/* Signed-in account */}
            {user ? (
              <AccountMenu user={user} onLogout={onLogout} />
            ) : (
              <Link
                href="/login"
                className="ml-2 hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary-hover lg:flex"
              >
                <UserRound className="h-4 w-4" />
                Sign In
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Open navigation"
              onClick={() => setIsMobileSheetOpen(true)}
              className="lg:hidden"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMobileSheetOpen && (
          <MobileNavigationSheet
            open={isMobileSheetOpen}
            onOpenChange={setIsMobileSheetOpen}
            user={user}
            logoSrc={logoSrc}
            navItems={navItems}
            supportHref={supportHref}
            onLogout={onLogout}
            onSearch={onSearch}
          />
        )}
      </div>
    </header>
  );
}

/*
 * Kept separate from the desktop SearchBar so the mobile header
 * can show its own responsive search field.
 */
function MobileSearch({ onSearch }: { onSearch?: (query: string) => void }) {
  const [query, setQuery] = useState("");

  return (
    <form
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        onSearch?.(query.trim());
      }}
      className="relative"
    >
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for products, brands and more..."
        aria-label="Search products"
        className="w-full rounded-full border border-gray-200 bg-gray-50 px-5 py-3 pr-12 text-sm outline-none transition-colors focus:border-secondary0 focus:bg-white"
      />

      <button
        type="submit"
        aria-label="Submit search"
        className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-hover"
      >
        <Search className="h-4 w-4" />
      </button>
    </form>
  );
}
