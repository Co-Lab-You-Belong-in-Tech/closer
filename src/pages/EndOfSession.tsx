import { MouseEvent, useState } from "react";

import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonPage,
  IonRouterLink,
  IonButton,
  IonModal,
  IonButtons,
  IonIcon,
  IonText,
} from "@ionic/react";
import { close } from "ionicons/icons";
import { useEndOfCycleStore } from "../features/store";

const EndOfSession: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const setEndOfCycle = useEndOfCycleStore((state) => state.setEndOfCycle);

  const handleClick = () => {
    setIsOpen(false);
    setEndOfCycle(false);
  };

  return (
        <IonModal
          isOpen={isOpen}
          initialBreakpoint={0.5}
          breakpoints={[0, 0.5, 0.75, 1.0]}
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
              <span style={{ fontWeight: "800" }}>
                Congratulations! You've just completed your first conflict
                cycle! One step closer to your inner self and your partner.
              </span>
              <br></br>
              <br></br>
              After each session we will show you a tailored message of support,
              tips, or an article that we think might be relevant to you.
              <br></br>
              <br></br>
              While there aren't any quick fixes when it comes to emotional
              wellbeing and it can be unpleasant at time, especially in a
              relationship, by regularly reflecting on your feelings and how
              your partner reacts to them, you can uncover insights about
              yourself and your partner that will bring you closer to one
              another.
              <br />
              <br />
              We hope to see you soon!
            </p>
            <IonButton
              size="large"
              className="ion-text-center buttonStyle"
              onClick={() => handleClick()}
              color="primary"
            >
              Close
            </IonButton>
          </IonContent>
        </IonModal>
  );
};

export default EndOfSession;
