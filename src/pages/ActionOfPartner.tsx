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

import { close } from "ionicons/icons";
import Cta from "../components/Cta";

const ActionOfPartner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sampleAction, setSampleAction] = useState<any | null>(null);
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
            <IonButton
              onClick={(e) => {
                setSampleAction((e.target as HTMLInputElement).innerText);
                setIsOpen(false);
              }}
            >
              attacked
            </IonButton>
            <IonButton
              onClick={(e) => {
                setSampleAction((e.target as HTMLInputElement).innerText);
                setIsOpen(false);
              }}
            >
              complained
            </IonButton>
            <IonButton
              onClick={(e) => {
                setSampleAction((e.target as HTMLInputElement).innerText);
                setIsOpen(false);
              }}
            >
              expressed frustration
            </IonButton>
            <IonButton
              onClick={(e) => {
                setSampleAction((e.target as HTMLInputElement).innerText);
                setIsOpen(false);
              }}
            >
              yelled
            </IonButton>
            <IonButton
              onClick={(e) => {
                setSampleAction((e.target as HTMLInputElement).innerText);
                setIsOpen(false);
              }}
            >
              Make threats
            </IonButton>
            <IonButton
              onClick={(e) => {
                setSampleAction((e.target as HTMLInputElement).innerText);
                setIsOpen(false);
              }}
            >
              criticized
            </IonButton>

            {/* withdrawer reactions */}
            <br></br>
            <IonButton
              onClick={(e) => {
                setSampleAction((e.target as HTMLInputElement).innerText);
                setIsOpen(false);
              }}
            >
              zoned out
            </IonButton>
            <IonButton
              onClick={(e) => {
                setSampleAction((e.target as HTMLInputElement).innerText);
                setIsOpen(false);
              }}
            >
              analyzed
            </IonButton>
            <IonButton
              onClick={(e) => {
                setSampleAction((e.target as HTMLInputElement).innerText);
                setIsOpen(false);
              }}
            >
              became quiet
            </IonButton>
            <IonButton
              onClick={(e) => {
                setSampleAction((e.target as HTMLInputElement).innerText);
                setIsOpen(false);
              }}
            >
              walked away
            </IonButton>
            <IonButton
              onClick={(e) => {
                setSampleAction((e.target as HTMLInputElement).innerText);
                setIsOpen(false);
              }}
            >
              sulked
            </IonButton>
            <IonButton
              onClick={(e) => {
                setSampleAction((e.target as HTMLInputElement).innerText);
                setIsOpen(false);
              }}
            >
              tried to reason
            </IonButton>

            {/* other option */}
            <IonInput
              placeholder="Others"
              onIonChange={(e) => {
                setSampleAction(e.target.value);
              }}
            ></IonInput>
          </div>
        </IonModal>

        <IonRouterLink routerLink="discliamer">
          <IonButton color="light" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default ActionOfPartner;
