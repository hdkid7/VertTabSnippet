/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { jsx, css, keyframes } from "@emotion/core";
/** @jsx jsx */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const MobileTab = ({
  viewTitle,
  tabName,
  viewContent,
  boolean,
  onClick,
  buttonLink,
  buttonText
}) => {
  const [counter, setState] = useState(0);

  const activeTabAnimation = keyframes`
    from{display: flex;

      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.2rem;
      height:4.4rem;
      width: 21em;
      background: #bebebe;

      cursor: pointer;}
    to{ display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.2rem;
      width: 21em;
      height:30rem;
      margin-right:0em;
      background: #bebebe;}


  `;

  const textReveal = keyframes`
    from{opacity:0;



      }
    to{ opacity:1}


  `;

  const Button = () => (
    <a href={buttonLink}>
      <button
        css={css`
          background-color: gray;
          border: none;
          color: white;
          font-weight: 500;
          border-radius: 7px;
          padding: 15px 32px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          margin-top: 1em;
        `}
      >
        {buttonText}
      </button>
    </a>
  );

  const nonActiveTabAnimation = keyframes``;

  const arrowStyle = css`
    margin-right: 1em;
    margin-left: 1em;
    color: #990000;
  `;

  const activeTab = css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
    height: 25rem;
    width: 21em;
    background: #bebebe;

    animation: ${activeTabAnimation} 0.6s ease-in-out 1;
    animation-fill-mode: forwards;
  `;

  const activeArrow = css`

    color: grey;
    margin-right: 1em;
    margin-left: 1em;


    }
  `;

  return (
    <div
      onClick={onClick}
      css={
        boolean
          ? activeTab
          : css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 1.2rem;
              width: 21em;
              height: 4.4rem;
              background: #bebebe;

              cursor: pointer;
              position: relative;
            `
      }
    >
      <div
        css={css`
          height: 4.5rem;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          color: grey;
          margin-right: 1em;
          margin-left: 1em;
          display: flex;
          align-items: center;

          width: 18em;
        `}
      >
        <p
          css={css`
            font-size: 1rem;
            margin-left: 1em;
            font-weight: bold;
            width: 16em;
            color: #626262;
          `}
        >
          {tabName}
        </p>

        <div className="arrow" css={boolean ? activeArrow : arrowStyle}>
          {boolean ? (
            <FontAwesomeIcon size="sm" icon={faMinus} />
          ) : (
            <FontAwesomeIcon size="sm" icon={faPlus} />
          )}
        </div>
      </div>

      {boolean ? (
        <div
          css={css`
            animation: ${textReveal} 1.2s ease-in-out 1;
            animation-fill-mode: forwards;
            position: absolute;
            top: 3.4rem;
            margin-left: 1.8em;
            margin-right: 1em;
          `}
        >
          <p
            css={css`
              font-weight: bold;
              font-size: 1.1rem;

              &:before {
                top: -0.01em;
                position: absolute;
                left: 0;
                content: " ";
                display: block;
                height: 40px;
                border-top: 2px solid black;
                width: 17.5rem;
              }
            `}
          >
            {viewTitle}
          </p>
          <p
            css={css`
              font-size: 0.8em;
              line-height: 1.5rem;
            `}
          >
            {viewContent}
          </p>
          <Button />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MobileTab;
