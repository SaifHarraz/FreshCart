"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Headset,
  Heart,
  Search,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

import type { MobileNavigationSheetProps } from "./types";

export default function MobileNavigationSheet({
  open,
  onOpenChange,
  user,
  logoSrc,
  navItems,
  supportHref,
  onLogout,
  onSearch,
}: MobileNavigationSheetProps) {
  const [query, setQuery] = useState("");

  function closeSheet() {
    onOpenChange(false);
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch?.(query.trim());
    closeSheet();
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-80 max-w-[85vw] gap-0 overflow-y-auto p-0"
      >
        <SheetTitle className="sr-only">
          Mobile Navigation
        </SheetTitle>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 p-4">
          <Link
            href="/"
            onClick={closeSheet}
            aria-label="FreshCart home"
          >
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt="FreshCart"
                width={160}
                height={31}
                className="h-8 w-auto"
                priority
              />
            ) : (
              <span className="text-2xl font-bold text-gray-800">
                FreshCart
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={closeSheet}
            aria-label="Close menu"
            className="flex size-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="border-b border-gray-100 p-4"
        >
          <div className="relative">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary focus:bg-white"
            />

            <button
              type="submit"
              aria-label="Search"
              className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg bg-primary text-white"
            >
              <Search className="size-4" />
            </button>
          </div>
        </form>

        {/* Main navigation */}
        <nav className="p-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeSheet}
                className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="mx-4 border-t border-gray-100" />

        {/* Shopping links */}
        <div className="space-y-1 p-4">
          <Link
            href="/wishlist"
            onClick={closeSheet}
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-primary-50"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-red-50">
              <Heart className="size-5 text-red-500" />
            </span>
            <span className="font-medium text-gray-700">
              Wishlist
            </span>
          </Link>

          <Link
            href="/cart"
            onClick={closeSheet}
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-primary-50"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-primary-50">
              <ShoppingCart className="size-5 text-primary" />
            </span>
            <span className="font-medium text-gray-700">
              Cart
            </span>
          </Link>
        </div>

        <div className="mx-4 border-t border-gray-100" />

        {/* Account actions */}
        <div className="p-4">
          {user ? (
            <div className="space-y-2">
              <Link
                href="/profile"
                onClick={closeSheet}
                className="flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-primary-50"
              >
                <UserRound className="size-5 text-primary" />
                {user.name}
              </Link>

              <button
                type="button"
                onClick={() => {
                  closeSheet();
                  onLogout?.();
                }}
                className="w-full rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-500 hover:bg-red-50"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                href="/login"
                onClick={closeSheet}
                className="flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                onClick={closeSheet}
                className="flex items-center justify-center rounded-xl border-2 border-primary px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-50"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Support */}
        <Link
          href={supportHref}
          onClick={closeSheet}
          className="mx-4 mb-4 mt-1 flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-colors hover:bg-primary-50"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-100">
            <Headset className="size-5 text-primary" />
          </span>

          <span>
            <span className="block text-sm font-semibold text-gray-700">
              Need Help?
            </span>
            <span className="block text-sm text-primary">
              Contact Support
            </span>
          </span>
        </Link>
      </SheetContent>
    </Sheet>
  );
}
