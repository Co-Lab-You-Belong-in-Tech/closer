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

// Import the store
import { useTriggersStore } from "../../../features/store";
import { stockTriggers } from "../../../data/stockTriggers";

interface FuncProps {
  handleProgress?: () => void;
}

const Trigger: React.FC<FuncProps> = (props) => {
  const addTrigger = useTriggersStore((state) => state.addTrigger);
  const triggerRef = React.useRef<HTMLIonRadioGroupElement>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    addTrigger(triggerRef.current?.value);

    props.handleProgress && props.handleProgress();
  };

  return (
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

      <IonButton
        // disabled={!triggerRef.current?.value}
        onClick={(e) => handleClick(e)}
        color="primary"
        className="ion-text-center buttonStyle"
      >
        CONTINUE
      </IonButton>
    </IonContent>
  );
};

export default Trigger;
