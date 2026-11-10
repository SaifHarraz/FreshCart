"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  CircleUserRound,
  Contact,
  Heart,
  LogOut,
  Package,
  Settings,
  UserRound,
} from "lucide-react";
import type { HeaderUser } from "../../types";
import { accountLinks } from "../../header-config";



interface AccountMenuProps {
  user: HeaderUser ;
  onLogout?: () => void;
}

const accountIcons = [
  UserRound,
  Package,
  Heart,
  Contact,
  Settings,
];

export default function AccountMenu({
  user,
  onLogout,
}: AccountMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative hidden lg:block">
      <button
        type="button"
        title="Account"
        aria-label="Open account menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
        className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
      >
        <CircleUserRound className="h-6 w-6 text-gray-500" />
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close account menu"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute top-full right-0 z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
            {/* User information */}
            <div className="border-b border-gray-100 p-4">
              <div className="flex items-center gap-3">
                {user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100">
                    <CircleUserRound className="h-6 w-6 text-primary-600" />
                  </div>
                )}

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-gray-800">
                    {user.name}
                  </p>

                  {user.email && (
                    <p className="truncate text-xs text-gray-400">
                      {user.email}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Account links */}
            <div className="py-2">
              {accountLinks.map((link, index) => {
                const Icon = accountIcons[index];

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
                  >
                    <Icon className="h-4 w-4 text-gray-400" />
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Sign out */}
            <div className="border-t border-gray-100 py-2">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onLogout?.();
                }}
                className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-red-500 transition-colors hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}