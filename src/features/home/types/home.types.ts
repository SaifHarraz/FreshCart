export interface HomeSliderAction {
  label: string;
  href: string;
  textColor?: string;
}

export interface HomeSliderSlide {
  id: string;
  title: string;
  description: string;
  primaryAction: HomeSliderAction;
  secondaryAction: HomeSliderAction;
}
