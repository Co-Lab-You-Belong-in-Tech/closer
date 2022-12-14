import { close } from 'ionicons/icons';
import { useState } from 'react';

import {
    IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonToolbar
} from '@ionic/react';

const EndOfSession: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

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
            Congratulations! You've just completed your first conflict cycle!
            One step closer to your inner self and your partner.
          </span>
          <br></br>
          <br></br>
          After each session we will show you a tailored message of support,
          tips, or an article that we think might be relevant to you.
          <br></br>
          <br></br>
          While there aren't any quick fixes when it comes to emotional
          wellbeing and it can be unpleasant at time, especially in a
          relationship, by regularly reflecting on your feelings and how your
          partner reacts to them, you can uncover insights about yourself and
          your partner that will bring you closer to one another.
          <br />
          <br />
          We hope to see you soon!
        </p>
        <IonButton
          size="large"
          className="ion-text-center buttonStyle"
          onClick={() => setIsOpen(false)}
          color="primary"
        >
          Close
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default EndOfSession;
