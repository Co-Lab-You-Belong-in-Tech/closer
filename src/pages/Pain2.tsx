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

const Pain2: React.FC = () => {
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
          <IonTextarea placeholder="i.e. twist in the stomach or pressure on the chest etc."></IonTextarea>
        </IonItem>
        <IonRouterLink routerLink="pain3">
          <IonButton color="light" className="ion-text-center">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Pain2;
