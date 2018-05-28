// import * as React from "react";
// import * as uuid from "uuid";

// const abcjs = require("abcjs");

// export const createRandomIdDiv = () => {
//   const id = uuid();
//   return { id, div: <div id={id} /> };
// };

// export interface Props {
//   abc: string;
// }

// export class MusicSheet extends React.Component<Props> {
//   public abcId: string;

//   public componentDidMount() {
//     abcjs.renderAbc(this.abcId, this.props.abc);
//   }

//   public render() {
//     const { id, div } = createRandomIdDiv();
//     this.abcId = id;
//     return <div id={this.abcId}>{div}</div>;
//   }
// }

// export default "" +
//   "T: Cooley's\n" +
//   "M: 4/4\n" +
//   "L: 1/8\n" +
//   "R: reel\n" +
//   "K: Emin\n" +
//   "|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|\n" +
//   "EBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:|\n" +
//   "|:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg|\n" +
//   "eB B2 eBgB|eB B2 defg|afe^c dBAF|DEFD E2:|";
