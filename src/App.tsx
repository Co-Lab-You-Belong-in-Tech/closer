import { setupIonicReact, IonApp, IonNav, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

// import components styles
import "./App.scss";
// import components
import SignIn from "./components/SignIn";
import Intro from "./components/Intro";
import Dashboard from "./components/Dashboard";
import Intro2 from "./components/Intro2";
import Trigger from "./components/Trigger";
import Emotion from "./components/Emotion";
import Action from "./components/Action";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      {/* <IonNav root={() => <SignIn />}></IonNav> */}

      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/intro">
            <Intro />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/intro2">
            <Intro2 />
          </Route>
          <Route exact path="/trigger">
            <Trigger />
          </Route>
          <Route exact path="/emotion">
            <Emotion />
          </Route>
          <Route exact path="/action">
            <Action />
          </Route>
        </IonRouterOutlet>
        <Redirect exact path="/" to="signin" />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
