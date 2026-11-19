import HomeBenefits from "@/features/home/components/HomeBenefits/HomeBenefits";
import HomeCategories from "@/features/home/components/HomeCategories/HomeCategories";
import HomeSlider from "@/features/home/components/HomeSlider/HomeSlider";

export default function HomePage() {
  return (
    <>
      <HomeSlider />
      <HomeBenefits /> 
      <HomeCategories />
    </>
  );
}
