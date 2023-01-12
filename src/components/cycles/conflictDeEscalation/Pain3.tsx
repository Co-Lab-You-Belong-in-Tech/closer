import React from "react";

import { IonButton, IonContent, IonInput, IonItem } from "@ionic/react";

import { useStore } from "../../../features/store";

interface FuncProps {
  handleProgress?: () => void;
}

const Pain3: React.FC<FuncProps> = (props) => {
  const addPain3 = useStore((state) => state.addPain3);
  const [pain, setPain] = React.useState<string>("");

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (pain !== "") {
      addPain3(pain);
      props.handleProgress && props.handleProgress();
    } else {
      props.handleProgress && props.handleProgress();
    }
  };

  return (
    <IonContent className="ion-padding ion-margin-top">
      <h2 className="ion-text-center">
        If the pain had words, it would say... (Optional)
      </h2>

      <IonItem>
        <IonInput
          onIonChange={(e) => setPain(e.detail.value!)}
          value={pain}
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
