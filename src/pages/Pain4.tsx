// import { useState } from "react";

import {
  IonHeader,
  IonContent,
  IonPage,
  IonButton,
  IonProgressBar,
  IonRouterLink,
  IonToolbar,
} from "@ionic/react";
import Cta from "../components/Cta";

const Pain4: React.FC = () => {
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
        <h2
          className="ion-text-center"
          style={{ width: "80%", marginLeft: "10%", marginTop: "50%" }}
        >
          Of course it hurts… It comes from __________ (trigger). Of course I
          react, I am protecting myself from ______________ (pain). I know now,
          I know why, this MAKES SENSE!
        </h2>
        <IonRouterLink routerLink="preSummary">
          <IonButton color="light" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Pain4;
