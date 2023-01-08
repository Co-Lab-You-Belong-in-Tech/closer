import React from 'react';

import {
    IonButton, IonContent, IonInput, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup
} from '@ionic/react';

import { stockTriggers } from '../../../data/stockTriggers';
// Import the store
import { useStore } from '../../../features/store';

import { useShowToast } from '../../../hooks/useShowToast';

interface FuncProps {
  handleProgress?: () => void;
}

const Trigger: React.FC<FuncProps> = (props) => {
  const addTrigger = useStore((state) => state.addTrigger);
  const [trigger, setTrigger] = React.useState<string>("");

  const showToast = useShowToast();

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (trigger) {
      addTrigger(trigger);
      props.handleProgress && props.handleProgress();
    } else {
      showToast("Please select or enter a trigger", "warning");
    }
  };


  return (
    <IonContent className="ion-padding ion-margin-top">
      <h3>What triggered your reaction?</h3>
      <IonList className="ion-margin-top">
        <IonRadioGroup
          onIonChange={(e) => {
            setTrigger(e.detail.value!);
          }}
          value={trigger}>
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
        <IonInput
          type="text"
          onIonChange={(e) => {
            setTrigger(e.detail.value!);
          }}
        ></IonInput>
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
