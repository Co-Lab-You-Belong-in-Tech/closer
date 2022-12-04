import {
  IonHeader,
  IonContent,
  IonPage,
  IonNavLink,
  IonButton,
  IonProgressBar,
  IonItem,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonInput,
  IonRouterLink,
} from "@ionic/react";

import Emotion from "./Emotion";
const Trigger: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonProgressBar className="ion-margin-top" value={0.2}></IonProgressBar>

        <h2 className="ion-text-center">What triggered your reaction?</h2>
      </IonHeader>

      <IonContent className="ion-padding ion-margin-top">
        <IonList>
          <IonRadioGroup value="triggers">
            <IonItem>
              <IonLabel>An eyeroll</IonLabel>
              <IonRadio slot="end" value="An eyeroll"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>A look of annoyance</IonLabel>
              <IonRadio slot="end" value="A look of annoyance"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Negative tone of voice</IonLabel>
              <IonRadio slot="end" value="Negative tone of voice"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Walking away</IonLabel>
              <IonRadio slot="end" value="Walking away"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Being loud</IonLabel>
              <IonRadio slot="end" value="Being loud"></IonRadio>
            </IonItem>
          </IonRadioGroup>
        </IonList>

        <IonItem className="ion-margin-top">
          <IonLabel position="stacked">Other</IonLabel>
          <IonInput></IonInput>
        </IonItem>

        {/* <IonNavLink routerDirection="forward" component={() => <Emotion />}>
          <IonButton
            color="light"
            className="ion-text-center"
            style={{ margin: "10%" }}
          >
            CONTINUE
          </IonButton>
        </IonNavLink> */}
        <IonRouterLink routerLink="emotion">
          <IonButton
            color="light"
            className="ion-text-center"
            style={{ margin: "10%" }}
          >
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Trigger;
