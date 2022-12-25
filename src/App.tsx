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
import Intro2 from "./components/cycles/conflictDeEscalation/Intro2";
import InfoOfConflict from "./components/cycles/conflictDeEscalation/InfoOfConflict";
import Trigger from "./components/cycles/conflictDeEscalation/Trigger";
import Emotion from "./components/cycles/conflictDeEscalation/Emotion";
import Action from "./components/cycles/conflictDeEscalation/Action";
import ActionOfPartner from "./components/cycles/conflictDeEscalation/ActionOfPartner";
import Disclaimer from "./components/cycles/conflictDeEscalation/Disclaimer";
import Pain1 from "./components/cycles/conflictDeEscalation/Pain1";
import Pain2 from "./components/cycles/conflictDeEscalation/Pain2";
import Pain3 from "./components/cycles/conflictDeEscalation/Pain3";
import Pain4 from "./components/cycles/conflictDeEscalation/Pain4";
import PreSummary from "./components/cycles/conflictDeEscalation/PreSummary";
import CycleSummary from "./components/cycles/conflictDeEscalation/CycleSummary";
import Analysis from "./components/cycles/conflictDeEscalation/Analysis";
import Reflection from "./pages/Reflection";
import EndOfSession from "./pages/EndOfSession";

import CycleMainPage from "./pages/CycleMainPage";
// Custom hooks
import { useTimeout } from "./hooks/useTimeOut";
// Get stores
import { useUserStatusStore } from "./features/store";

setupIonicReact();

const App: React.FC<RouteComponentProps> = () => {
  const userStatus = useUserStatusStore((state) => state.userStatus);
  const [loading, setLoading] = React.useState<boolean>(true);

  console.log(userStatus);

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
                  ? () => <Redirect to="/dashboard" />
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
            <Route exact path="/" render={() => <Redirect to="/signin" />} />

            <Route
              path="/dashboard"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                ? () => <Dashboard />
                : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />

              <Route
                path="dashboard/:startCycle"
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
          </IonRouterOutlet>
        </IonReactRouter>
      )}
    </IonApp>
  );
};
export default App;
