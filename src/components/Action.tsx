import { useRef } from "react";

import {
  IonHeader,
  IonContent,
  IonPage,
  IonNavLink,
  IonButton,
  IonProgressBar,
  IonItem,
  IonInput,
  IonModal,
  IonList,
  IonLabel,
  IonIcon,
  IonSelect,
  IonItemOption,
} from "@ionic/react";

const Emotion: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonProgressBar className="ion-margin-top" value={0.6}></IonProgressBar>

        <h2 className="ion-text-center">What actions did you take? </h2>

        <IonItem id="open-custom-dialog">
          <IonInput maxlength={20}></IonInput>
        </IonItem>
        {/* <IonButton id="open-custom-dialog" expand="block"></IonButton> */}
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h1>Sample Actions</h1>
            <h3
              onClick={(e) =>
                console.log((e.target as HTMLInputElement).innerText)
              }
            >
              eye rolling
            </h3>
          </div>
        </IonModal>
      </IonHeader>

      <IonContent className="ion-padding ion-margin-top">
        <IonNavLink routerDirection="forward" component={() => <Emotion />}>
          <IonButton
            color="light"
            className="ion-text-center"
            style={{ margin: "10%" }}
          >
            CONTINUE
          </IonButton>
        </IonNavLink>
      </IonContent>
    </IonPage>
  );
};

export default Emotion;
