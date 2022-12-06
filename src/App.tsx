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
import Trigger from "./pages/Trigger";
import Emotion from "./pages/Emotion";
import Action from "./pages/Action";
import Intro2 from "./pages/Intro2";
import ActionOfPartner from "./pages/ActionOfPartner";
import Discliamer from "./pages/Discliamer";

// Custom hooks
import { useTimeout } from "./hooks/useTimeOut";
// Get stores
import { useUserStatusStore } from "./features/store";

setupIonicReact();

// interface RouteProps {
//   path: string;
//   component: React.FC;
//   exact?: boolean;
// }

const App: React.FC<RouteComponentProps> = () => {
  const userStatus = useUserStatusStore((state) => state.userStatus);
  const [loading, setLoading] = React.useState<boolean>(true);

  console.log(userStatus);

  useTimeout(() => setLoading(false), 3000);

  return (
    <IonApp>
      {loading ? (
        <Splash />
      ) : (
        <IonReactRouter>
          <IonRouterOutlet>
            <Route
              path="/sign-in"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Dashboard />
                  : () => <SignIn />
              }
              exact={true}
            />
            <Route
              path="/sign-up"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Dashboard />
                  : () => <SignUp />
              }
              exact={true}
            />
            <Route
              path="/dashboard"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Dashboard />
                  : () => <SignIn />
              }
              exact={true}
            />
            <Route
              path="/trigger"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Trigger />
                  : () => <SignIn />
              }
              exact={true}
            />
            <Route
              path="/emotion"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Emotion />
                  : () => <SignIn />
              }
              exact={true}
            />
            <Route
              path="/action"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Action />
                  : () => <SignIn />
              }
              exact={true}
            />
            <Route
              path="/intro2"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Intro2 />
                  : () => <SignIn />
              }
              exact={true}
            />
            <Route
              path="/action-of-partner"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <ActionOfPartner />
                  : () => <SignIn />
              }
              exact={true}
            />
            <Route
              path="/discliamer"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Discliamer />
                  : () => <SignIn />
              }
              exact={true}
            />
            <Route
              path="/"
              render={
                userStatus === "guest" || userStatus === "loggedIn"
                  ? () => <Dashboard />
                  : () => <SignIn />
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
