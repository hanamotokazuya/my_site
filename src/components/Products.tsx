import React from "react";
import styled from "styled-components";

const Base = styled.div`
  padding: 15px;
  background-color: cyan;
`;
const Product = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid;
  margin-bottom: 15px;
`;
const Content = styled.div`
  display: flex;
`;
const Description = styled.div`
  padding: 0 10px;
  width: 60%;
  font-size: 16px;
`;
const ImgBlock = styled.div`
  width: 40%;
  background-color: black;
`;

function Products() {
  return (
    <Base>
      <Product>
        <Title>書籍管理システム</Title>
        <Content>
          <Description>
            初めて作った作品です。
            私は気になる技術の参考書籍を読むことが好きで、毎年20冊以上読んでいます。いままで、買った書籍を管理して可視化できるアプリがあったらいいなと思い制作しました。
            <br />
            フロントエンドはReact/TypeScriptのSPA、バックエンドはRuby on Railsで構築しています。
            具体的にはRailsのView層にWebpackerでReactをバンドルし、erbなどのテンプレートから呼び出して使う構成で制作しています。
            <br />
            サーバはHeroku、ストレージはS3を利用しています。
          </Description>
          <ImgBlock></ImgBlock>
        </Content>
      </Product>
    </Base>
  );
}

export default Products;
