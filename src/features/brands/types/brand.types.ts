
export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface BrandCardProps {
  name: string;
  logo: string;
  slug: string;
}

export interface BrandGridProps {
  brands: Brand[];
}
