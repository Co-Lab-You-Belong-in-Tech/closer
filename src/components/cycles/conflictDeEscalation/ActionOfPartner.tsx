import { close } from "ionicons/icons";
import React, { useState } from "react";

import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonToolbar,
} from "@ionic/react";

import { stockActions } from "../../../data/stockActions";
import { usePartnerActionsStore } from "../../../features/store";

import { useShowToast } from "../../../hooks/useShowToast";

interface FuncProps {
  handleProgress?: () => void;
}

const ActionOfPartner: React.FC<FuncProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sampleAction, setSampleAction] = useState<any | null>(null);
  const addPartnerAction = usePartnerActionsStore(
    (state) => state.addPartnerAction
  );

  const showToast = useShowToast();

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (sampleAction) {
      addPartnerAction(sampleAction);
      props.handleProgress && props.handleProgress();
    } else {
      showToast("Please select an action", "warning");
    }
  };

  return (
    <IonContent className="ion-padding ion-margin-top">
      <h3>
        What action did your <span style={{ color: "#A982FF" }}>partner</span>{" "}
        take?{" "}
      </h3>
      <IonItem>
        <IonInput maxlength={20} onClick={() => setIsOpen(true)}>
          {sampleAction && (
            <p
              style={{
                borderRadius: "100px",
                padding: "5px 10px",
                position: "absolute",
                display: "block",
                color: "white",
                backgroundColor: "#FF8F3D",
              }}
            >
              {" "}
              {sampleAction}
            </p>
          )}
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
                  color="dark"
                  fill="clear"
                  style={{ border: "2px solid #FF8F3D", borderRadius: "100px" }}
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
            <IonItem>
              <IonLabel>Others</IonLabel>
              <IonInput
                className="ion-margin"
                placeholder="i.e. Ignored"
                onIonChange={(e) => {
                  setSampleAction(e.target.value);
                }}
              ></IonInput>
            </IonItem>
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

export default ActionOfPartner;
