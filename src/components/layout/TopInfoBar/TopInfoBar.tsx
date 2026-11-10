import type { TopInfoBarProps } from "../types";
import { AccountLinks } from "./AccountLinks/AccountLinks";
import { ContactLinks } from "./ContactLinks/ContactLinks";
import { topInfoBarData } from "./data";
import { PromoMessages } from "./PromoMessages/PromoMessages";

export default function TopInfoBar({ user, onLogout }: TopInfoBarProps) {
  return (
    <div className="hidden bg-gray-900 text-white lg:block">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <PromoMessages items={topInfoBarData.promotions} />

        <div className="flex items-center gap-6">
          <ContactLinks
            phone={topInfoBarData.phone}
            email={topInfoBarData.email}
          />

          <span aria-hidden="true" className="h-4 w-px bg-[#E5E7EB]" />

          <AccountLinks user={user} onSignOut={onLogout} />
        </div>
      </div>
    </div>
  );
}
