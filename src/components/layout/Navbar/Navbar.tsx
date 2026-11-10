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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
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
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() =>
                setIsMobileMenuOpen((previous) => !previous)
              }
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 left-0 border-t border-gray-100 bg-white shadow-xl lg:hidden">
            <div className="max-h-[calc(100dvh-64px)] overflow-y-auto p-4">
              {/* Mobile search */}
              <div className="mb-4">
                <MobileSearch onSearch={onSearch} />
              </div>

              {/* Navigation */}
              <NavigationLinks
                items={navItems}
                mobile
                onNavigate={closeMobileMenu}
              />

              {/* Support */}
              <Link
                href={supportHref}
                onClick={closeMobileMenu}
                className="mt-3 flex items-center gap-3 rounded-lg border-t border-gray-100 px-3 py-4 text-sm font-medium text-gray-700"
              >
                <Headset className="h-5 w-5 text-primary" />
                Support — 24/7 Help
              </Link>

              {/* Mobile account actions */}
              <div className="mt-2 border-t border-gray-100 pt-3">
                {user ? (
                  <>
                    <Link
                      href="/profile"
                      onClick={closeMobileMenu}
                      className="mb-3 flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700"
                    >
                      <UserRound className="h-5 w-5 text-primary" />
                      {user.name}
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        closeMobileMenu();
                        onLogout?.();
                      }}
                      className="w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-red-500 hover:bg-red-50"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/login"
                      onClick={closeMobileMenu}
                      className="rounded-full border border-primary px-4 py-2.5 text-center text-sm font-semibold text-primary"
                    >
                      Sign In
                    </Link>

                    <Link
                      href="/signup"
                      onClick={closeMobileMenu}
                      className="rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/*
 * Kept separate from the desktop SearchBar so the mobile header
 * can show its own responsive search field.
 */
function MobileSearch({
  onSearch,
}: {
  onSearch?: (query: string) => void;
}) {
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