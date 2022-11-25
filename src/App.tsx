import {
  IonApp,
  setupIonicReact,
  IonImg,
  IonHeader,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonCard,
  IonIcon,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import { arrowForwardOutline, logoGoogle } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp className="ion-padding">
      <IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle style={{ height: "200px" }}>
              Logo goes here
            </IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow>
            <h1 className="ion-text-left ion-font-weight-800">Sign up</h1>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem style={{ border: "2px black solid" }}>
                <IonLabel position="floating">Email address</IonLabel>
                <IonInput type="email"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem style={{ border: "2px black solid" }}>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="block" color="dark" size="large">
                Sign Up
                <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-top">
            <IonCol>
              <IonButton expand="block" color="dark" size="large">
                Try out as guest
                <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="ion-text-center ion-margin-top">
            <IonCol>
              <IonIcon icon={logoGoogle} size="large"></IonIcon>
            </IonCol>
            <IonCol>
              <IonIcon icon={logoGoogle} size="large"></IonIcon>
            </IonCol>
            <IonCol>
              <IonIcon icon={logoGoogle} size="large"></IonIcon>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <h5 className="ion-text-center">
                Already a User? <a href="#"> Login.</a>
              </h5>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
