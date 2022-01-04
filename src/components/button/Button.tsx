import styled from "styled-components";
import React from "react";
const Btn = styled('button')`
  width: 100%;
  border: hidden;
  padding: 10px;
  box-sizing: border-box;

  position: relative;
  display: inline-block;
  transition: all 0.3s ease-out;
  /* margin-bottom: 2px; */

  background: #fff;

  background-size: 100% 200%;
  /* background-image: linear-gradient(to right, white 50%, #0dceb3 0%, #765cf3 100%); */
  background-image: linear-gradient(to top, #ddd 50%, white 50%);

  height: 30px;
  flex-shrink: 0;

  cursor: pointer;

  &:hover .slider {
    width: 100%;
  }

  .slider {
    position: absolute;
    display: block;
    left: 0;
    top: 90%;
    margin: 0 auto;
    height: 2px;
    background: linear-gradient(135deg, #0dceb3 0%, #765cf3 100%);
    width: 0%;
    transition: width 0.5s ease;
  }

  .active {
    position: absolute;
    display: block;
    top: 0%;
    left: 0%;
    translate: transform(0%, 0%);
    height: 100%;
    background: #bbb;
    width: 0%;
    transition: width 0.5s ease;
  }

  .active {
    width: 100%;
  }

  span {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(0%, -50%);
    flex-shrink: 0;
    width: 100%;
    flex-shrink: 1 0 auto;
  }
  .overlay {
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translate(0%, -50%);
    background: white;
    width: 100%;
    height: 26px;
  }
`;

type ButtonProps = {
  children: React.ReactNode;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  active?: boolean;
  style?: any;
  className?: string;
  animate?: any;
  initial?: any;
  selected?: boolean;
  disabled?: boolean;
};

export const Button:  React.FC<ButtonProps> = ({
  children,
  onClick,
  active,
  style,
  className,
  animate,
  initial,
  selected,
  disabled,
}) => {
  return (
    <Btn
      initial={initial}
      animate={animate}
      onClick={onClick}
      className="active selected"
      style={{ ...style, backgroundPosition: selected ? "0 100%" : "0 0" }}
      disabled={disabled}
      {...className}
    >
      {disabled || <div className="slider" />}

      <div style={{ width: active ? "100%" : "0%" }} className="active">
        <div className="overlay" />
      </div>

      <span>{children} </span>
    </Btn>
  );
};
