import { useStore } from "../../../features/store";

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  // IonItem,
  // IonLabel,
  IonList,
  // IonRadio,
  IonRadioGroup,
} from "@ionic/react";

interface FuncProps {
  handleProgress?: () => void;
}

const ShareWithPartner: React.FC<FuncProps> = (props) => {
  const triggers = useStore((state) => state.triggers);
  const emotions = useStore((state) => state.emotions);
  const myactionDisplay = useStore((state) => state.actions);
  const partnerAction = useStore((state) => state.partnerActions);
  const pain1 = useStore((state) => state.pain1);
  // const pain2 = useStore((state) => state.pain2);
  const pain3 = useStore((state) => state.pain3);
  return (
    <>
      <header>
        <h2 className="ion-padding-start">Share with Your Partner </h2>
      </header>

      <IonContent className="ion-padding">
        <p className="" style={{ fontSize: "18px" }}>
          It’s important to communicate with your partner! Think about creative
          ways to share the insights to your partner, such as:
        </p>
        <div>
          <IonList>
            <IonRadioGroup>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  paddingInline: "1px",
                }}
              >
                <div
                  // lines="none"
                  className="shareWithPartner"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "#A982FF",
                    border: "2px #A982FF solid",
                    marginTop: "30px",
                    flexBasis: "45%",
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <h5>Sticky Note</h5>
                  {/* <IonRadio
                    mode="ios"
                    slot="end"
                    value="Sticky Note"
                    color="black"
                  ></IonRadio> */}
                </div>

                <div
                  // lines="none"
                  className="shareWithPartner orange ion-margin-start"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "#FF8F3D",
                    border: "2px #FF8F3D solid",
                    marginTop: "30px",
                    flexBasis: "45%",
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <h5>Send a text</h5>
                  {/* <IonRadio
                    mode="ios"
                    slot="end"
                    value="Send a text"
                    color="black"
                  ></IonRadio> */}
                </div>

                <div
                  // lines="none"
                  className="shareWithPartner orange"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "#FF8F3D",
                    border: "2px #FF8F3D solid",
                    marginTop: "30px",
                    flexBasis: "45%",
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <h5>Make a Call</h5>
                  {/* <IonRadio
                    mode="ios"
                    slot="end"
                    value="Voice/Video Call"
                    color="black"
                  ></IonRadio> */}
                </div>

                <div
                  // lines="none"
                  className="shareWithPartner ion-margin-start"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "#A982FF",
                    border: "2px #A982FF solid",
                    marginTop: "30px",
                    flexBasis: "45%",
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <h5>Talk It out</h5>
                  {/* <IonRadio
                    mode="ios"
                    slot="end"
                    value="Talk It out"
                    color="black"
                  ></IonRadio> */}
                </div>
              </div>
            </IonRadioGroup>
          </IonList>
        </div>

        <IonCard style={{ background: "#F8F8F8", marginBottom: "20%" }}>
          <IonCardHeader>
            <IonCardContent>
              When <span className="cycleSummarySpan"> {triggers}</span>{" "}
              happens, I feel{" "}
              <span className="cycleSummarySpan">{emotions}</span>, and I{" "}
              <span className="cycleSummarySpan"> {myactionDisplay}</span>. The
              more I pursue , the more you{" "}
              <span className="cycleSummarySpan">{partnerAction}</span>. But
              deep down, I feel
              <span className="cycleSummarySpan">{pain1}</span> and fear that{" "}
              <span className="cycleSummarySpan"> {pain3}</span>.
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonButton
          onClick={() => props.handleProgress!()}
          color="primary"
          className="ion-text-center buttonStyle sharePageButton"
        >
          CONTINUE
        </IonButton>
      </IonContent>
    </>
  );
};

export default ShareWithPartner;
