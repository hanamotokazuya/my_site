import React from "react";
import styled from "styled-components";
import Product from "./Product";
import productImage1 from "../imgs/purchased-book-app.png";
import productImage2 from "../imgs/my-site.png";

function Products() {
  return (
    <>
      <PageTitle>Products</PageTitle>
      <Product
        title="書籍管理アプリ"
        description={[
          "初めて作った作品です。私は気になる技術の参考書籍を読むことが好きで、毎年20冊以上読んでいます。",
          "いままで、買った書籍を管理して可視化できるアプリがあったらいいなと思い制作しました。",
          "フロントエンドはReact/TypeScriptのSPA、バックエンドはRuby on Railsで構築しています。",
          "具体的にはRailsのView層にWebpackerでReactをバンドルし、erbなどのテンプレートから呼び出して使う構成で制作しています。",
          "サーバはHeroku、ストレージはS3を利用しています。",
        ]}
        imgSrc={productImage1}
        siteUrl=""
      />
      <Product
        title="ポートフォリオ"
        description={[
          "本サイトです。Reactの勉強を兼ねて制作しました。React/TypeScriptで構築し、サーバはNetlifyを利用しています。",
        ]}
        imgSrc={productImage2}
        siteUrl=""
      />
    </>
  );
}

export default Products;

const PageTitle = styled.h2`
  font-size: 32px;
  border-bottom: 1px solid;
  margin-bottom: 10px;
`;
