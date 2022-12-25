import { IonContent, IonButton, IonItem, IonTextarea } from "@ionic/react";
import React from "react";
import { usePain2Store } from "../../../features/store";

interface FuncProps {
  handleProgress?: () => void;
}

const Pain2: React.FC<FuncProps> = (props) => {
  const addPain2 = usePain2Store((state) => state.addPain2);
  const painRef = React.useRef<HTMLIonTextareaElement>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    painRef.current?.value && addPain2(painRef.current.value);
    props.handleProgress && props.handleProgress();
  };

  return (
    <IonContent className="ion-padding ion-margin-top">
      <h2 className="ion-text-center">
        Where do I hold that pain in my body?{" "}
      </h2>
      <IonItem>
        <IonTextarea
          ref={painRef}
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
