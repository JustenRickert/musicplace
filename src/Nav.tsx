// import * as React from "react";
// import { connect, Dispatch } from "react-redux";

// import { StoreType } from "./";
// import { Story } from "./App";

// import { SetPath } from "./Router";

// const NavButton = ({
//   text,
//   path,
//   onClick
// }: {
//   text: string;
//   path: string;
//   onClick: (currentPath: string) => void;
// }) => (path ? <div onClick={_ => onClick(path)}>{text}</div> : null);

// const paths = Object.keys(Story).map(k => Story[k]);

// const mapStateToForward = (state: StoreType) => ({
//   text: "Forward",
//   path: state.router.path
// });

// const mapStateToBackward = (state: StoreType) => ({
//   text: "Backward",
//   path: state.router.path
// });

// const mapDispatchToForward = (dispatch: Dispatch<StoreType>) => ({
//   onClick: (currentPath: string) => {
//     const nextPath = paths[paths.indexOf(currentPath) + 1];
//     dispatch(new SetPath({ path: nextPath }));
//   }
// });

// const mapDispatchToBackward = (dispatch: Dispatch<StoreType>) => ({
//   onClick: (currentPath: string) => {
//     const prevPath = paths[paths.indexOf(currentPath) - 1];
//     dispatch(new SetPath({ path: prevPath }));
//   }
// });

// export const Nav = () => {
//   const Forward = connect(mapStateToForward, mapDispatchToForward)(NavButton);
//   const Backward = connect(mapStateToBackward, mapDispatchToBackward)(
//     NavButton
//   );

//   return (
//     <div>
//       <Forward />
//       <Backward />
//     </div>
//   );
// };
