// import { useState } from "react";

import React, { useState } from 'react';

import { IonButton, IonContent, IonItem, IonTextarea } from '@ionic/react';

import { useStore } from '../../../features/store';

import { useShowToast } from '../../../hooks/useShowToast';

interface FuncProps {
  handleProgress?: () => void;
}

const Pain1: React.FC<FuncProps> = (props) => {
  const addPain1 = useStore((state) => state.addPain1);
  // const painRef = React.useRef<HTMLIonTextareaElement>(null);
  const [pain, setPain] = useState<string>("");

  const showToast = useShowToast();

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (pain) {
      addPain1(pain);
      props.handleProgress && props.handleProgress();
    } else {
      showToast("Please input pain", "warning");
    }
  };

  return (
    <IonContent className="ion-padding ion-margin-top">
      <h3 className="ion-text-center">What is the pain under my reaction? </h3>
      <IonItem>
        <IonTextarea
          // ref={painRef}
          onIonChange={(e) => {
            setPain(e.detail.value!);
          }}
          value={pain}
          className="ion-padding"
          placeholder="i.e. Hurt, loss, grief, loneliness, sadness, heartbreak, vulnerable, fear, confused, lost, etc."
        ></IonTextarea>
      </IonItem>
      <IonButton
        onClick={(e) => handleClick(e)}
        color="primary"
        className="ion-text-center buttonStyle"
      >
        CONTINUE
      </IonButton>
    </IonContent>
  );
};

export default Pain1;
