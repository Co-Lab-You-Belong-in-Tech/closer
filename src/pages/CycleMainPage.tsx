import React from 'react'
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonPage,
  IonRouterLink,
  IonButton,
  IonProgressBar,
  IonText,
} from "@ionic/react";

import Cta from "../components/Cta";
import IntroImage from "../assets/IntroImage.png";

import Intro2 from '../components/cycles/conflictDeEscalation/Intro2';
import InfoOfConflict from '../components/cycles/conflictDeEscalation/InfoOfConflict';
import Trigger from '../components/cycles/conflictDeEscalation/Trigger';
import Emotion from '../components/cycles/conflictDeEscalation/Emotion';
import Action from '../components/cycles/conflictDeEscalation/Action';
import ActionOfPartner from '../components/cycles/conflictDeEscalation/ActionOfPartner';
import Disclaimer from '../components/cycles/conflictDeEscalation/Disclaimer';
import Pain1 from '../components/cycles/conflictDeEscalation/Pain1';
import Pain2 from '../components/cycles/conflictDeEscalation/Pain2';
import Pain3 from '../components/cycles/conflictDeEscalation/Pain3';
import Pain4 from '../components/cycles/conflictDeEscalation/Pain4';
import PreSummary from '../components/cycles/conflictDeEscalation/PreSummary';




const CycleMainPage = () => {
  const [buffer, setBuffer] = React.useState(0.0715);
  const [progress, setProgress] = React.useState(0);

  const handleProgress = () => {
    setProgress((preProgress) => preProgress + 0.0715);
    setBuffer((preBuffer) => preBuffer + 0.0715);
    console.log(progress);
    console.log(buffer);
  };

  const handleBack = () => {
    setProgress(progress - 0.0715);
  };

  const contentSelector = (progress: number) => {
    switch (progress) {
      // add cases till 1
      case 0.0715:
        return <InfoOfConflict handleProgress={handleProgress} />;
      case 0.143:
        return <Trigger handleProgress={handleProgress} />;
      case 0.2145:
        return <Emotion handleProgress={handleProgress} />;
      case 0.286:
        return <Action handleProgress={handleProgress} />;
      case 0.3575:
        return <ActionOfPartner handleProgress={handleProgress} />;
      case 0.429:
        return <Disclaimer handleProgress={handleProgress} />;
      case 0.5:
        return <Pain1 handleProgress={handleProgress} />;
      case 0.5715:
        return <Pain2 handleProgress={handleProgress} />;
      case 0.643:
        return <Pain3 handleProgress={handleProgress} />;
      case 0.7145:
        return <Pain4 handleProgress={handleProgress} />;
      case 0.786:
        return <PreSummary handleProgress={handleProgress} />;
      case 0.8575:
        return <Intro2 handleProgress={handleProgress} />;
      case 0.929:
        return <Intro2 handleProgress={handleProgress} />;
      case 1:
        return <Intro2 handleProgress={handleProgress} />;
      default:
        return <Intro2 handleProgress={handleProgress} />;
    }
  };



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Cta />
          <IonProgressBar className="ion-margin-top" buffer={buffer}  value={progress}></IonProgressBar>
        </IonToolbar>
        { progress === 0 ? (
          <img
            src={IntroImage}
            alt="couple sitting and watching sky"
            className="introImage"
          ></img>
        ) : ( null ) }
      </IonHeader>
      <>
      {      console.log("Rendered")}
      </>
      {contentSelector(progress)}
    </IonPage>
  )
}

export default CycleMainPage