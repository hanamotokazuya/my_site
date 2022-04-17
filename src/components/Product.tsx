import React from "react";
import styled from "styled-components";
import { tab, sp } from "../utils/media";

type Props = Product & { srcImg: string };
function Product({ title, description, srcImg, siteUrl, srcCodeUrl }: Props) {
  return (
    <Item>
      <a href={siteUrl} target="_blank" className="item-img-box">
        <img src={srcImg} className="item-img" />
      </a>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        {!!srcCodeUrl && (
          <a href={srcCodeUrl} target="_blank" className="src-code">
            [ソースコード(GitHub)はこちら]
          </a>
        )}
      </div>
    </Item>
  );
}

export default Product;

const Item = styled.section`
  display: flex;
  gap: 20px;
  padding: 15px 50px;
  ${tab`
    gap: 20px;
    padding: 15px 30px;
  `}
  ${sp`
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 15px 10px;
  `}
  a {
    cursor: pointer;
  }
  .item-img-box {
    width: 35%;
    ${sp`
    width: 90%;
  `}
  }
  .item-img {
    width: 100%;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  }
  .content {
    width: 65%;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    ${sp`
      width: 90%;
    `}
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid;
    margin-bottom: 15px;
  }
  .description {
    font-size: 16px;
  }
  .src-code {
    font-size: 14px;
    margin-top: 10px;
    &:hover {
      color: tomato;
    }
  }
`;
