import Link from "next/link";
import {
  LogOut,
  UserRound,
  UserPlus,
} from "lucide-react";

import type { TopInfoBarUser } from "./types";

type AccountLinksProps = {
  user?: TopInfoBarUser | null;
  onSignOut?: () => void;
};

export function AccountLinks({
  user,
  onSignOut,
}: AccountLinksProps) {
  return (
    <div className="flex items-center gap-4">
      {user ? (
        <>
          <Link
            href="/profile"
            className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-primary-600"
          >
            <UserRound className="size-3.5" />
            <span>{user.name}</span>
          </Link>

          <button
            type="button"
            onClick={onSignOut}
            disabled={!onSignOut}
            className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-red-500 disabled:cursor-not-allowed"
          >
            <LogOut className="size-3.5" />
            <span>Sign Out</span>
          </button>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-primary-600"
          >
            <UserRound className="size-3.5" />
            <span>Sign In</span>
          </Link>

          <Link
            href="/signup"
            className="flex items-center gap-1.5 text-gray-600 transition-colors hover:text-primary-600"
          >
            <UserPlus className="size-3.5" />
            <span>Sign Up</span>
          </Link>
        </>
      )}
    </div>
  );
}