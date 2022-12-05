import {
  IonPage,
  IonHeader,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonCard,
  IonIcon,
  IonCardHeader,
  IonCardTitle,
  IonNavLink,
  setupIonicReact,
} from "@ionic/react";
import { arrowForwardOutline, logoGoogle } from "ionicons/icons";
import Intro from "../Intro";
import React from 'react';
import { Link } from "react-router-dom";

interface SignInProps {
  history?: any;
  location?: any;
  match?: any;
}

setupIonicReact();
const SignIn: React.FC<SignInProps> = () => {
  return (
    <IonPage className="ion-padding">
      <IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="signInTitle">Logo goes here</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow>
            <h1 className="ion-text-left ion-font-weight-800">Sign In</h1>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="signInInput">
                <IonLabel position="floating">Email address</IonLabel>
                <IonInput type="email"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="signInInput">
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="block" color="dark" size="large">
                Sign In
                <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="ion-text-center ion-margin-top">
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
          </IonRow>

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
