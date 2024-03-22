import React from "react"
import { Navigate, RedirectFunction, RouteProps } from "react-router-dom"

// export const ProtectedRoute = ({ component: Component, ...props }) => {
//     return (
//       props.loggedIn ? (<Component {...props} />) : <Navigate to="/" replace />
//     )
// };
  
// export const UnProtectedRoute =({ component: Component, ...props }) => {
//     return (
//       props.loggedIn === false ? (<Component {...props} />) : <Navigate to="/" replace />
//     )
// }




// export type ProtectedRouteProps = {
//     isAuthenticated: boolean;
//     authenticationPath: string;
//   } & RouteProps;
  
//   export default function ProtectedRoute({isAuthenticated, authenticationPath, ...routeProps}: ProtectedRouteProps) {
//     if(isAuthenticated) {
//       return <Route {...routeProps} />;
//     } else {
//       return <Redirect to={{ pathname: authenticationPath }} />;
//     }
//   };