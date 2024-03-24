// import React from "react"
// import { Navigate, RedirectFunction, RouteProps } from "react-router-dom"

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

// import React from 'react'; 
// import { Route, Navigate } from 'react-router-dom'; 
 
// interface ProtectedRouteProps { 
//   path: string; 
//   element: React.ReactNode; // тип для элемента, который должен отобразиться, если пользователь авторизован 
//   loggedIn: boolean; // флаг, указывающий, авторизован ли пользователь 
//   redirectTo: string; // путь для перенаправления, если пользователь не авторизован 
// } 
 
// export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
//   path, 
//   element, 
//   loggedIn, 
//   redirectTo, 
// }) => { 

//     return loggedIn ? (
//         <Route path={path} element={element} />
//     ) : (
//         <Navigate to="/auth/login" replace /> 
//     );
//   return isAuthenticated ? ( 
//     <Route path={path} element={element} /> 
//   ) : ( 
//     <Navigate to={redirectTo} replace /> 
//   ); 
// }; 
 
// export default ProtectedRoute; 