import React from 'react';

import { IonButton, IonContent, IonInput, IonItem } from '@ionic/react';

import { usePain3Store } from '../../../features/store';

interface FuncProps {
  handleProgress?: () => void;
}

const Pain3: React.FC<FuncProps> = (props) => {
  const addPain3 = usePain3Store((state) => state.addPain3);
  const painRef = React.useRef<HTMLIonInputElement>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    painRef.current?.value && addPain3(painRef.current.value.toString());
    props.handleProgress && props.handleProgress();
  };

  return (
    <IonContent className="ion-padding ion-margin-top">
      <h3
        className="ion-text-center"
        style={{ width: "55%", marginLeft: "22.5%", marginTop: "50%" }}
      >
        If the pain had words, it would say...{" "}
      </h3>

      <IonItem>
        <IonInput
          ref={painRef}
          placeholder='i.e.  "I will always be alone."'
          className="ion-text-center"
        ></IonInput>
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

export default Pain3;
