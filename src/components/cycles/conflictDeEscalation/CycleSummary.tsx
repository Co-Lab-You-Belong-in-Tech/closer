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
  const triggers = useStore((state) => state.triggers);
  const emotions = useStore((state) => state.emotions);
  const myactionDisplay = useStore((state) => state.actions);
  const partnerAction = useStore((state) => state.partnerActions);
  const pain1 = useStore((state) => state.pain1);
  const pain2 = useStore((state) => state.pain2);
  const pain3 = useStore((state) => state.pain3);
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
              more I <span className="cycleSummarySpan">{myactionDisplay}</span>
              , the more you{" "}
              <span className="cycleSummarySpan">{partnerAction}</span>. But
              deep down, I feel {pain1}
              <span className="cycleSummarySpan">{pain2}</span> and fear that{" "}
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
