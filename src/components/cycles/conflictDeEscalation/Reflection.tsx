import { close } from "ionicons/icons";
import { useState } from "react";
import smile from "../../../assets/smile.png";
import neutral from "../../../assets/neutral.png";
import sad from "../../../assets/sad.png";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRouterLink,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";

import { useFirstTimeStore } from "../../../features/store";

interface FuncProps {
  setProgress?: React.Dispatch<React.SetStateAction<number>>;
}

const Reflection: React.FC<FuncProps> = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const setFirstTime = useFirstTimeStore((state) => state.setFirstTime);

  const handleClick = () => {
    props.setProgress && props.setProgress(0);
    setFirstTime(false);
  };
  return (
    <IonContent className="ion-padding">
      <IonText>
        <h2> How are you feeling after this session?</h2>
      </IonText>

      <IonGrid>
        <IonRow>
          <IonCol>
            {/* <div className="rate">
              <input type="radio" id="star5" name="rate" value="5" />
              <label htmlFor="star5" title="text">
              </label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label htmlFor="star4" title="text">
              </label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label htmlFor="star3" title="text">
              </label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label htmlFor="star2" title="text">
              </label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label htmlFor="star1" title="text">
              </label>
            </div> */}
            <div className="rating">
              <div>
                <input type="checkbox" id="btnControl" />
                <label className="btn" htmlFor="btnControl">
                  <img src={smile} alt="" />
                </label>
              </div>
              <div>
                <input type="checkbox" id="btnControl2" />
                <label className="btn" htmlFor="btnControl2">
                  <img src={neutral} alt="" />
                </label>
              </div>
              <div>
                <input type="checkbox" id="btnControl3" />
                <label className="btn" htmlFor="btnControl3">
                  <img src={sad} alt="" />
                </label>
              </div>
            </div>
          </IonCol>
        </IonRow>
        <IonRow className="ion-margin-top">
          {" "}
          <h2>Reflection</h2>
        </IonRow>
      </IonGrid>

      <IonItem>
        <IonLabel position="stacked">
          What is one way that your partner<br></br> can make it better next
          time?
        </IonLabel>
        <IonInput placeholder="Type here" className="ion-margin-top"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">
          What is one way that you can make it <br></br> better next time?
        </IonLabel>
        <IonInput placeholder="Type here" className="ion-margin-top"></IonInput>
      </IonItem>

      <IonRouterLink routerLink="dashboard/endOfCycle">
        <IonButton
          routerDirection="root"
          onClick={() => handleClick()}
          color="primary"
          className="ion-text-center buttonStyle"
        >
          SAVE AND CLOSE
        </IonButton>
      </IonRouterLink>

      {/* Modal copied from Intro component */}
      <IonModal
        isOpen={isOpen}
        initialBreakpoint={0.5}
        breakpoints={[0, 0.5, 0.75, 1.0]}
      >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>
                <IonIcon icon={close} slot="end" color="dark"></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>
            To help you furthuer understand your feelings, we’ve designed
            specfic Refelction questions for you.
            <br></br>
            <br></br>
            We are almost done! You should be proud of your progress so far. Now
            for the final stage of this session, you will be answering two
            reflection questions. - What is one way that your partner can make
            it better next time? - What is one way that you can make it better
            next time?
            <br></br>
            <br></br>
            These questions require a great deal of introspection and emotional
            energy, so take your time with them. To figure out what is happening
            within yourself is difficult and explaining what may be deeply
            personal experiences to your partner may make you feel scared and
            vulnerable. But remember that this is normal, and that it will be
            worth it.
          </p>
          <IonButton
            size="large"
            className="ion-text-center buttonStyle"
            onClick={() => setIsOpen(false)}
            color="primary"
          >
            Continue
          </IonButton>
        </IonContent>
      </IonModal>
    </IonContent>
  );
};

export default Reflection;
