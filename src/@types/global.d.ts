type Page = "TOP" | "PROFILE" | "PRODUCTS" | "CONTACT";

declare module "*.png" {
  const src: string;
  export default src;
}
