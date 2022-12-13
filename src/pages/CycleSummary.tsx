// import { useState } from "react";

import {
  IonHeader,
  IonContent,
  IonPage,
  IonButton,
  IonProgressBar,
  IonRouterLink,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonToolbar,
} from "@ionic/react";
import Cta from "../components/Cta";

const CycleSummary: React.FC = () => {
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

        <h2 className="ion-padding">Cycle summary </h2>

        <IonCard>
          <IonCardHeader>
            <IonCardContent>
              When{" "}
              <span className="cycleSummarySpan"> negative tone of voice </span>
              happens, I feel
              <span className="cycleSummarySpan">frustrated</span> , and I{" "}
              <span className="cycleSummarySpan">
                respond in a negative tone.
              </span>{" "}
              The more I<span className="cycleSummarySpan"> speak </span>, the
              more you <span className="cycleSummarySpan"> withdraw </span> .
              But deep down, I'm experiencing{" "}
              <span className="cycleSummarySpan"> pain </span>and am protecting
              myself from{" "}
              <span className="cycleSummarySpan">
                {" "}
                disappointment from my parents.
              </span>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonHeader>

      <IonContent className="ion-padding ion-margin-top">
        <IonRouterLink routerLink="analysis">
          <IonButton color="primary" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default CycleSummary;
