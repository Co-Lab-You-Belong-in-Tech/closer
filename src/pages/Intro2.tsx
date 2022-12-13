import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonPage,
  IonRouterLink,
  IonButton,
  IonProgressBar,
  IonText,
} from "@ionic/react";

import Cta from "../components/Cta";
import IntroImage from "../assets/IntroImage.png";
const Intro2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Cta />
          <IonProgressBar
            className="ion-margin-top"
            value={0.2}
          ></IonProgressBar>
        </IonToolbar>
        <img
          src={IntroImage}
          alt="couple sitting and watching sky"
          className="introImage"
        ></img>
      </IonHeader>

      <IonContent className="ion-padding-block">
        <div className="introText">
          <IonText color="light">
            <p style={{ width: "80%", margin: "0 auto" }}>
              Exercise time:10mins
              <br></br>
              <br></br>
              Great job taking the first step! In a few moment, we will walk
              through what EFT calls the conflict de-escalation cycle.
              <br></br>
              <br></br>
              You will need to reflect on your triggers, feelings, and actions
              in this specific conflict you have in mind. Reflecting on your
              emotions can be overwhelming. If at any moment you feel too
              overwhelmed to continue, take a break, BREAAAATHE, and come back
              when you're ready."
            </p>
          </IonText>
        </div>

        <IonRouterLink routerLink="infoOfConflict">
          <IonButton color="primary" className="ion-text-center buttonStyle">
            Let's do this!
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Intro2;
