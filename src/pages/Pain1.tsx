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
import React from "react";

import Cta from "../components/Cta";
import { usePain1Store } from "../features/store";

const Pain1: React.FC = () => {
  const addPain1 = usePain1Store((state) => state.addPain1);
  const painRef = React.useRef<HTMLIonTextareaElement>(null);

  const handleAddPain1 = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    painRef.current?.value && addPain1(painRef.current.value);
  };

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
            ref={painRef}
            className="ion-padding"
            placeholder="i.e. Hurt, loss, grief, loneliness, sadness, heartbreak, vulnerable, fear, confused, lost, etc."
          ></IonTextarea>
        </IonItem>
        <IonRouterLink routerLink="/pain2">
          <IonButton onClick={(e) => handleAddPain1(e) } color="light" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Pain1;
