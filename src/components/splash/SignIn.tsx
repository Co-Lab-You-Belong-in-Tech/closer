import { arrowForwardOutline } from "ionicons/icons";
import React from "react";
import { Link } from "react-router-dom";

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonNavLink,
  IonPage,
  IonRow,
  setupIonicReact,
} from "@ionic/react";
import { useMutation } from "@tanstack/react-query";

import { loginUser } from "../../features/api/auth";
import { useStore } from "../../features/store";
// import hooks
import { useShowToast } from "../../hooks/useShowToast";
import Dashboard from "../../pages/Dashboard";

interface SignInProps {
  history?: any;
  location?: any;
  match?: any;
}

setupIonicReact();
const SignIn: React.FC<SignInProps> = () => {
  // Get store
  const { setUserStatus } = useStore((state) => state);
  const emailRef = React.useRef<HTMLIonInputElement>(null);
  const passwordRef = React.useRef<HTMLIonInputElement>(null);

  // setup toast
  const showToast = useShowToast();

  const { mutate: signIn, isLoading } = useMutation(
    (FormData: object) => loginUser(FormData),
    {
      onSuccess: (data) => {
        setUserStatus("loggedIn");
        showToast(data.status.message, "success");
      },
      onError: (error: any) => {
        showToast(JSON.stringify(error.response.data), "danger");
      },
    }
  );

  const handleSignIn = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const formData = {
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
    };
    formData.email && formData.password
      ? signIn(formData)
      : showToast("Please fill in all fields", "warning");
    // resume default behavior
  };

  return (
    <IonPage>
      <IonHeader className="signinHeader">
        <h5 className="signInTitle">
          {" "}
          Turning the pain of relationship conflict into positive experiences.
        </h5>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <h1 className="ion-text-left ion-font-weight-800">Sign In</h1>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="signInInput">
                <IonLabel>Email address</IonLabel>
                <IonInput ref={emailRef} type="email"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="signInInput">
                <IonLabel>Password</IonLabel>
                <IonInput ref={passwordRef} type="password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton
                onClick={(e) => {
                  handleSignIn(e);
                }}
                expand="block"
                color="primary"
                size="large"
                className="signinButtons"
              >
                {isLoading ? "Loading..." : "Sign In"}
                <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-top">
            <IonCol>
              <IonNavLink
                onClick={() => setUserStatus("guest")}
                routerDirection="forward"
                component={() => <Dashboard />}
              >
                <IonButton
                  expand="block"
                  color="primary"
                  size="large"
                  className="signinButtons"
                >
                  Try out as guest
                  <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
                </IonButton>
              </IonNavLink>
            </IonCol>
          </IonRow>

          {/* <IonRow className="ion-text-center ion-margin-top">
            <IonCol>
              <a href="https://google.com">
                <IonIcon icon={logoGoogle} size="large" color="dark"></IonIcon>
              </a>
            </IonCol>
            <IonCol>
              <a href="https://google.com">
                <IonIcon icon={logoGoogle} size="large" color="dark"></IonIcon>
              </a>
            </IonCol>
            <IonCol>
              <a href="https://google.com">
                <IonIcon icon={logoGoogle} size="large" color="dark"></IonIcon>
              </a>
            </IonCol>
          </IonRow> */}

          <IonRow>
            <IonCol>
              <h5 className="ion-text-center">
                Don't have an account? <Link to="/sign-up">Sign Up</Link>
              </h5>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
