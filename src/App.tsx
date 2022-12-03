import React from "react";
import { setupIonicReact, IonApp, IonRouterOutlet } from "@ionic/react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

// import components styles
import "./App.scss";
// import components
import SignIn from "./components/splash/SignIn";
// import Intro from "./components/Intro";
import Dashboard from './pages/Dashboard';
import Splash from "./components/splash/Splash";

// Custom hooks
import { useTimeout } from "./components/hooks/useTimeOut";

setupIonicReact();

// interface RouteProps {
//   path: string;
//   component: React.FC;
//   exact?: boolean;
// }

const App: React.FC<RouteComponentProps> = () => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  useTimeout(() => setLoading(false), 3000);

  return (
    <IonApp>
      {loading ? (
        <Splash />
      ) : (
        <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/dashboard"
            render={() => loggedIn ? <Dashboard /> : <Redirect to="/signin" />}
          />
          <Route path="/signin"
            render={() => !loggedIn ? <SignIn setLoggedIn={setLoggedIn} /> : <Redirect to="/dashboard" />}
          />
          <Route exact path="/" render={() => <Redirect to="/signin" />} />
        </IonRouterOutlet>
      </IonReactRouter>
      )}
    </IonApp>
  );
};

export default App;
