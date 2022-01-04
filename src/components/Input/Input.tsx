import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Button } from "../button/Button";
import React from 'react';
const FieldContainer = styled('label')`
  display: inline-block;
  width: 100%;
  overflow: hidden;

  .fields {
    color: #646c70;
    border: none;
    outline: none;
    padding: 10px;
    width: 100%;
    color: black;
    background-color: #fff;
    box-sizing: border-box;
  }

  .description {
    background-color: #ddd;
    overflow: hidden;
  }

  .fields + .bar {
    display: block;
    text-align: center;
    padding-bottom: 2px;
    background: linear-gradient(135deg, #0dceb3 0%, #765cf3 100%) left bottom
      no-repeat;
    background-size: 100% 5px;
    background-size: 100% 5px;

    width: 0;
    -webkit-transition: width 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
  }
  .fields:focus + .bar {
    width: 110%; /*  used calc first, but won't work on Edge  */
    -webkit-transition: width 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
  }

  .label {
    overflow: hidden;
    height: 0px;
    color: #444;
    margin-top: 5px;
  }
  .file-upload-container {
    display: flex;
  }
`;

type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value?: any;
  type: string;
  dissabled?: boolean;
  width?: any;
};

const InputType = ({ label, value, onChange, type, dissabled, width }: InputProps) => {
  const ref = useRef(document.createElement("input"));
  const [state, setstate] = useState(null as any);

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    setstate(file);
  };

  useEffect(() => {
    if (state) {
      onChange(state);
    }
  }, [state]);

  switch (type) {
    case "text-area":
      return (
        <textarea
          className="fields"
          value={value}
          onChange={(e: any) => onChange(e)}
          placeholder={label}
        />
      );
    case "file":
      return (
        <>
          <div className="label" style={{ height: state ? 20 : 0 }}>
            <span>{label}</span>
          </div>
          <div className="file-upload-container">
            <Button style={{width: width || '100%'}} onClick={() => ref.current.click()}>
              {!state ? label : state.name}
            </Button>
            <input
              className="fields"
              id={label}
              ref={ref}
              value={value}
              style={{ display: "none", }}
              onChange={(e) => handleFileUpload(e)}
              placeholder={label}
              type={type}
            />
          </div>
        </>
      );
    default:
      return (
        <input
          className="fields"
          style={{width: width || '100%'}}
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={label}
          type={type}
        />
      );
  }
};

export const Input = ({
  label,
  value,
  onChange,
  type,
  dissabled,
  width
}: InputProps) => {
  return (
    <FieldContainer>
      <div className="label" style={{ height: value ? 20 : 0 }}>
        <span>{label}</span>
      </div>
      {
        <InputType
        width={width}
          dissabled={dissabled}
          label={label}
          value={value}
          onChange={onChange}
          type={type}
        />
      }
      <span className="bar" style={{maxWidth: width || '100%'}}/>
    </FieldContainer>
  );
};

type OutputProps = {
  label: string;
  value: any;
  description: string;
};

export const Output = ({ value, label, description }: OutputProps) => {
  const [active, setActive] = useState(false);
  return (
    <FieldContainer>
      <div
        className="label"
        style={{ height: value && !active ? 20 : 0 }}
      >
        <span>{label}</span>
      </div>
      <div
        className="description"
        style={{ height: active ? "auto" : 0 }}
      >
        {active && <span>{label}: </span>}
        <i>"{description}"</i>
      </div>
      <div
        className="fields"
        onClick={() => setActive(!active)}
        style={{ cursor: !active ? "help" : "s-resize" }}
      >
        {value || <span style={{ color: "grey" }}>{label}</span>}
      </div>
      <span className="bar" />
    </FieldContainer>
  );
};
