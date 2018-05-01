import * as React from "react";
import * as uuid from "uuid";

const abcjs = require("abcjs");

export const createRandomIdDiv = () => {
  const id = uuid();
  return { id, div: <div id={id} /> };
};

export interface Props {
  abc: string;
}

export class MusicSheet extends React.Component<Props> {
  public abcId: string;

  public render() {
    const { id, div } = createRandomIdDiv();
    this.abcId = id;
    return <div id={this.abcId}>{div}</div>;
  }

  componentDidMount() {
    abcjs.renderAbc(this.abcId, this.props.abc);
  }
}
