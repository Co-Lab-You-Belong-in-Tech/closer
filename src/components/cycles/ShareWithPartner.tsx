import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
} from "@ionic/react";

interface FuncProps {
  handleProgress?: () => void;
}

const ShareWithPartner: React.FC<FuncProps> = (props) => {
  return (
    <>
      <header>
        <h2 className="ion-padding">Share with Your Partner </h2>
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
                <IonItem
                  lines="none"
                  className="shareWithPartner"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "#A982FF",
                    border: "2px #A982FF solid",
                    marginTop: "30px",
                    flexBasis: "45%",
                    fontSize: "12px",
                  }}
                >
                  <IonLabel className="shareOption">Sticky Note</IonLabel>
                  <IonRadio
                    mode="ios"
                    slot="end"
                    value="Sticky Note"
                    color="black"
                  ></IonRadio>
                </IonItem>

                <IonItem
                  lines="none"
                  className="shareWithPartner orange ion-margin-start"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "#FF8F3D",
                    border: "2px #FF8F3D solid",
                    marginTop: "30px",
                    flexBasis: "45%",
                    fontSize: "12px",
                  }}
                >
                  <IonLabel>Send a text</IonLabel>
                  <IonRadio
                    mode="ios"
                    slot="end"
                    value="Send a text"
                    color="black"
                  ></IonRadio>
                </IonItem>

                <IonItem
                  lines="none"
                  className="shareWithPartner orange"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "#FF8F3D",
                    border: "2px #FF8F3D solid",
                    marginTop: "30px",
                    flexBasis: "45%",
                    fontSize: "12px",
                  }}
                >
                  <IonLabel>Make a Call</IonLabel>
                  <IonRadio
                    mode="ios"
                    slot="end"
                    value="Voice/Video Call"
                    color="black"
                  ></IonRadio>
                </IonItem>

                <IonItem
                  lines="none"
                  className="shareWithPartner ion-margin-start"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "#A982FF",
                    border: "2px #A982FF solid",
                    marginTop: "30px",
                    flexBasis: "45%",
                    fontSize: "12px",
                  }}
                >
                  <IonLabel>Talk It out</IonLabel>
                  <IonRadio
                    mode="ios"
                    slot="end"
                    value="Talk It out"
                    color="black"
                  ></IonRadio>
                </IonItem>
              </div>
            </IonRadioGroup>
          </IonList>
        </div>

        <IonCard style={{ background: "#F8F8F8" }}>
          <IonCardHeader>
            <IonCardContent>
              When{" "}
              <span className="cycleSummarySpan">
                {" "}
                dirty dishes in the sink
              </span>{" "}
              happens, I feel <span className="cycleSummarySpan">annoyed</span>,
              and I <span className="cycleSummarySpan"> criticized you</span>.
              The more I <span className="cycleSummarySpan">pursue</span>, the
              more you <span className="cycleSummarySpan">sulk</span>. But deep
              down, I feel <span className="cycleSummarySpan">insecure</span>{" "}
              and fear that{" "}
              <span className="cycleSummarySpan">
                {" "}
                I'm not good enough for you
              </span>
              .
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
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

export default ShareWithPartner;
