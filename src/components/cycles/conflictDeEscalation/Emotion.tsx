import React from "react";
import { stockEmotions } from "../../../data/stockEmotions";

import {
  IonButton,
  IonContent,
  IonList,
  IonInput,
  IonRadioGroup,
  IonItem,
  IonLabel,
  IonRadio,
} from "@ionic/react";

import { useStore } from "../../../features/store";

import { useShowToast } from "../../../hooks/useShowToast";

interface FuncProps {
  handleProgress?: () => void;
}

const Emotion: React.FC<FuncProps> = (props) => {
  const addEmotion = useStore((state) => state.addEmotion);
  // const emotionRef = React.useRef<HTMLIonSelectElement>(null);
  const [emotion, setEmotion] = React.useState<string>('');

  const showToast = useShowToast();

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (emotion.length > 0) {
      addEmotion(emotion);
      props.handleProgress && props.handleProgress();
    } else {
      console.log('Select one');
      showToast("Please select at least one emotion", "warning");
    }
  };

  return (
    <IonContent className="ion-padding ion-margin-top">
      <h3>What emotion did you feel? </h3>
      <IonList
        onChange={(e: any) => {
          setEmotion(e.detail.value!);
        }}
      >
        <IonRadioGroup
          onIonChange={(e) => {
            setEmotion(e.detail.value!);
          }}
          value={emotion}
        >
          <div
            style={{
              height: "50vh",
              overflowY: "scroll",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              paddingInline: "1px",
            }}
          >
            {stockEmotions.map((emo) => (
              <IonItem
                style={{
                  border: "2px #A982FF solid",
                  borderRadius: "100px",
                  marginTop: "30px",
                  flexBasis: "49%",
                  fontSize: "12px",
                }}
                key={Array.prototype.indexOf.call(stockEmotions, emo)}
              >
                <IonLabel>{emo}</IonLabel>
                <IonRadio slot="end" value={emo}></IonRadio>
              </IonItem>
            ))}
          </div>
        </IonRadioGroup>
      </IonList>

      <IonItem className="ion-margin-top ion-padding-top">
        <IonLabel position="stacked">Other</IonLabel>
        <IonInput
          type="text"
          onIonChange={(e) => {
            setEmotion(e.target.value!.toString());
          }}
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

export default Emotion;
