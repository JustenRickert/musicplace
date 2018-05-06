import * as React from "react";
import { connect, Dispatch } from "react-redux";

import { StoreType } from "./";
import { BlogPath } from "./App";

import { SetPath } from "./Router";

const NavButton = ({
  text,
  path,
  onClick
}: {
  text: string;
  path: string;
  onClick: (currentPath: string) => void;
}) => <div onClick={_ => onClick(path)}>{text}</div>;

export const Nav = () => {
  const paths = Object.keys(BlogPath).map(k => BlogPath[k] as string);

  const mapStateToForward = (state: StoreType) => ({
    text: "Forward",
    path: state.router.path
  });

  const mapStateToBackward = (state: StoreType) => ({
    text: "Backward",
    path: state.router.path
  });

  const mapDispatchToForward = (dispatch: Dispatch<StoreType>) => ({
    onClick: (currentPath: string) => {
      const nextPath = paths[paths.indexOf(currentPath) + 1];
      console.log("current path is", currentPath);
      console.log("next path is", nextPath);
      dispatch(new SetPath({ path: nextPath }));
    }
  });

  const mapDispatchToBackward = (dispatch: Dispatch<StoreType>) => ({
    onClick: (currentPath: string) => {
      console.log("backward");
      dispatch(new SetPath({ path: paths[paths.indexOf(currentPath) - 1] }));
    }
  });

  const Forward = connect(mapStateToForward, mapDispatchToForward)(NavButton);
  const Backward = connect(mapStateToBackward, mapDispatchToBackward)(
    NavButton
  );

  return (
    <div>
      <Forward />
      <Backward />
    </div>
  );
};
