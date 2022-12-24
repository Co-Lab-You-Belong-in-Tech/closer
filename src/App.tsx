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
import InfoOfConflict from "./pages/InfoOfConflict";
import Trigger from "./pages/Trigger";
import Emotion from "./pages/Emotion";
import Action from "./pages/Action";
import ActionOfPartner from "./pages/ActionOfPartner";
import Discliamer from "./pages/Discliamer";
import Pain1 from "./pages/Pain1";
import Pain2 from "./pages/Pain2";
import Pain3 from "./pages/Pain3";
import Pain4 from "./pages/Pain4";
import PreSummary from "./pages/PreSummary";
import CycleSummary from "./pages/CycleSummary";
import Analysis from "./pages/Analysis";
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

            {/* below is from  Jingru  after Dec 3   */}

            <Route
              path="/cycleMainPage"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <CycleMainPage />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />

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
              path="/infoOfConflict"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <InfoOfConflict />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
            <Route
              path="/trigger"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Trigger />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
            <Route
              path="/emotion"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Emotion />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
            <Route
              path="/action"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Action />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
            <Route
              path="/intro2"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Intro2 />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
            <Route
              path="/action-of-partner"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <ActionOfPartner />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
            <Route
              path="/discliamer"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Discliamer />
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

            <Route
              path="/pain1"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Pain1 />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
            <Route
              path="/pain2"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Pain2 />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
            <Route
              path="/pain3"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Pain3 />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
            <Route
              path="/pain4"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Pain4 />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
            <Route
              path="/preSummary"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <PreSummary />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
            <Route
              path="/cycleSummary"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <CycleSummary />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
            <Route
              path="/analysis"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Analysis />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />

            <Route
              path="/reflection"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Reflection />
                  : () => <Redirect to="/sign-in" />
              }
              exact={true}
            />
            <Route
              path="/endOfSession"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <EndOfSession />
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
