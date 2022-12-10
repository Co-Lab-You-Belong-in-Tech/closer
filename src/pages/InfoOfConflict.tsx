import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonPage,
  IonRouterLink,
  IonButton,
  IonText,
  IonProgressBar,
  IonItem,
  IonInput,
  IonLabel,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonRange,
} from "@ionic/react";

import { useRef } from "react";

import Cta from "../components/Cta";

// import store
import { useConflictsStore } from '../features/store';

const InfoOfConflict: React.FC = () => {
  const addConflict = useConflictsStore((state) => state.addConflict);
  const conflictName = useRef<HTMLIonInputElement>(null);
  const conflictDate = useRef<HTMLIonDatetimeElement>(null);
  const conflictIntensity = useRef<HTMLIonRangeElement>(null);
  
  const handleAddConflict = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    addConflict({
      name: conflictName.current?.value,
      date: conflictDate.current?.value,
      intensity: conflictIntensity.current?.value,
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Cta />
          <IonProgressBar
            className="ion-margin-top"
            value={0.2}
          ></IonProgressBar>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonText>
          <h2> Tell us more about the conflict</h2>
        </IonText>

        <IonItem>
          <div className="conflictName">
            <IonLabel position="stacked">Name of the conflict</IonLabel>
            <IonInput ref={conflictName}></IonInput>
          </div>
        </IonItem>

        <div className="ion-margin">
          <IonLabel position="stacked">When did it happen?</IonLabel>
          <IonDatetimeButton
            datetime="datetime"
            className="ion-margin-top"
          ></IonDatetimeButton>
          <IonModal keepContentsMounted={true}>
            <IonDatetime ref={conflictDate} id="datetime" presentation="date"></IonDatetime>
          </IonModal>
        </div>

        <div className="ion-margin">
          <IonLabel position="stacked">Intensity Level</IonLabel>
          <IonRange
            ref={conflictIntensity}
            ticks={true}
            snaps={true}
            min={0}
            max={5}
            pin={true}
          ></IonRange>
          <IonLabel>low</IonLabel>
          <IonLabel style={{ marginLeft: "79%" }}>High</IonLabel>
        </div>

        <IonRouterLink routerLink="trigger">
          <IonButton onClick={(e) => handleAddConflict(e)} color="light" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default InfoOfConflict;
