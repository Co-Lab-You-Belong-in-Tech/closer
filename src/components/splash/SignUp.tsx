import { arrowForwardOutline } from "ionicons/icons";
import React, { useRef } from "react";
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
  IonPage,
  IonRow,
  setupIonicReact,
} from "@ionic/react";
import { useMutation } from "@tanstack/react-query";

import { registerUser } from "../../features/api/auth";
// Import store
import { useStore } from "../../features/store";
import { useShowToast } from "../../hooks/useShowToast";

interface componentProps {
  history?: any;
  location?: any;
  match?: any;
  message?: string;
  error?: any;
  url?: string;
}

setupIonicReact();
const SignUp: React.FC<componentProps> = () => {
  // Get store
  const { setUserStatus } = useStore((state) => state);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);

  // setup toast
  const showToast = useShowToast();

  const { mutate: register, isLoading } = useMutation(
    (formData: object) => registerUser(formData),
    {
      onSuccess: (data) => {
        setUserStatus("registered");
        showToast(data.status.message, "success");
      },
      onError: (error: any) => {
        showToast(JSON.stringify(error.response.data.errors.data), "danger");
      },
    }
  );

  const handleSignUp = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const formData = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    formData.email && formData.password
      ? register(formData)
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
            <h1 className="ion-text-left ion-font-weight-800">Sign up</h1>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem className="signInInput">
                <IonLabel>Email address</IonLabel>
                <IonInput ref={emailRef} type="email" required></IonInput>
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
                onClick={(e) => handleSignUp(e)}
                expand="block"
                color="primary"
                size="large"
                routerDirection="back"
                routerLink="/sign-in"
                className="signinButtons"
              >
                {isLoading ? "Loading..." : "Sign up"}
                <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <h5 className="ion-text-center">
                Already a User? <Link to="/sign-in">Log in</Link>
              </h5>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
