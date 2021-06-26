import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import image from "../../assets/image/logo.png";




const Login = lazy(() => import("../Page/share//login/login"));
const Home = lazy(() => import("../Page/client/home/home"));

function ClientRoutes() {
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
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
         
        
          <Route exact path="/login" component={Login} />
          <Route component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default ClientRoutes;
