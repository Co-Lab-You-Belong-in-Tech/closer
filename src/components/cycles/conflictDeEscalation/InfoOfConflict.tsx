import React, { useRef } from 'react';

import {
    IonButton, IonContent, IonDatetime, IonDatetimeButton, IonInput, IonItem, IonLabel, IonModal,
    IonRange, IonText
} from '@ionic/react';

// import store
import { useConflictsStore } from '../../../features/store';

import { useShowToast } from '../../../hooks/useShowToast';

// import custom hooks
import { useObjEmptyValidate } from '../../../hooks/useObjValidate';

interface FuncProps {
  handleProgress?: () => void;
}

const InfoOfConflict: React.FC<FuncProps> = (props) => {
  const addConflict = useConflictsStore((state) => state.addConflict);
  const conflictName = useRef<HTMLIonInputElement>(null);
  const conflictDate = useRef<HTMLIonDatetimeElement>(null);
  const conflictIntensity = useRef<HTMLIonRangeElement>(null);

  const showToast = useShowToast();
  const {disabled, validate} = useObjEmptyValidate();
  const [conflictObj, setConflictObj] = React.useState<{
    name: string;
    date: string | string[];
    intensity: string;
  }>({
    name: "",
    date: "",
    intensity: "",
  });

  const [disableButton, setDisableButton] = React.useState<boolean>(true);
  
  // useObjEmptyValidate(conflictObj, setDisableButton);


  const handleClick = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // check if all fields are filled
    if (conflictObj.name && conflictObj.date && conflictObj.intensity) {
      addConflict(conflictObj);
      props.handleProgress && props.handleProgress();
    } else {
      showToast("Please fill all fields", "danger");
    }

  };

  // const handleInput = (e: any) => {
  //   e.preventDefault();
  //   // TODO: fix this to work with the new objEmptyValidate
  //   // setConflictObj({ ...conflictObj, name: e.detail.value! });
  //   // if (conflictObj.name && conflictObj.date && conflictObj.intensity) {
  //   //   setDisableButton(false);
  //   // }

  //   // use custom hook to check if all fields are filled
  //   validate(conflictObj);

  //   console.log(conflictObj);
  // };

  return (
    <IonContent className="ion-padding">
      <IonText>
        <h2> Tell us more about the conflict</h2>
      </IonText>

      <IonItem>
        <div className="conflictName">
          <IonLabel position="stacked">Name of the conflict</IonLabel>
          <IonInput 
            // ref={conflictName}
            type="text"
            onIonChange={(e) => {
              setConflictObj({ ...conflictObj, name: e.detail.value! });
              // objEmptyValidate(conflictObj) ? setDisableButton(true) : setDisableButton(false);
              // handleInput(e);
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
            // ref={conflictDate}
            id="datetime"
            presentation="date"
            // preferWheel={true}
            onIonChange={(e) => {
              setConflictObj({ ...conflictObj, date: e.detail.value! });
              // objEmptyValidate(conflictObj) ? setDisableButton(true) : setDisableButton(false);
              // handleInput(e);
            }}
          ></IonDatetime>
        </IonModal>
      </div>

      <div className="ion-margin">
        <IonLabel position="stacked">Intensity Level</IonLabel>
        <IonRange
          // ref={conflictIntensity}
          ticks={true}
          snaps={true}
          min={0}
          max={5}
          pin={true}
          defaultValue={0}
          onIonChange={(e) => {
            setConflictObj({ ...conflictObj, intensity: e.detail.value!.toString() });
            // objEmptyValidate(conflictObj) ? setDisableButton(true) : setDisableButton(false);
            // console.log(conflictObj);
            // handleInput(e);
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
        // disabled={disabled}
      >
        CONTINUE
      </IonButton>
    </IonContent>
  );
};

export default InfoOfConflict;
