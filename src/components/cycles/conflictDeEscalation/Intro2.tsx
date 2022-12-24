import {
  IonContent,
  IonButton,
  IonText,
} from "@ionic/react";

import Cta from "../../Cta";
import IntroImage from "../assets/IntroImage.png";

interface FuncProps {
  handleProgress?: () => void;
}

const Intro2: React.FC<FuncProps> = (handleProgress) => {
  return (

      <IonContent>
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

          <div className="ion-padding">
            <IonButton onClick={() => handleProgress.handleProgress!()} color="primary" className="ion-text-center buttonStyle">
              Let's do this!
            </IonButton>
          </div>
      </IonContent>
  );
};

export default Intro2;
