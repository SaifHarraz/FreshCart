import Link from "next/link";
import {
  Truck,
  Gift,
  Phone,
  Mail,
  UserRound,
  UserPlus,
  LogOut,
} from "lucide-react";

interface TopInfoBarProps {
  isSignedIn: boolean;
  userName?: string;
}

export function TopInfoBar({
  isSignedIn,
  userName,
}: TopInfoBarProps) {
  return (
    <div className="hidden border-b border-gray-100 text-sm lg:block">
      <div className="container mx-auto px-4">
        <div className="flex h-10 items-center justify-between">
          {/* Store benefits */}
          <div className="flex items-center gap-6 text-gray-500">
            <span className="flex items-center gap-2">
              <Truck className="size-3.5 text-primary-600" />
              Free Shipping on Orders 500 EGP
            </span>

            <span className="flex items-center gap-2">
              <Gift className="size-3.5 text-primary-600" />
              New Arrivals Daily
            </span>
          </div>

          {/* Contact and account */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-gray-500">
              <a
                href="tel:+18001234567"
                className="flex items-center gap-1.5 transition-colors hover:text-primary-600"
              >
                <Phone className="size-3.5" />
                +1 (800) 123-4567
              </a>

              <a
                href="mailto:support@freshcart.com"
                className="flex items-center gap-1.5 transition-colors hover:text-primary-600"
              >
                <Mail className="size-3.5" />
                support@freshcart.com
              </a>
            </div>

            <span className="h-4 w-px bg-gray-200" />

            {/* Account actions */}
            <div className="flex items-center gap-4">
              {isSignedIn ? (
                <>
                  <Link
                    href="/profile"
                    className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-primary-600"
                  >
                    <UserRound className="size-3.5" />
                    {userName}
                  </Link>

                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-red-500"
                  >
                    <LogOut className="size-3.5" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-primary-600"
                  >
                    <UserRound className="size-3.5" />
                    Sign In
                  </Link>

                  <Link
                    href="/signup"
                    className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-primary-600"
                  >
                    <UserPlus className="size-3.5" />
                    Sign Up
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