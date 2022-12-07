// import { useState } from "react";

import {
  IonHeader,
  IonContent,
  IonPage,
  IonButton,
  IonProgressBar,
  IonItem,
  IonRouterLink,
  IonInput,
} from "@ionic/react";

const Pain3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonProgressBar className="ion-margin-top" value={0.8}></IonProgressBar>

        <h2
          className="ion-text-center"
          style={{ width: "55%", marginLeft: "22.5%", marginTop: "50%" }}
        >
          If the pain had words, it would say...{" "}
        </h2>

        <IonItem>
          <IonInput
            placeholder='i.e.  "I will always be alone."'
            className="ion-text-center"
          ></IonInput>
        </IonItem>
      </IonHeader>

      <IonContent className="ion-padding ion-margin-top">
        <IonRouterLink routerLink="pain4">
          <IonButton color="light" className="ion-text-center">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Pain3;
