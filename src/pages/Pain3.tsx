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
  IonToolbar,
} from "@ionic/react";
import Cta from "../components/Cta";

const Pain3: React.FC = () => {
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
        <h3
          className="ion-text-center"
          style={{ width: "55%", marginLeft: "22.5%", marginTop: "50%" }}
        >
          If the pain had words, it would say...{" "}
        </h3>

        <IonItem>
          <IonInput
            placeholder='i.e.  "I will always be alone."'
            className="ion-text-center"
          ></IonInput>
        </IonItem>
        <IonRouterLink routerLink="pain4">
          <IonButton color="light" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Pain3;
