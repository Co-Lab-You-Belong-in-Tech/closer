// import components styles
import './App.scss';

import React, { useEffect, useState } from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';

import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// import components
import SignIn from './components/splash/SignIn';
import SignUp from './components/splash/SignUp';
import Splash from './components/splash/Splash';
// Get stores
import { useStore } from './features/store';
// Custom hooks
import { useTimeout } from './hooks/useTimeOut';
import CycleMainPage from './pages/CycleMainPage';
// import pages
import Dashboard from './pages/Dashboard';

import DesktopQRCode from './components/DeskTopQRCode';
import useWindowResize from './hooks/useWindowSize';

setupIonicReact();

const App: React.FC<RouteComponentProps> = () => {
  const userStatus = useStore((state) => state.userStatus);
  const [loading, setLoading] = React.useState<boolean>(true);

  useTimeout(() => setLoading(false), 3000);
  // use window size to check if has been resized
  const [width, height, handleResize] = useWindowResize();

  const [isMobile, setIsMobile] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const checkDevice = () => {
      if (navigator.userAgent.match(/Android/i)
          || navigator.userAgent.match(/webOS/i)
          || navigator.userAgent.match(/iPhone/i)
          || navigator.userAgent.match(/iPad/i)
          || navigator.userAgent.match(/iPod/i)
          || navigator.userAgent.match(/BlackBerry/i)
          || navigator.userAgent.match(/Windows Phone/i)
      ) {
          setIsMobile(true);
      } else {
          setIsMobile(false);
          setQrCodeUrl(window.location.href);
      }
  }

  // if window size has been changed, check if it is mobile or not
  useEffect(() => {
      checkDevice();
  }, [width, height]);

  return (
    <IonApp className="">
      {loading ? (
        <Splash />
      ) : (
        <>
            {isMobile ? <IonReactRouter>
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
        </IonReactRouter> : <DesktopQRCode url={qrCodeUrl} />}
        </>
        
      )}
    </IonApp>
  );
};
export default App;
