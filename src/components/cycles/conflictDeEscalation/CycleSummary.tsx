import {
  IonHeader,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
} from "@ionic/react";

interface FuncProps {
  handleProgress?: () => void;
}

const CycleSummary: React.FC<FuncProps> = (props) => {
  return (
    <>
      <IonHeader>
        <h2 className="ion-padding">Cycle summary </h2>

        <IonCard>
          <IonCardHeader>
            <IonCardContent>
              When{" "}
              <span className="cycleSummarySpan"> negative tone of voice </span>
              happens, I feel
              <span className="cycleSummarySpan">frustrated</span> , and I{" "}
              <span className="cycleSummarySpan">
                respond in a negative tone.
              </span>{" "}
              The more I<span className="cycleSummarySpan"> speak </span>, the
              more you <span className="cycleSummarySpan"> withdraw </span> .
              But deep down, I'm experiencing{" "}
              <span className="cycleSummarySpan"> pain </span>and am protecting
              myself from{" "}
              <span className="cycleSummarySpan">
                {" "}
                disappointment from my parents.
              </span>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonHeader>

      <IonContent className="ion-padding ion-margin-top">
        <IonButton
          onClick={() => props.handleProgress!()}
          color="primary"
          className="ion-text-center buttonStyle"
        >
          CONTINUE
        </IonButton>
      </IonContent>
    </>
  );
};

export default CycleSummary;
