import React from "react";
import { setupIonicReact, IonApp, IonRouterOutlet } from "@ionic/react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

// import components styles
import "./App.scss";
// import components
import SignIn from "./components/splash/SignIn";
import SignUp from "./components/splash/SignUp";
import Splash from "./components/splash/Splash";

// import pages
import Dashboard from "./pages/Dashboard";
import CycleMainPage from "./pages/CycleMainPage";
// Custom hooks
import { useTimeout } from "./hooks/useTimeOut";
// Get stores
import { useUserStatusStore } from "./features/store";

setupIonicReact();

const App: React.FC<RouteComponentProps> = () => {
  const userStatus = useUserStatusStore((state) => state.userStatus);
  const [loading, setLoading] = React.useState<boolean>(true);

  useTimeout(() => setLoading(false), 3000);

  return (
    <IonApp className="">
      {loading ? (
        <Splash />
      ) : (
        <IonReactRouter>
          <IonRouterOutlet>
            <Route
              path="/sign-in"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Redirect to="/" />
                  : () => <SignIn />
              }
              exact={true}
            />

            <Route
              path="/sign-up"
              render={
                userStatus === "registered"
                  ? () => <Redirect to="/sign-in" />
                  : () => <SignUp />
              }
              exact={true}
            />

            <Route
              path="/cycle"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <CycleMainPage />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />

            <Route
              path="/dashboard/:endOfCycle"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Dashboard />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />

            <Route
              path="/"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Dashboard />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
          </IonRouterOutlet>
        </IonReactRouter>
      )}
    </IonApp>
  );
};
export default App;
