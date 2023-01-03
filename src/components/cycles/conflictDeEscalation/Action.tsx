import { close } from 'ionicons/icons';
import React, { useState } from 'react';

import {
    IonButton, IonButtons, IonContent, IonIcon, IonInput, IonItem, IonModal, IonToolbar
} from '@ionic/react';

// import needed data
import { stockActions } from '../../../data/stockActions';
import { useActionsStore } from '../../../features/store';

import { useShowToast } from '../../../hooks/useShowToast';

interface FuncProps {
  handleProgress?: () => void;
}

const Action: React.FC<FuncProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sampleAction, setSampleAction] = useState<any | null>(null);

  const addAction = useActionsStore((state) => state.addAction);
  const showToast = useShowToast();

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (sampleAction) {
      addAction(sampleAction);
      props.handleProgress && props.handleProgress();
    } else {
      showToast("Please select an action", "warning");
    }
  };

  return (
    <IonContent className="ion-padding ion-margin-top">
      <h3>What action did you take? </h3>
      <IonItem>
        <IonInput maxlength={20} onClick={() => setIsOpen(true)}>
          {sampleAction}
        </IonInput>
      </IonItem>
      <IonModal
        isOpen={isOpen}
        initialBreakpoint={0.75}
        breakpoints={[0, 0.25, 0.5, 1.0]}
      >
        <IonToolbar>
          {/* pursuer reactions */}
          <IonButtons slot="end">
            <IonButton onClick={() => setIsOpen(false)}>
              <IonIcon icon={close} slot="end" color="dark"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>

        <div className="wrapper">
          <>
            {stockActions.map((action, index) => {
              return (
                <IonButton
                  key={index}
                  onClick={() => {
                    setSampleAction(action);
                    setIsOpen(false);
                  }}
                >
                  {action}
                </IonButton>
              );
            })}

            {/* other option */}
            <IonInput
              placeholder="Others"
              onIonChange={(e) => {
                setSampleAction(e.target.value);
              }}
            ></IonInput>
          </>
        </div>
      </IonModal>

      <IonButton
        onClick={(e) => handleClick(e)}
        color="primary"
        className="ion-text-center buttonStyle"
      >
        CONTINUE
      </IonButton>
    </IonContent>
  );
};

export default Action;
