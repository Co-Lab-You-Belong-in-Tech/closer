import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonRouterLink,
  IonButton,
} from "@ionic/react";

import Intro from "../components/Intro";

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRouterLink routerLink="intro2">
          <IonButton
            expand="block"
            color="dark"
            className="signInTitle ion-text-center ion-margin
            "
          >
            Log in a new conflict cycle
          </IonButton>
        </IonRouterLink>
      </IonContent>
      <Intro />
    </IonPage>
  );
};

export default Dashboard;
