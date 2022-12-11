import {
  IonHeader,
  IonContent,
  IonPage,
  IonButton,
  IonProgressBar,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonRouterLink,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Cta from "../components/Cta";
import { useEmotionsStore } from "../features/store";

const Emotion: React.FC = () => {
  const addEmotion = useEmotionsStore((state) => state.addEmotion);
  const emotionRef = React.useRef<HTMLIonSelectElement>(null);

  const handleAddEmotion = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    addEmotion(emotionRef.current?.value);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Cta />
          <IonProgressBar
            className="ion-margin-top"
            value={0.4}
          ></IonProgressBar>
        </IonToolbar>
      </IonHeader>

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

        <IonRouterLink routerLink="action">
          <IonButton onClick={(e) => handleAddEmotion(e)} color="light" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Emotion;
