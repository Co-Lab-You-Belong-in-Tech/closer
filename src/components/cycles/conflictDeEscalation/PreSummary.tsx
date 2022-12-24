import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonPage,
  IonRouterLink,
  IonButton,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonProgressBar,
} from "@ionic/react";
import Cta from "../../Cta";

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
        <IonRouterLink routerLink="cycleSummary">
          <IonButton
            onClick={() => props.handleProgress!()}
            color="primary"
            className="ion-text-center disclaimerContinue buttonStyle"
          >
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
  );
};

export default PreSummary;
