import React from "react";
import { setupIonicReact, IonApp, IonRouterOutlet } from "@ionic/react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

// import components styles
import "./App.scss";
// import components
import SignIn from "./components/splash/SignIn";
import Splash from "./components/splash/Splash";

// import pages
import Dashboard from "./pages/Dashboard";
import Trigger from "./pages/Trigger";
import Emotion from "./pages/Emotion";
import Action from "./pages/Action";
import Intro2 from "./pages/Intro2";
import ActionOfPartner from "./pages/ActionOfPartner";
import Discliamer from "./pages/Discliamer";
import Pain1 from "./pages/Pain1";
import Pain2 from "./pages/Pain2";
import Pain3 from "./pages/Pain3";
import Pain4 from "./pages/Pain4";
import PreSummary from "./pages/PreSummary";
import CycleSummary from "./pages/CycleSummary";
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
                guest || loggedIn ? <Dashboard /> : <Redirect to="/signin" />
              }
            />
            <Route
              path="/signin"
              render={() =>
                !guest || !loggedIn ? (
                  <SignIn
                    setLoggedIn={setLoggedIn}
                    guest={guest}
                    setGuest={setGuest}
                  />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route exact path="/" render={() => <Redirect to="/signin" />} />

            {/* below is Jingru' work after Dec 3 */}

            <Route
              path="/intro2"
              render={() =>
                guest || loggedIn ? <Intro2 /> : <Redirect to="/signin" />
              }
            />
            <Route
              path="/trigger"
              render={() =>
                guest || loggedIn ? <Trigger /> : <Redirect to="/signin" />
              }
            />
            <Route
              path="/emotion"
              render={() =>
                guest || loggedIn ? <Emotion /> : <Redirect to="/signin" />
              }
            />
            <Route
              path="/action"
              render={() =>
                guest || loggedIn ? <Action /> : <Redirect to="/signin" />
              }
            />
            <Route
              path="/actionOfPartner"
              render={() =>
                guest || loggedIn ? (
                  <ActionOfPartner />
                ) : (
                  <Redirect to="/signin" />
                )
              }
            />

            <Route
              path="/discliamer"
              render={() =>
                guest || loggedIn ? <Discliamer /> : <Redirect to="/signin" />
              }
            />

            <Route
              path="/pain1"
              render={() =>
                guest || loggedIn ? <Pain1 /> : <Redirect to="/signin" />
              }
            />
            <Route
              path="/pain2"
              render={() =>
                guest || loggedIn ? <Pain2 /> : <Redirect to="/signin" />
              }
            />
            <Route
              path="/pain3"
              render={() =>
                guest || loggedIn ? <Pain3 /> : <Redirect to="/signin" />
              }
            />
            <Route
              path="/pain4"
              render={() =>
                guest || loggedIn ? <Pain4 /> : <Redirect to="/signin" />
              }
            />
            <Route
              path="/preSummary"
              render={() =>
                guest || loggedIn ? <PreSummary /> : <Redirect to="/signin" />
              }
            />
            <Route
              path="/cycleSummary"
              render={() =>
                guest || loggedIn ? <CycleSummary /> : <Redirect to="/signin" />
              }
            />
          </IonRouterOutlet>
        </IonReactRouter>
      )}
    </IonApp>
  );
};

export default App;
