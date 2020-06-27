/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { jsx, css } from "@emotion/core";
/** @jsx jsx */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const Tab = ({ tabName }) => {
  const [counter, setState] = useState(0);

  const arrowStyle = css`
    margin-right: 1em;
    margin-left: 1em;
  `;

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.8em;
        width: 22rem;

        background: #bebebe;
      `}
    >
      <p
        css={css`
          font-size: 1rem;
          margin-left: 1em;
          font-weight: bold;
          color: #626262;
        `}
      >
        {tabName}
      </p>
      <div css={arrowStyle}>
        <FontAwesomeIcon size="lg" color="#990000" icon={faArrowRight} />
      </div>
    </div>
  );
};

export default Tab;
