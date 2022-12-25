import React, { useState } from "react";

import {
  IonButtons,
  IonBackButton,
  IonIcon,
  IonButton,
  useIonAlert,
} from "@ionic/react";
import { close } from "ionicons/icons";
import { Redirect } from "react-router-dom";

const Cta: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState(false);

  return (
    <>
      <IonButtons>
        <IonBackButton />
      </IonButtons>
      <IonButton
        className="cta"
        fill="clear"
        size="small"
        onClick={() =>
          presentAlert({
            header:
              "Are you sure to return to the dashboard? Exiting now will lose your progress.",

            buttons: [
              {
                text: "No",
              },
              {
                text: "Yes",
                handler: () => {
                  setHandlerMessage(true);
                },
              },
            ],
          })
        }
      >
        <IonIcon icon={close} color="dark"></IonIcon>
      </IonButton>
      {handlerMessage === true && <Redirect to="/" />}
    </>
  );
};

export default Cta;
