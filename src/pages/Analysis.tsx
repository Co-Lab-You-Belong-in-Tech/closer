// import { useState } from "react";

import {
  IonHeader,
  IonContent,
  IonPage,
  IonButton,
  IonProgressBar,
  IonRouterLink,
  IonGrid,
  IonRow,
  IonCol,
  IonToolbar,
} from "@ionic/react";
import Cta from "../components/Cta";

const Analysis: React.FC = () => {
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
        <h2 className="ion-padding ion-text-center">Analysis </h2>
        <IonGrid>
          <IonRow>
            <h3>It seems like in conflicts, you are a ...</h3>
          </IonRow>
          <IonRow>
            <IonCol>
              <h3
                className="ion-text-center"
                style={{
                  backgroundColor: "lightGreen",
                  padding: "60px 5px",
                  borderRadius: "50%",
                }}
              >
                pursuer
              </h3>
            </IonCol>
            <IonCol className="ion-margin">
              <p>You seek ...</p>
              <p>You feel...</p>
              <p>You fear...</p>
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-top">
            <IonCol>
              <h3 className="ion-text-right">And your partner is a ...</h3>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-margin">
              <p>They feel ...</p>
              <p>They fear...</p>
            </IonCol>
            <IonCol>
              <h3
                className="ion-text-center"
                style={{
                  backgroundColor: "lightpink",
                  padding: "60px 5px",
                  borderRadius: "50%",
                }}
              >
                Withdrawer
              </h3>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonRouterLink routerLink="reflection">
          <IonButton color="light" className="ion-text-center">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Analysis;
