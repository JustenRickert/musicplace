import * as React from "react";
import { connect } from "react-redux";
import { action, on, payload, reducer } from "ts-action";

import { StoreType } from "./";

export const SetDefault = action("DEFAULT", payload<{}>());
export const SetPath = action("SET", payload<{ path: string }>());

/* `https://${host}/{path}` */
export interface RouterState {
  host: string;
  path: string;
}

const initialState = { host: window.location.host, path: "" };
export const routeReducer = reducer<RouterState>(
  [
    on(SetDefault, _ => ({ host: window.location.host, path: "" })),
    on(SetPath, (state, { payload: { path } }) => {
      console.log(path);
      return { ...state, path };
    })
  ],
  initialState
);

export interface Props extends RouterState {
  routeMap: Map<string, React.ReactNode>;
}

class Router extends React.Component<Props> {
  render() {
    const { path, routeMap } = this.props;
    console.log(path, routeMap.get(path));
    return path ? routeMap.get(path) : routeMap.values().next().value;
  }
}

const mapStateToProps = (state: StoreType) => ({
  host: state.router.host,
  path: state.router.path
});

export const selectPath = (store: StoreType) => store.router.path;

export default connect(mapStateToProps)(Router);
