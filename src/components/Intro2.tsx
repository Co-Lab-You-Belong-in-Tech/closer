import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonNavLink,
  IonButton,
  IonProgressBar,
  IonCard,
  IonCardContent,
  IonRouterLink,
} from "@ionic/react";

import Trigger from "./Trigger";

const Intro2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Intro2</IonTitle>
        </IonToolbar>
        <IonProgressBar className="ion-margin-top" value={0.2}></IonProgressBar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <p>
              "Great job taking the first step! In a few moment, we will walk
              through what EFT calls the *conflict de-escalation cycle*
              (italic). This exercise will take you around 10 minutes to
              complete. You will need to reflect on your triggers, feelings, and
              actions in this specific conflict you have in mind.
              <br></br>
              <br></br>
              Reflecting on your emotions can be overwhelming. If at any moment
              you feel too overwhelmed to continue, take a break, BREAAAATHE,
              and come back when you're ready."
            </p>
          </IonCardContent>
        </IonCard>

        {/* <IonNavLink routerDirection="forward" component={() => <Trigger />}>
          <IonButton
            color="light"
            className="ion-text-center"
            style={{ margin: "10%" }}
          >
            LET'S FIND OUT
          </IonButton>
        </IonNavLink> */}
        <IonRouterLink routerLink="trigger">
          <IonButton
            color="light"
            className="ion-text-center"
            style={{ margin: "10%" }}
          >
            LET'S FIND OUT
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Intro2;
