import {
  IonContent,
  IonButton,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React from "react";
import { useEmotionsStore } from "../../../features/store";

interface FuncProps {
  handleProgress?: () => void;
}

const Emotion: React.FC<FuncProps> = (props) => {
  const addEmotion = useEmotionsStore((state) => state.addEmotion);
  const emotionRef = React.useRef<HTMLIonSelectElement>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    addEmotion(emotionRef.current?.value);
    props.handleProgress && props.handleProgress();
  };

  return (
      <IonContent className="ion-padding ion-margin-top">
        <h3>What emotion did you feel? </h3>
        <IonList>
          <IonItem>
            <IonSelect
              ref={emotionRef}
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
