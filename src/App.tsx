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

setupIonicReact();

// interface RouteProps {
//   path: string;
//   component: React.FC;
//   exact?: boolean;
// }

const App: React.FC<RouteComponentProps> = () => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(true);
  const [guest, setGuest] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(true);

  useTimeout(() => setLoading(false), 3000);

  return (
    <IonApp>
      {loading ? (
        <Splash />
      ) : (
        <IonReactRouter>
          <IonRouterOutlet>
            <Route
              path="/dashboard"
              render={() =>
                guest || loggedIn ? <Dashboard /> : <Redirect to="/SignUp" />
              }
            />
            <Route
              path="/signUp"
              render={() =>
                !guest || !loggedIn ? (
                  <SignUp
                    setLoggedIn={setLoggedIn}
                    guest={guest}
                    setGuest={setGuest}
                  />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              path="/signIn"
              render={() =>
                !guest || !loggedIn ? (
                  <SignIn
                    setLoggedIn={setLoggedIn}
                  />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route exact path="/" render={() => <Redirect to="/SignUp" />} />

            {/* below is Jingru Dec 3 work  */}

            <Route
              path="/intro2"
              render={() =>
                guest || loggedIn ? <Intro2 /> : <Redirect to="/SignUp" />
              }
            />
            <Route
              path="/trigger"
              render={() =>
                guest || loggedIn ? <Trigger /> : <Redirect to="/SignUp" />
              }
            />
            <Route
              path="/emotion"
              render={() =>
                guest || loggedIn ? <Emotion /> : <Redirect to="/SignUp" />
              }
            />
            <Route
              path="/action"
              render={() =>
                guest || loggedIn ? <Action /> : <Redirect to="/SignUp" />
              }
            />
            <Route
              path="/actionOfPartner"
              render={() =>
                guest || loggedIn ? (
                  <ActionOfPartner />
                ) : (
                  <Redirect to="/SignUp" />
                )
              }
            />

            <Route
              path="/discliamer"
              render={() =>
                guest || loggedIn ? <Discliamer /> : <Redirect to="/SignUp" />
              }
            />
          </IonRouterOutlet>
        </IonReactRouter>
      )}
    </IonApp>
  );
};

export default App;
