import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { IonBackButton, IonButton, IonButtons, IonIcon, useIonAlert } from '@ionic/react';

import backIcon from '../assets/images/chevron-back-circle-outline.svg';
import close from '../assets/images/close-circle-outline.svg';

interface FuncProps {
  setProgress?: React.Dispatch<React.SetStateAction<number>>;
  progress?: number;
}

const Cta: React.FC<FuncProps> = (props) => {
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState(false);

  const handleBack = (e: any) => {
    e.preventDefault();
    props.setProgress && props.setProgress((prevProgress) => prevProgress - 0.07);
  }

  const handleAlert = (e: any) => {
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

  return (
    <IonButtons className="navbar">
      <IonButton
        size="small"
        fill="clear"
        onClick={(e) => handleBack(e)}
        >
          <IonIcon icon={backIcon} color="dark"></IonIcon>
          {/* <IonIcon name=""></IonIcon> */}
        {/* <IonBackButton /> */}
      </IonButton>
      <IonButton
        className="cta"
        fill="clear"
        size="small"
        onClick={(e) => handleAlert(e) }
      >
        <IonIcon icon={close} color="dark"></IonIcon>
      </IonButton>
      {handlerMessage === true && <Redirect to="/" />}
    </IonButtons>
  );
};

export default Cta;
