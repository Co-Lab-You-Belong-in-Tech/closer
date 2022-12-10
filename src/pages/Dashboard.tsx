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
          <IonTitle> Welcome!</IonTitle>
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

        <IonButton
          expand="block"
          color="medium"
          className="signInTitle ion-text-center ion-margin"
          disabled
        >
          View past conflicts
        </IonButton>
      </IonContent>
      <Intro />
    </IonPage>
  );
};

export default Dashboard;
