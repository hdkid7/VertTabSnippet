/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { jsx, css, keyframes } from "@emotion/core";
/** @jsx jsx */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Transition } from "react-transition-group";

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
      background: #bebebe;
      margin-right: 1.5em;
      cursor: pointer;}
    to{ display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.2rem;
      width: 25rem;
      margin-right:0em;
      background: #bebebe;}


  `;

  const nonActiveTabAnimation = keyframes`
  from{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
    width: 25rem;
    margin-right:0em;
    background: #bebebe;
  }
  to{ display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
    height:4.4rem;
    width: 22rem;
    background: #bebebe;
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
    background: #bebebe;

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
              background: #bebebe;
              margin-right: 1.5em;
              cursor: pointer;
              animation: ${nonActiveTabAnimation} 0.6s both ease-in-out;

              &:hover .arrow {
                transition: transform 0.7s ease-in-out;
                transform: rotate(180deg);
              }
            `
      }
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
        <FontAwesomeIcon size="sm" icon={faArrowRight} />
      </div>
    </div>
  );
};

export default Tab;
