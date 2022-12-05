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
} from "@ionic/react";

const Pain1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonProgressBar className="ion-margin-top" value={0.8}></IonProgressBar>

        <h2 className="ion-text-center">
          What is the pain under my reaction?{" "}
        </h2>

        <IonItem>
          <IonTextarea
            className="ion-padding"
            placeholder="i.e. Hurt, loss, grief, loneliness, sadness, heartbreak, vulnerable, fear, confused, lost, etc."
          ></IonTextarea>
        </IonItem>
      </IonHeader>

      <IonContent className="ion-padding ion-margin-top">
        <IonRouterLink routerLink="/pain2">
          <IonButton color="light" className="ion-text-center">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Pain1;
