// import * as React from "react";
// import { connect, Dispatch } from "react-redux";
// import { action, on, payload, reducer } from "ts-action";

// import { StoreType } from "./";

// export const SetDefault = action("DEFAULT", payload<{}>());
// export const SetPath = action("SET", payload<{ path: string }>());

// /* `https://${host}/{path}` */
// export interface RouterState {
//   host: string;
//   path: string;
// }

// const initialState = { host: window.location.host, path: "" };
// export const routerReducer = reducer<RouterState>(
//   [
//     on(SetDefault, _ => ({ host: window.location.host, path: "" })),
//     on(SetPath, (state, { payload: { path } }) => ({ ...state, path }))
//   ],
//   initialState
// );

// export interface Props extends RouterState {
//   routeMap: Map<string, React.ReactNode>;
//   setPath: (path: string) => { type: "SET"; payload: { path: string } };
// }

// class Router extends React.Component<Props> {
//   componentDidMount() {
//     if (!this.props.path) {
//       console.log(this.props.setPath("one"));
//     }
//   }

//   render() {
//     const { path, routeMap } = this.props;
//     return path ? routeMap.get(path) : routeMap.values().next().value;
//   }
// }

// const mapStateToProps = (state: StoreType) => ({
//   host: state.router.host,
//   path: state.router.path
// });

// const mapDispatchToProps = (dispatch: Dispatch<StoreType>) => ({
//   setPath: (path: string) => dispatch(new SetPath({ path }))
// });

// export const selectPath = (store: StoreType) => store.router.path;

// export default connect(mapStateToProps, mapDispatchToProps)(Router);
