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

const Pain2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonProgressBar className="ion-margin-top" value={0.8}></IonProgressBar>

        <h2 className="ion-text-center">
          Where do I hold that pain in my body?{" "}
        </h2>

        <IonItem>
          <IonTextarea placeholder="i.e. twist in the stomach or pressure on the chest etc."></IonTextarea>
        </IonItem>
      </IonHeader>

      <IonContent className="ion-padding ion-margin-top">
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
