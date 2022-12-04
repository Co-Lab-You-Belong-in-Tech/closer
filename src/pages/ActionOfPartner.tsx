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

  //
  IonButtons,
  IonToolbar,
  IonIcon,
} from "@ionic/react";

import { close } from "ionicons/icons";

// import other page

const ActionOfPartner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sampleAction, setSampleAction] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <IonProgressBar className="ion-margin-top" value={0.6}></IonProgressBar>

        <h2 className="ion-text-center">What action did your partner take? </h2>

        <IonItem>
          <IonInput maxlength={20} onClick={() => setIsOpen(true)}>
            {sampleAction}
          </IonInput>
        </IonItem>
      </IonHeader>

      <IonContent className="ion-padding ion-margin-top">
        <IonModal
          isOpen={isOpen}
          initialBreakpoint={0.75}
          breakpoints={[0, 0.25, 0.5, 1.0]}
        >
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>
                <IonIcon icon={close} slot="end" color="dark"></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>

          <div className="wrapper">
            <h1>Sample Actions</h1>
            <IonButton
              onClick={(e) =>
                setSampleAction((e.target as HTMLInputElement).innerText)
              }
            >
              Complain
            </IonButton>
            <IonButton
              onClick={(e) =>
                setSampleAction((e.target as HTMLInputElement).innerText)
              }
            >
              Attack
            </IonButton>
            <IonButton
              onClick={(e) =>
                setSampleAction((e.target as HTMLInputElement).innerText)
              }
            >
              Blame or point out mistakes
            </IonButton>
          </div>
        </IonModal>

        <IonRouterLink routerLink="discliamer">
          <IonButton
            color="light"
            className="ion-text-center"
            style={{ margin: "10%" }}
          >
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default ActionOfPartner;
