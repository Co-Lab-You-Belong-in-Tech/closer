import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
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
              {/* 
              Ingrid's new copywriting for video recording 

              When dirty dishes in the sink happens, I get annoyed, and I criticize you. The more I pursue, the more you sulk. But deep down, I feel insecure and fear that I'm not good enough for you . */}
              When{" "}
              <span className="cycleSummarySpan">
                {" "}
                dirty dishes in the sink{" "}
              </span>
              happens, I feel
              <span className="cycleSummarySpan">annoyed</span> , and I
              <span className="cycleSummarySpan">criticized you</span>. The more
              I<span className="cycleSummarySpan">pursue</span>, the more you{" "}
              <span className="cycleSummarySpan">sulk</span>. But deep down, I
              feel <span className="cycleSummarySpan">insecure</span>and fear
              that{" "}
              <span className="cycleSummarySpan">
                {" "}
                I'm not good enough for you
              </span>
              .
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
