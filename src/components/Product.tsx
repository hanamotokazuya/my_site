import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  description: string[];
  imgSrc: string;
  siteUrl: string;
};
function Product({ title, description, imgSrc, siteUrl }: Props) {
  return (
    <Item>
      <img src={imgSrc} className="item-img"></img>
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="description">
          {description.map((text, key) => (
            <p key={key}>{text}</p>
          ))}
        </div>
      </div>
    </Item>
  );
}

export default Product;

const Item = styled.section`
  display: flex;
  gap: 20px;
  padding: 15px 60px;
  .item-img {
    width: 35%;
    background-color: black;
  }
  .content {
    width: 65%;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
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
`;
