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
import { usePain2Store } from "../features/store";

const Pain2: React.FC = () => {
  const addPain2 = usePain2Store((state) => state.addPain2);
  const painRef = React.useRef<HTMLIonTextareaElement>(null);

  const handleAddPain2 = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    painRef.current?.value && addPain2(painRef.current.value);
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
        <h2 className="ion-text-center">
          Where do I hold that pain in my body?{" "}
        </h2>
        <IonItem>
          <IonTextarea ref={painRef} placeholder="i.e. twist in the stomach or pressure on the chest etc."></IonTextarea>
        </IonItem>
        <IonRouterLink routerLink="pain3">
          <IonButton onClick={(e) => handleAddPain2(e)} color="light" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Pain2;
