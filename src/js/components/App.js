/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import Tab from "./Tab";
import ViewBox from "./ViewBox";

import { jsx, css } from "@emotion/core";
/** @jsx jsx */

const tabsContainer = css`
  display: flex;
  flex-direction: column;
  margin-right: 1.5em;
`;

const viewContainer = css`
  background: #bebebe;
  width: 25em;
  margin-bottom: 0.8em;
`;

const App = () => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: center;

        margin-left: 2em;
        margin-right: 2em;
      `}
    >
      <div css={tabsContainer}>
        <Tab tabName="Alda Medical Experience" />
        <Tab tabName="Alda Science Communication Experieince" />
        <Tab tabName="Alda Science Communication Experieince" />
        <Tab tabName="Alda Science Communication Experieince" />
        <Tab tabName="Alda Science Communication Experieince" />
      </div>
      <div css={viewContainer}>
        <ViewBox />
      </div>
    </div>
  );
};

export default App;

const wrapper = document.getElementById("alda-vertical-tabs-container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
