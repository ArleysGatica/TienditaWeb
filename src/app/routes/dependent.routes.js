import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import image from "../../assets/image/logo.png";

//const Home = lazy(() => import("../page/client/home/home"));
const Login = lazy(() => import("../Page/share//login/login"));

function DependentRoutes() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="logo">
            <img src={image} alt="" />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Login} />
         <Route component={Login} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default DependentRoutes;
