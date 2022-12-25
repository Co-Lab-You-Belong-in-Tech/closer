// import { useState } from "react";

import {
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

interface FuncProps {
  handleProgress?: () => void;
}

const Analysis: React.FC<FuncProps> = (props) => {
  return (
      <IonContent className="ion-padding ion-margin-top">
        <h2 className="ion-padding ion-text-center">Analysis </h2>
        <IonGrid>
          <IonRow>
            <h3>It seems like in conflicts, you are a ...</h3>
          </IonRow>
          <IonRow>
            <IonCol>
              <h3
                className="ion-text-center"
                style={{
                  backgroundColor: "lightGreen",
                  padding: "60px 5px",
                  borderRadius: "50%",
                }}
              >
                pursuer
              </h3>
            </IonCol>
            <IonCol className="ion-margin">
              <p>You seek ...</p>
              <p>You feel...</p>
              <p>You fear...</p>
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-top">
            <IonCol>
              <h3 className="ion-text-right">And your partner is a ...</h3>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-margin">
              <p>They feel ...</p>
              <p>They fear...</p>
            </IonCol>
            <IonCol>
              <h3
                className="ion-text-center"
                style={{
                  backgroundColor: "lightpink",
                  padding: "60px 5px",
                  borderRadius: "50%",
                }}
              >
                Withdrawer
              </h3>
            </IonCol>
          </IonRow>
        </IonGrid>

          <IonButton  onClick={() => props.handleProgress!()} color="primary" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
      </IonContent>
  );
};

export default Analysis;
