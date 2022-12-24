// import { useState } from "react";

import {
  IonHeader,
  IonContent,
  IonPage,
  IonButton,
  IonProgressBar,
  IonRouterLink,
  IonToolbar,
} from "@ionic/react";
import Cta from "../../Cta";

interface FuncProps {
  handleProgress: () => void;
}

const Pain4: React.FC<FuncProps> = (props) => {
  return (
      <IonContent className="ion-padding ion-margin-top">
        <h2
          className="ion-text-center"
          style={{ width: "80%", marginLeft: "10%", marginTop: "50%" }}
        >
          Of course it hurts… It comes from __________ (trigger). Of course I
          react, I am protecting myself from ______________ (pain). I know now,
          I know why, this MAKES SENSE!
        </h2>
          <IonButton color="primary" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
      </IonContent>
  );
};

export default Pain4;
