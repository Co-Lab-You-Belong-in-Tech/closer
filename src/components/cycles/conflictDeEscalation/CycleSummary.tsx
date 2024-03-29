import { useStore } from "../../../features/store";
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
  // get last item from store items
  const triggers = useStore((state) => state.triggers).slice(-1)[0];
  const emotions = useStore((state) => state.emotions).slice(-1)[0];
  const myactionDisplay = useStore((state) => state.actions).slice(-1)[0];
  const partnerAction = useStore((state) => state.partnerActions).slice(-1)[0];
  const pain1 = useStore((state) => state.pain1).slice(-1)[0];
  const pain3 = useStore((state) => state.pain3).slice(-1)[0];

  return (
    <>
      <IonHeader>
        <h2 className="ion-padding-start">Cycle summary </h2>

        <IonCard style={{ background: "#F8F8F8" }}>
          <IonCardHeader>
            <IonCardContent>
              When <span className="cycleSummarySpan"> {triggers}</span>{" "}
              happens, I feel{" "}
              <span className="cycleSummarySpan">{emotions}</span>, and I{" "}
              <span className="cycleSummarySpan"> {myactionDisplay}</span>. The
              more I pursue , the more you{" "}
              <span className="cycleSummarySpan">{partnerAction}</span>. But
              deep down, I feel{" "}
              <span className="cycleSummarySpan">{pain1}</span> and fear that{" "}
              <span className="cycleSummarySpan"> {pain3}</span>.
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonHeader>

      <IonContent>
        <IonButton
          onClick={() => props.handleProgress!()}
          color="primary"
          className="buttonStyle"
        >
          CONTINUE
        </IonButton>
      </IonContent>
    </>
  );
};

export default CycleSummary;
