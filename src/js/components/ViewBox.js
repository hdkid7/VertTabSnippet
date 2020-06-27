/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { jsx, css } from "@emotion/core";
/** @jsx jsx */

const ViewBox = () => {
  const [counter, setState] = useState(0);

  const viewContainer = css`
    background: #bebebe;
  `;

  const viewContent = css`
    font-size: 1rem;
  `;

  return (
    <div css={viewContainer}>
      <div css={viewContent}>
        <p>Hello this is the view content</p>
      </div>
    </div>
  );
};

export default ViewBox;
