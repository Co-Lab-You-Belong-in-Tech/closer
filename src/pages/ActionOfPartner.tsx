import { useState } from "react";

import {
  IonHeader,
  IonContent,
  IonPage,
  IonButton,
  IonProgressBar,
  IonItem,
  IonInput,
  IonModal,
  IonRouterLink,
  IonButtons,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import React from "react";

import { close } from "ionicons/icons";
import Cta from "../components/Cta";
import { stockActions } from "../data/stockActions";
import { usePartnerActionsStore } from "../features/store";

const ActionOfPartner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sampleAction, setSampleAction] = useState<any | null>(null);
  const addPartnerAction = usePartnerActionsStore( (state) => state.addPartnerAction);

  const handleAddPartnerAction = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    addPartnerAction(sampleAction);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Cta />
          <IonProgressBar
            className="ion-margin-top"
            value={0.6}
          ></IonProgressBar>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding ion-margin-top">
        <h3>What action did your partner take? </h3>
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
            {
              stockActions.map((action, index) => {
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
              })
            }

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

        <IonRouterLink routerLink="discliamer">
          <IonButton onClick={(e) => handleAddPartnerAction(e)} color="light" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default ActionOfPartner;
