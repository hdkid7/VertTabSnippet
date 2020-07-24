/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { jsx, css, keyframes } from "@emotion/core";
/** @jsx jsx */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const Tab = ({ tabName, boolean, onClick }) => {
  const [counter, setState] = useState(0);

  const activeTabAnimation = keyframes`
    from{display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.2rem;
      height:4.4rem;
      width: 22rem;
      background: #CDCDCD;
      margin-right: 1.5em;
      cursor: pointer;}
    to{ display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.2rem;
      width: 25rem;
      margin-right:0em;
      background: #CDCDCD;}


  `;

  const nonActiveTabAnimation = keyframes`
  from{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
    width: 25rem;
    margin-right:0em;
    background: #CDCDCD;
  }
  to{ display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
    height:4.4rem;
    width: 22rem;
    background: #CDCDCD;
    margin-right: 1.5em;
    cursor: pointer;}


  `;

  const arrowStyle = css`
    margin-right: 1em;
    margin-left: 1em;
    color: #990000;
  `;

  const activeTab = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
    height: 4.4rem;
    width: 25rem;
    background: #cdcdcd;

    animation: ${activeTabAnimation} 0.6s ease-in-out 1;
    animation-fill-mode: forwards;
  `;

  const activeArrow = css`
  position: absolute;
    transform: rotate(180deg);
    color: grey;
    cursor:pointer;
    right: 65px;
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
              width: 22rem;
              height: 4.4rem;
              background: #cdcdcd;
              margin-right: 1.5em;
              cursor: pointer;

              &:hover .arrow {
                transition: transform 0.7s ease-in-out;
                transform: rotate(180deg);
              }
            `
      }
    >
      <p
        css={
          boolean
            ? css`
                color: #990000;
                font-size: 1rem;
                margin-left: 1em;
                font-weight: bold;
                width: 16em;
              `
            : css`
                font-size: 1rem;
                margin-left: 1em;
                font-weight: bold;
                width: 16em;
                color: black;
              `
        }
      >
        {tabName}
      </p>
      <div className="arrow" css={boolean ? activeArrow : arrowStyle}>
        <FontAwesomeIcon size="sm" icon={faArrowRight} />
      </div>
    </div>
  );
};

export default Tab;
