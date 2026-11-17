
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  CreditCard,
  ShoppingCart,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import FooterLinkColumn from "./FooterLinkColumn/FooterLinkColumn";

import {
  shopLinks,
  guestAccountLinks,
  authenticatedAccountLinks,
  supportLinks,
  legalLinks,
  socialLinks,
  footerContact,
} from "./data";

import type { FooterProps } from "./types";
import BrandLogo from "../BrandLogo/BrandLogo";

const socialIcons = {
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

export default function Footer({
  user,
  logoSrc,
}: FooterProps) {
  const accountLinks = user
    ? authenticatedAccountLinks
    : guestAccountLinks;

  return (
    <footer className="bg-[#101828] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1504px] px-4 pt-12 pb-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[2.23fr_repeat(4,minmax(0,1fr))] lg:gap-10">
          {/* Brand & Contact */}
          <div className="flex flex-col items-start">
            {/* Logo */}
            <BrandLogo variant="navbar" />

            {/* Description */}
            <p className="mb-6 text-sm font-medium leading-[22.75px] text-[#99A1AF]">
              FreshCart is your one-stop destination for quality products.
              From fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>

            {/* Contact Information */}
            <div className="mb-6 flex flex-col gap-3">
              <a
                href={footerContact.phoneHref}
                className="flex items-center gap-3 text-sm font-medium text-[#99A1AF] transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                {footerContact.phone}
              </a>

              <a
                href={footerContact.emailHref}
                className="flex items-center gap-3 text-sm font-medium text-[#99A1AF] transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                {footerContact.email}
              </a>

              <div className="flex items-start gap-3 text-sm font-medium text-[#99A1AF]">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                {footerContact.address}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full bg-[#1E2939] text-[#99A1AF] transition-colors hover:bg-primary hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Columns */}
          <FooterLinkColumn
            title="Shop"
            links={shopLinks}
          />

          <FooterLinkColumn
            title="Account"
            links={accountLinks}
          />

          <FooterLinkColumn
            title="Support"
            links={supportLinks}
          />

          <FooterLinkColumn
            title="Legal"
            links={legalLinks}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#293548]">
        <div className="mx-auto flex max-w-[1504px] flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-[#667085] sm:flex-row">

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} FreshCart. All rights reserved.
          </p>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["Visa", "Mastercard", "PayPal"].map((method) => (
              <div
                key={method}
                className="flex items-center gap-2"
              >
                <CreditCard className="size-3.5" />
                <span>{method}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
