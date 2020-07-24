/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import Tab from "./Tab";
import ViewBox from "./ViewBox";
import MobileTab from "./MobileTab";
import ReRender from "./ReRender";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { jsx, css } from "@emotion/core";
/** @jsx jsx */

const tabsContainer = css`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 29rem;
`;

const viewContainer = css`
  background: #cdcdcd;
  width: 25em;
  height: 26.8rem;
  margin-bottom: 1.2rem;
`;

function resetObjectToFalse(objectMap, prevState) {
  return objectMap(Object.assign({}, prevState), () => false);
}

function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function(result, key) {
    result[key] = mapFn(object[key]);
    return result;
  }, {});
}
const verticalTabsOmniArray = [
  ["Hello1", "hello 1", "hello 1", "hello 1", "hello 1"],
  ["Hello2", "hello 2", "hello 2", "hello 2", "hello2"],
  ["Hello3", "hello3", "hello3", "hello3", "hello3"],
  ["Hello4", "hello4", "hello4", "hello4", "hello4"]
];
// eslint-disable-next-line no-undef
const object = verticalTabsOmniArray.map(a =>
  Object.assign(a, {
    tabName: a[0],
    tabContent: {
      viewTitle: a[1],
      viewText: a[2],
      viewButton: {
        text: a[3],
        link: a[4]
      }
    }
  })
);

const MobileApp = () => {
  const [state, setstate] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false
  });

  const MobileTabBuiler = () => {
    const listItems = object.map((tab, index) => (
      <Fragment key={tab.tabName}>
        <MobileTab
          tabName={tab.tabName}
          viewContent={tab.tabContent.viewText}
          viewTitle={tab.tabContent.viewTitle}
          buttonText={tab.tabContent.viewButton.text}
          boolean={state[index]}
          onClick={() =>
            setstate(prevState => {
              let falseObject = resetObjectToFalse(objectMap, prevState);

              falseObject[index] = true;

              return falseObject;
            })
          }
        />
      </Fragment>
    ));
    return listItems;
  };

  return (
    <div>
      <MobileTabBuiler />
    </div>
  );
};

const SwitchRoutesMaker = () => {
  const listItems = object.map((tab, index) => (
    <Route key={tab.tabName} path={`/tab${index + 1}`}>
      <div css={viewContainer}>
        <ViewBox
          title={tab.tabContent.viewTitle}
          paragraph={tab.tabContent.viewText}
          buttonText={tab.tabContent.viewButton.text}
          buttonLink={tab.tabContent.viewButton.link}
        />
      </div>
    </Route>
  ));

  return <Switch>{listItems}</Switch>;
};

const DeskTopApp = () => {
  const [state, setstate] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false
  });

  const TabBuilder = () => {
    const listItems = object.map((tab, index) => (
      <Fragment key={tab.tabName}>
        <Link style={{ textDecoration: "none" }} to={`/tab${index + 1}`}>
          <Tab
            tabName={tab.tabName}
            boolean={state[index]}
            onClick={() =>
              setstate(prevState => {
                let falseObject = resetObjectToFalse(objectMap, prevState);

                falseObject[index] = true;

                return falseObject;
              })
            }
          />
        </Link>
      </Fragment>
    ));
    return listItems;
  };
  // Change to numerical values

  return (
    <Router>
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
          <TabBuilder />
        </div>
        <SwitchRoutesMaker />
      </div>
      <Redirect exact from="/" to="/tab1" />
    </Router>
  );
};

export default DeskTopApp;

const wrapper = document.getElementById("alda-vertical-tabs-container");
wrapper
  ? ReactDOM.render(
      <ReRender
        mobileContent={<MobileApp />}
        desktopContent={<DeskTopApp />}
      />,

      wrapper
    )
  : false;
