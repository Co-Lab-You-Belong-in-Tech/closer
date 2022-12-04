import {
  IonHeader,
  IonContent,
  IonPage,
  IonButton,
  IonProgressBar,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonRouterLink,
} from "@ionic/react";

const Emotion: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonProgressBar className="ion-margin-top" value={0.4}></IonProgressBar>

        <h2 className="ion-text-center">What emotion did you feel? </h2>
      </IonHeader>

      <IonContent className="ion-padding ion-margin-top">
        <IonList>
          <IonItem>
            <IonSelect
              placeholder="Select all Triggers that apply"
              multiple={true}
            >
              <IonSelectOption value="An eyeroll">An eyeroll</IonSelectOption>
              <IonSelectOption value="A look of annoyance">
                A look of annoyance
              </IonSelectOption>
              <IonSelectOption value="Negative tone of voiceananas">
                Negative tone of voice
              </IonSelectOption>
              <IonSelectOption value="Walking away">
                Walking away
              </IonSelectOption>
              <IonSelectOption value="Being loud">Being loud</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        <IonRouterLink routerLink="action">
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

export default Emotion;
