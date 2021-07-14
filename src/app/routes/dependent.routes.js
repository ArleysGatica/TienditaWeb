import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


//const Home = lazy(() => import("../page/client/home/home"));
const Inventory = lazy(() => import("../Page/dependent/Inventory/inventory"));

function DependentRoutes() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="logo">
           
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Inventory} />
         <Route component={Inventory} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default DependentRoutes;
