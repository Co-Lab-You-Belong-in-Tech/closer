import React, { useState } from 'react';

import { IonButton, IonContent, IonItem, IonTextarea } from '@ionic/react';

import { usePain2Store } from '../../../features/store';

interface FuncProps {
  handleProgress?: () => void;
}

const Pain2: React.FC<FuncProps> = (props) => {
  const addPain2 = usePain2Store((state) => state.addPain2);
  const [pain, setPain] = useState<string>("");

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (pain) {
      addPain2(pain);
      props.handleProgress && props.handleProgress();
    } else {
      props.handleProgress && props.handleProgress();
    }
  };
  
  return (
    <IonContent className="ion-padding ion-margin-top">
      <h2 className="ion-text-center">
        Where do I hold that pain in my body?{" "} (Optional)
      </h2>
      <IonItem>
        <IonTextarea
        onIonChange={(e) => setPain(e.detail.value!)}
        value={pain}
          placeholder="i.e. twist in the stomach or pressure on the chest etc."
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

export default Pain2;
