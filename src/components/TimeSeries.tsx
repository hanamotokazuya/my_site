import React from "react";
import styled from "styled-components";

type Prop = {
  contents: Profile[];
  isOpenText: boolean;
  setIsOpenText: React.Dispatch<React.SetStateAction<boolean>>;
  setContentNum: React.Dispatch<React.SetStateAction<number>>;
};
function TimeSeries({ contents, isOpenText, setIsOpenText, setContentNum }: Prop) {
  return (
    <Base>
      {contents.map(({ id, title, year }) => (
        <div key={id} className="component">
          <div className="line" />
          <div
            className="point"
            onClick={() => {
              setContentNum(id);
              setIsOpenText(!isOpenText);
            }}
          />
          <h3 className="title">{title}</h3>
          {!!year && <p className="year">{year}</p>}
        </div>
      ))}
    </Base>
  );
}

export default TimeSeries;

const Base = styled.div`
  margin-left: 100px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .component {
    width: 100%;
    height: 200px;
    position: relative;
    .line {
      height: 100%;
      width: 4px;
      background-color: white;
      position: absolute;
      left: 20%;
      transform: translateX(-50%);
    }
    .point {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
      left: 20%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: tomato;
    }
    .title {
      font-size: 16px;
      position: absolute;
      top: 50%;
      left: 26%;
      transform: translateY(-50%);
    }
    .year {
      font-size: 16px;
      position: absolute;
      top: 100%;
      left: 23%;
      transform: translateY(-50%);
    }
  }
`;
