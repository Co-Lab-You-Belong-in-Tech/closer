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
        <IonList className="ion-margin-top">
          <IonRadioGroup ref={triggerRef} value="triggers">
            {stockTriggers.map((trigger) => (
              <IonItem
                style={{
                  border: "2px #A982FF solid",
                  borderRadius: "100px",
                  marginTop: "30px",
                }}
                key={Array.prototype.indexOf.call(stockTriggers, trigger)}
              >
                <IonLabel>{trigger}</IonLabel>
                <IonRadio slot="end" value={trigger}></IonRadio>
              </IonItem>
            ))}
          </IonRadioGroup>
        </IonList>

        <IonItem className="ion-margin-top ion-padding-top">
          <IonLabel position="stacked">Other</IonLabel>
          <IonInput></IonInput>
        </IonItem>

        <IonRouterLink routerLink="emotion">
          <IonButton
            disabled={!triggerRef.current?.value}
            onClick={(e) => handleAddTrigger(e)}
            color="primary"
            className="ion-text-center buttonStyle"
          >
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Trigger;
