import React from 'react';

import { IonButton, IonContent, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';

import { useEmotionsStore } from '../../../features/store';

import { useShowToast } from '../../../hooks/useShowToast';

interface FuncProps {
  handleProgress?: () => void;
}

const Emotion: React.FC<FuncProps> = (props) => {
  const addEmotion = useEmotionsStore((state) => state.addEmotion);
  // const emotionRef = React.useRef<HTMLIonSelectElement>(null);
  const [emotion, setEmotion] = React.useState<string[]>([]);

  const showToast = useShowToast();

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (emotion.length > 0) {
      addEmotion(emotion);
      props.handleProgress && props.handleProgress();
    } else {
      showToast('Please select at least one emotion', 'warning');
    }
  };

  return (
    <IonContent className="ion-padding ion-margin-top">
      <h3>What emotion did you feel? </h3>
      <IonList>
        <IonItem>
          <IonSelect
            onIonChange={(e) => {
              setEmotion(e.detail.value!);
            }}
            value={emotion}
            placeholder="Select all Emotions that apply"
            multiple={true}
          >
            <IonSelectOption value="frustrated">Frustrated</IonSelectOption>
            <IonSelectOption value="annoyed">Annoyed</IonSelectOption>
            <IonSelectOption value="numb">Numb</IonSelectOption>
            <IonSelectOption value="helpless">Helpless</IonSelectOption>
            <IonSelectOption value="threatened">Threatened</IonSelectOption>
            <IonSelectOption value="exhausted">Exhausted</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>

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

export default Emotion;
