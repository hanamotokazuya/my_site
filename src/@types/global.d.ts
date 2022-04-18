type Page = "TOP" | "PROFILE" | "PRODUCTS";

type Profile = {
  id: number;
  title: string;
  text: string;
  year?: string;
};
type Product = {
  title: string;
  description: string;
  siteUrl: string;
  srcCodeUrl?: string;
};
declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*/profile.json" {
  const data: Profile[];
  export default data;
}

declare module "*/products.json" {
  const data: Product[];
  export default data;
}
