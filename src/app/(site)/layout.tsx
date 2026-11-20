import BenefitsStrip from "@/components/layout/BenefitsStrip/BenefitsStrip";
import Footer from "@/components/layout/Footer/Footer";
import SiteHeader from "@/components/layout/SiteHeader/SiteHeader";
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader
        user={null}
        cartCount={2}
        wishlistCount={3}
      />

      <main>{children}</main>
         <BenefitsStrip />
      <Footer user={null} />
    </>
  );
}