import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { IonButton, IonContent, IonPage, IonText } from '@ionic/react';

import EndOfSession from '../components/cycles/conflictDeEscalation/EndOfSession';
import Intro from '../components/Intro';
import { useStore } from '../features/store';

const Dashboard: React.FC = () => {
  const { endOfCycle } = useParams<{ endOfCycle: string }>();
  const firstTime = useStore((state) => state.firstTime);
  // const endOfCycle = useEndOfCycleStore((state) => state.endOfCycle);
  return (
    <IonPage className="dashboardPage">
      <IonContent className="ion-padding">
        <IonText
          color="light"
          className="ion-text-center ion-padding-horizontal"
        >
          <h2>Welcome!</h2>
          <h5 className="underline">What would you like to do today?</h5>
        </IonText>
        <Link to="/cycle">
        <IonButton
          // href="/cycle"
          expand="block"
          color="tertiary"
          className="dashboardTitle ion-text-center ion-margin  ion-text-uppercase
            "
          style={{ marginTop: "15%" }}
        >
          <h5>Log a new conflict cycle</h5>
        </IonButton>
        </Link>

        <IonButton
          expand="block"
          color="medium"
          className="dashboardTitle ion-text-center ion-margin-horizontal  ion-text-uppercase"
        >
          <h5>View completed sessions</h5>
        </IonButton>
      </IonContent>
      {firstTime ? <Intro /> : null}
      {endOfCycle === "endOfCycle" ? <EndOfSession /> : null}
    </IonPage>
  );
};

export default Dashboard;
