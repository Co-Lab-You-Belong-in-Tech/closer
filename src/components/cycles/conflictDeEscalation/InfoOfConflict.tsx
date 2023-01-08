import React from 'react';

import {
    IonButton, IonContent, IonDatetime, IonDatetimeButton, IonInput, IonItem, IonLabel, IonModal,
    IonRange, IonText
} from '@ionic/react';

// import store
import { useStore } from '../../../features/store';

import { useShowToast } from '../../../hooks/useShowToast';

interface FuncProps {
  handleProgress?: () => void;
}

const InfoOfConflict: React.FC<FuncProps> = (props) => {
  const addConflict = useStore((state) => state.addConflict);
  const showToast = useShowToast();
  // TODO: fix this to work with the new useObjEmptyValidate
  const [conflictObj, setConflictObj] = React.useState<{
    name: string;
    date: string | string[];
    intensity: string;
  }>({
    name: "",
    date: "",
    intensity: "",
  });  

  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // check if all fields are filled
    if (conflictObj.name && conflictObj.date && conflictObj.intensity) {
      addConflict(conflictObj);
      props.handleProgress && props.handleProgress();
    } else {
      showToast("Please fill all fields", "warning");
    }

  };

  return (
    <IonContent className="ion-padding">
      <IonText>
        <h2> Tell us more about the conflict</h2>
      </IonText>

      <IonItem>
        <div className="conflictName">
          <IonLabel position="stacked">Name of the conflict</IonLabel>
          <IonInput 
            type="text"
            onIonChange={(e) => {
              setConflictObj({ ...conflictObj, name: e.detail.value! });
            }}
          />
        </div>
      </IonItem>

      <div className="ion-margin">
        <IonLabel position="stacked">When did it happen?</IonLabel>
        <IonDatetimeButton
          datetime="datetime"
          className="ion-margin-top"
        ></IonDatetimeButton>
        <IonModal keepContentsMounted={true}>
          <IonDatetime
            id="datetime"
            presentation="date"
            // preferWheel={true}
            onIonChange={(e) => {
              setConflictObj({ ...conflictObj, date: e.detail.value! });
            }}
          ></IonDatetime>
        </IonModal>
      </div>

      <div className="ion-margin">
        <IonLabel position="stacked">Intensity Level</IonLabel>
        <IonRange
          ticks={true}
          snaps={true}
          min={0}
          max={5}
          pin={true}
          defaultValue={0}
          onIonChange={(e) => {
            setConflictObj({ ...conflictObj, intensity: e.detail.value!.toString() });
          }}
          className="ionRange"
        ></IonRange>
        <IonLabel>low</IonLabel>
        <IonLabel style={{ marginLeft: "79%" }}>High</IonLabel>
      </div>

      <IonButton
        onClick={(e) => handleClick(e)}
        color="primary"
        className="ion-text-center buttonStyle"
      >
        CONTINUE
      </IonButton>
    </IonContent>
  );
};

export default InfoOfConflict;
