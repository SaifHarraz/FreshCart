import HomeBenefits from "@/features/home/components/HomeBenefits/HomeBenefits";
import HomeCategories from "@/features/home/components/HomeCategories/HomeCategories";
import HomePromotions from "@/features/home/components/HomePromotions/HomePromotions";
import HomeSlider from "@/features/home/components/HomeSlider/HomeSlider";

export default function HomePage() {
  return (
    <>
      <HomeSlider />
      <HomeBenefits />
      <HomeCategories />
      <HomePromotions />
    </>
  );
}
