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

import Cta from "../../Cta";
import { usePain1Store } from "../../../features/store";

interface FuncProps {
  handleProgress?: () => void;
}

const Pain1: React.FC<FuncProps> = (props) => {
  const addPain1 = usePain1Store((state) => state.addPain1);
  const painRef = React.useRef<HTMLIonTextareaElement>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    painRef.current?.value && addPain1(painRef.current.value);
    props.handleProgress && props.handleProgress();
  };

  return (
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
          <IonButton
            onClick={(e) => handleClick(e)}
            color="primary"
            className="ion-text-center buttonStyle"
          >
            CONTINUE
          </IonButton>
      </IonContent>
  );
};

export default Pain1;
