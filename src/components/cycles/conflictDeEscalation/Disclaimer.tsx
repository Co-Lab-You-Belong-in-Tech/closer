import { close } from "ionicons/icons";
import { useState } from "react";

import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonModal,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";

interface FuncProps {
  handleProgress?: () => void;
}

const Disclaimer: React.FC<FuncProps> = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <IonContent className="ion-padding">
      <IonText color="dark" className="ion-text-center">
        <IonText>
          {" "}
          <h3>
            Take your time with this part, really let yourself feel what you are
            writing about.
          </h3>
        </IonText>
      </IonText>
      <IonGrid>
        <IonRow>
          <IonCol className="ion-text-center anim-circle">
            <h5>Breathe</h5>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonButton
        onClick={() => props.handleProgress!()}
        color="primary"
        className="ion-text-center disclaimerContinue buttonStyle"
      >
        CONTINUE
      </IonButton>

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
            be especially difficult if you've experienced trauma. If you are not
            feeling comfortable to proceed, you may come back at a later time
            when you feel ready. Don't worry, this app will still be here!
          </p>
          <IonButton
            size="large"
            className="ion-text-center buttonStyle"
            onClick={() => setIsOpen(false)}
            color="primary"
          >
            Continue
          </IonButton>
        </IonContent>
      </IonModal>
    </IonContent>
  );
};

export default Disclaimer;
