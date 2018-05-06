import * as React from "react";

import Thing from "./blog/blog";

const styles = require("./App.css");

class App extends React.Component {
  public render() {
    return (
      <div className={styles.app}>
        <Thing />
      </div>
    );
  }
}

export default App;
