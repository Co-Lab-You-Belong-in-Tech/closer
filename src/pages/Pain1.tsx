// import { useState } from "react";

import {
  IonHeader,
  IonContent,
  IonPage,
  IonButton,
  IonProgressBar,
  IonItem,
  IonRouterLink,
  IonTextarea,
  IonToolbar,
} from "@ionic/react";
import Cta from "../components/Cta";

const Pain1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Cta />
          <IonProgressBar
            className="ion-margin-top"
            value={0.8}
          ></IonProgressBar>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding ion-margin-top">
        <h3 className="ion-text-center">
          What is the pain under my reaction?{" "}
        </h3>
        <IonItem>
          <IonTextarea
            className="ion-padding"
            placeholder="i.e. Hurt, loss, grief, loneliness, sadness, heartbreak, vulnerable, fear, confused, lost, etc."
          ></IonTextarea>
        </IonItem>
        <IonRouterLink routerLink="/pain2">
          <IonButton color="light" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Pain1;
