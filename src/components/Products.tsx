import React from "react";
import styled from "styled-components";
import Product from "./Product";
import productImage1 from "../imgs/my-site.png";
import productImage2 from "../imgs/purchased-book-app.png";
import productImage3 from "../imgs/minesweeper.png";
import data from "../json/products.json";
import { tab, sp } from "../utils/media";

function Products() {
  const products: Product[] = data["data"];
  const productImages: string[] = [productImage3, productImage2, productImage1];
  return (
    <>
      <PageTitle>Products</PageTitle>
      {products.map(({ title, description, siteUrl, srcCodeUrl }, key) => (
        <Product
          key={key}
          title={title}
          description={description}
          siteUrl={siteUrl}
          srcCodeUrl={srcCodeUrl}
          srcImg={productImages[key]}
        />
      ))}
    </>
  );
}

export default Products;

const PageTitle = styled.h2`
  font-size: 32px;
  border-bottom: 1px solid;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-left: 50px;
  ${tab`
    font-size: 24px;
    padding-left: 30px;
  `}
  ${sp`
    font-size: 24px;
    padding-left: 10px;
  `}
`;
