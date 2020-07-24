/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { jsx, css } from "@emotion/core";
/** @jsx jsx */

const ViewBox = ({ title, paragraph, buttonText, buttonLink }) => {
  const [counter, setState] = useState(0);

  const viewContainer = css`
    background: #cdcdcd;
  `;

  const viewContent = css`
    margin-top: 2em;
    font-size: 1rem;
    line-height: 1.8em;
    margin-left: 3em;
    margin-right: 3em;
  `;

  const Button = () => (
    <a href={buttonLink}>
      <button
        css={css`
          background-color: grey;
          border: none;
          color: white;
          font-weight: 500;
          border-radius: 7px;
          padding: 15px 32px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.5s ease-in-out;

          &:hover {
            background-color: #990000;
          }
        `}
      >
        {buttonText}
      </button>
    </a>
  );
  return (
    <div css={viewContainer}>
      <div css={viewContent}>
        <h3
          css={css`
            font-size: 1.4em;
            line-height: 1.3em;
            margin-right: 2em;
          `}
        >
          {title}
        </h3>
        <p
          css={css`
            color: black;
            font-weight: bold;
          `}
        >
          {paragraph}
        </p>
        {buttonText === "" ? "" : <Button />}
      </div>
    </div>
  );
};

export default ViewBox;
