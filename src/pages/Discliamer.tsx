import { useState } from "react";

import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonPage,
  IonRouterLink,
  IonButton,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonProgressBar,
  IonButtons,
  IonModal,
  IonIcon,
} from "@ionic/react";
import { close } from "ionicons/icons";
import Cta from "../components/Cta";

const Discliamer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

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
      </IonHeader>

      <IonContent className="ion-padding">
        <IonText color="dark" className="ion-text-center">
          <IonText>
            {" "}
            <h3>
              Take your time with this part, really let yourself feel what you
              are writing about.
            </h3>
          </IonText>
        </IonText>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center anim-circle">
              <h5>Breath</h5>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonRouterLink routerLink="pain1">
          <IonButton
            color="light"
            className="ion-text-center discliamerContinue"
          >
            CONTINUE
          </IonButton>
        </IonRouterLink>

        {/* Modal copied from Intro component */}
        <IonModal
          isOpen={isOpen}
          initialBreakpoint={0.5}
          breakpoints={[0, 0.25, 0.5, 1.0]}
        >
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>
                  <IonIcon icon={close} slot="end" color="dark"></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>
              This section will require you to reflect through past experiences
              and whatever underlying pain you might be experiencing. This might
              be especially difficult if you've experienced trauma. If you are
              not feeling comfortable to proceed, you may come back at a later
              time when you feel ready. Don't worry, this app will still be
              here!
            </p>
            <IonButton
              size="large"
              className="ion-text-center"
              onClick={() => setIsOpen(false)}
              color="light"
            >
              Continue
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Discliamer;
