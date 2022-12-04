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
  IonRouterLink,
} from "@ionic/react";

import { arrowForwardOutline, logoGoogle } from "ionicons/icons";
import Intro from "../Intro";
import React from 'react';

interface SignInProps {
  history?: any;
  location?: any;
  match?: any;
  guest?: boolean
  setLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
  setGuest?: React.Dispatch<React.SetStateAction<boolean>>;
}

setupIonicReact();
const SignIn: React.FC<SignInProps> = ( { guest, setLoggedIn, setGuest} ) => {
  console.log(setLoggedIn);
  console.log("setGuest",setGuest);
  console.log(guest)
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
            <h1 className="ion-text-left ion-font-weight-800">Sign up</h1>
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
                Sign Up
                <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-top">
            <IonCol>
              <IonNavLink onClick={() => {setGuest!(true)}} routerDirection="forward" component={() => <Intro />}>
                <IonButton expand="block" color="dark" size="large">
                  Try out as guest
                  <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
                </IonButton>
              </IonRouterLink>
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
                Already a User? <a href="https://google.com"> Login.</a>
              </h5>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
