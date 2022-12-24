import { useState } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import { close, arrowForwardOutline } from "ionicons/icons";

const Intro: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <IonModal
      isOpen={isOpen}
      initialBreakpoint={0.75}
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
        <h2>Welcome to Closer!</h2>
        <p>
          Closer aims to turn the pain of conflicts into positive experiences
          that promote a deeper understanding of your partner and yourself.
          <br />
          <br />
          Closer will guide you through a "de-escalation" of conflict cycle,
          based on the methods of Emotionally Focused Therapy (EFT), throughout
          which the focus is on understanding your and your partner's emotions."
          <br />
          <br />
          Closer is a simple yet powerful app that guides you through a
          relationship conflict cycle, based on the methods of Emotionally
          Focused Therapy (EFT).
          <br />
          <br />
          Remember that, no matter how the particular relationship conflict
          cycle manifests, there are logical reasons for why it appears the way
          it does. EFT helps to shift your focus from "we have a problem" to "we
          need to break this cycle".
          <br />
          <br />
          Ready to uncover some insights and restore closeness in your
          relationship?
        </p>
        <IonButton
          size="large"
          className="ion-text-center buttonStyle"
          onClick={() => setIsOpen(false)}
          color="primary"
        >
          Continue
          <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default Intro;
