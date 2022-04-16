import React from "react";
import styled from "styled-components";

const Base = styled.div``;
const Title = styled.h2`
  font-size: 32px;
  border-bottom: 1px solid;
  margin-bottom: 10px;
`;
const Item = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;
const ItemDescription = styled.div`
  margin-left: 15px;
  margin-bottom: 10px;
  font-size: 16px;
`;
function Profile() {
  return (
    <Base>
      <Title>About me</Title>
      <Item>氏名</Item>
      <ItemDescription>花本　和也</ItemDescription>
      <Item>生年月日</Item>
      <ItemDescription>1994年4月14日</ItemDescription>
      <Item>性別</Item>
      <ItemDescription>男性</ItemDescription>
      <Item>学歴</Item>
      <ItemDescription>
        広島大学大学院 電気電子工学科システムサイバネティクス専攻 2019年3月修了
      </ItemDescription>
      <Item>研究内容</Item>
      <ItemDescription>
        最適な量子化器設計による制御システムへの影響の低減化を目的とした研究
        <br />
        具体的には、ドローン制御で用いられるような無線通信を用いた機器制御で用いられるADコンバータの設計です。
        <br />
        近年、IoTを用いた複数センサ活用システムへの期待が高まっている中、そのようなシステムでは、多くのデバイスを同時に通信する場合、周波数帯域幅の制限により、一つあたりの通信料が小さくなる問題があり、より効果的な量子化器の設計・開発が求められています。本研究は、限られた通信資源の中で安定した制御の実現を目指し、そのための最適な量子化器の設計開発です。
      </ItemDescription>
      <Item>職歴</Item>
      <ItemDescription>
        2019年4月 自動車部品メーカに入社
        <br />
        受託開発として、自動運転における車両運動制御技術の開発に従事。
        <br />
        制御機能の提案・システムアーキの設計・車両のモデリング・制御アルゴリズムの設計・シミュレーションによる制御効果の分析・実車試験など、機能開発における知見を一気通貫して経験。
      </ItemDescription>
    </Base>
  );
}

export default Profile;
