import {
  IonHeader,
  IonContent,
  IonPage,
  IonButton,
  IonProgressBar,
  IonItem,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonInput,
  IonRouterLink,
  IonToolbar,
} from "@ionic/react";
import React from "react";

import Cta from "../components/Cta";

// Import the store
import { useTriggersStore } from "../features/store";
import { stockTriggers } from "../data/stockTriggers";

const Trigger: React.FC = () => {
  const addTrigger = useTriggersStore((state) => state.addTrigger);
  const triggerRef = React.useRef<HTMLIonRadioGroupElement>(null);

  const handleAddTrigger = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    addTrigger(triggerRef.current?.value);
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

      <IonContent className="ion-padding ion-margin-top">
        <h3>What triggered your reaction?</h3>
        <IonList>
          <IonRadioGroup ref={triggerRef} value="triggers">
            {stockTriggers.map((trigger) => (
              <IonItem key={Array.prototype.indexOf.call(stockTriggers, trigger)}>
                <IonLabel>{trigger}</IonLabel>
                <IonRadio slot="end" value={trigger}></IonRadio>
              </IonItem>
            ))}
          </IonRadioGroup>
        </IonList>

        <IonItem className="ion-margin-top">
          <IonLabel position="stacked">Other</IonLabel>
          <IonInput></IonInput>
        </IonItem>

        <IonRouterLink routerLink="emotion">
          <IonButton onClick={(e) => handleAddTrigger(e)} color="light" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Trigger;
