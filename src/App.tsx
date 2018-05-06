import * as React from "react";

import Router from "./Router";
import { Nav } from "./Nav";
import { One, Two } from "./blog/blog";

export enum BlogPath {
  One = "one",
  Two = "two"
}

class App extends React.Component {
  public render() {
    const routeMap = new Map([
      ["", <Two />],
      [BlogPath.One, <One />],
      [BlogPath.Two, <Two />]
    ]);
    return (
      <div>
        <Router routeMap={routeMap} />
        <Nav />
      </div>
    );
  }
}

export default App;
