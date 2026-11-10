import SiteHeader from "@/components/layout/SiteHeader";

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
    </>
  );
}