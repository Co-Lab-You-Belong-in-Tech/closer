import {
  IonButtons,
  IonBackButton,
  IonIcon,
  IonButton,
  IonRouterLink,
  useIonToast,
} from "@ionic/react";
import { close } from "ionicons/icons";

const Cta: React.FC = () => {
  const [present] = useIonToast();
  const presentToast = (position: "top" | "middle" | "bottom") => {
    present({
      message: "Backing to Dashboard",
      duration: 600,
      position: position,
    });
  };
  return (
    <>
      <IonButtons>
        <IonBackButton />
      </IonButtons>
      <IonRouterLink routerLink="dashboard">
        <IonButton
          className="cta"
          color="light"
          size="small"
          onClick={() => presentToast("top")}
        >
          <IonIcon icon={close} color="dark"></IonIcon>
        </IonButton>
      </IonRouterLink>
    </>
  );
};

export default Cta;
