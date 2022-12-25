import {
  IonContent,
  IonButton,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

interface FuncProps {
  handleProgress?: () => void;
}

const PreSummary: React.FC<FuncProps> = (props) => {
  return (
    <IonContent className="ion-padding">
      <IonText color="dark" className="ion-text-center">
        <h2 className="ion-padding">
          {" "}
          You are doing well ! Now we are running up the summary for you...
        </h2>
      </IonText>
      <IonGrid>
        <IonRow>
          <IonCol className="ion-text-center loader"></IonCol>
        </IonRow>
      </IonGrid>
      <IonButton
        onClick={() => props.handleProgress!()}
        color="primary"
        className="ion-text-center disclaimerContinue buttonStyle"
      >
        CONTINUE
      </IonButton>
    </IonContent>
  );
};

export default PreSummary;
