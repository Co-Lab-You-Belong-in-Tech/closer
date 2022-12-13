import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonRouterLink,
  IonButton,
  IonItem,
  IonText,
} from "@ionic/react";

import Intro from "../components/Intro";

const Dashboard: React.FC = () => {
  return (
    <IonPage className="dashboardPage">
      <IonContent className="ion-padding">
        <IonText color="light" className="ion-text-center">
          <h2>Welcome!</h2>
          <h5 className="underline">What would you like to do today?</h5>
        </IonText>
        <IonRouterLink routerLink="intro2">
          <IonButton
            expand="block"
            color="tertiary"
            className="dashboardTitle ion-text-center ion-margin
            "
          >
            <h3>Log a new conflict cycle</h3>
          </IonButton>
        </IonRouterLink>

        <IonButton
          expand="block"
          color="medium"
          className="dashboardTitle ion-text-center ion-margin"
        >
          <h3>View completed sessions</h3>
        </IonButton>
      </IonContent>
      <Intro />
    </IonPage>
  );
};

export default Dashboard;
