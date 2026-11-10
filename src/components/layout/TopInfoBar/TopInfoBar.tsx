"use client";

import Link from "next/link";
import {
  Gift,
  LogOut,
  Mail,
  Phone,
  Truck,
  User,
  UserPlus,
} from "lucide-react";

import { headerConfig } from "../header-config";
import type { TopInfoBarProps } from "../types";

export default function TopInfoBar({
  user,
  shippingMessage = headerConfig.shippingMessage,
  announcementMessage = headerConfig.announcementMessage,
  phone = headerConfig.phone,
  email = headerConfig.email,
  onLogout,
}: TopInfoBarProps) {
  return (
    <div className="hidden border-b border-gray-100 text-sm lg:block">
      <div className="container mx-auto px-4">
        <div className="flex h-10 items-center justify-between">
          {/* Promotional messages */}
          <div className="flex items-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary-600" />
              <span>{shippingMessage}</span>
            </div>

            <div className="flex items-center gap-2">
              <Gift className="h-4 w-4 text-primary-600" />
              <span>{announcementMessage}</span>
            </div>
          </div>

          {/* Contact and account */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-gray-500">
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-1.5 transition-colors hover:text-primary-600"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{phone}</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-primary-600"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{email}</span>
              </a>
            </div>

            <span className="h-4 w-px bg-gray-200" />

            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <Link
                    href="/profile"
                    className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-primary-600"
                  >
                    <User className="h-3.5 w-3.5" />
                    <span>{user.name}</span>
                  </Link>

                  <button
                    type="button"
                    onClick={onLogout}
                    className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-red-500"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-primary-600"
                  >
                    <User className="h-3.5 w-3.5" />
                    <span>Sign In</span>
                  </Link>

                  <Link
                    href="/signup"
                    className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-primary-600"
                  >
                    <UserPlus className="h-3.5 w-3.5" />
                    <span>Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}