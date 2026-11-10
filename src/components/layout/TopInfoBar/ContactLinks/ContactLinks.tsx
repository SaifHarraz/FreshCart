import { Mail, Phone } from "lucide-react";

import type { TopInfoBarData } from "../../types";
type ContactLinksProps = {
  phone: TopInfoBarData["phone"];
  email: TopInfoBarData["email"];
};

export function ContactLinks({ phone, email }: ContactLinksProps) {
  return (
    <div className="flex items-center gap-4 text-white/80">
      <a
        href={phone.href}
        className="flex items-center gap-1.5 transition-colors hover:text-primary"
      >
        <Phone className="size-3.5" />
        <span>{phone.label}</span>
      </a>

      <a
        href={email.href}
        className="flex items-center gap-1.5 transition-colors hover:text-primary"
      >
        <Mail className="size-3.5" />
        <span>{email.label}</span>
      </a>
    </div>
  );
}