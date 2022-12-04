import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonNavLink,
  IonButton,
  IonRouterLink,
} from "@ionic/react";

import Intro from "../components/Intro";
import Intro2 from "../components/Intro2";
const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* <IonNavLink routerDirection="forward" component={() => <Intro2 />}>
          <IonButton
            color="dark"
            className="signInTitle ion-text-center"
            size="large"
            style={{ marginLeft: "10%" }}
          >
            Log in a new conflict cycle
          </IonButton>
        </IonNavLink> */}
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
