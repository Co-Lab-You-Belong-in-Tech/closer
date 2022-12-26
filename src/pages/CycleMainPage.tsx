import React from "react";
import { IonHeader, IonToolbar, IonPage, IonProgressBar } from "@ionic/react";

import Cta from "../components/Cta";
import IntroImage from "../assets/IntroImage.png";

import Intro2 from "../components/cycles/conflictDeEscalation/Intro2";
import InfoOfConflict from "../components/cycles/conflictDeEscalation/InfoOfConflict";
import Trigger from "../components/cycles/conflictDeEscalation/Trigger";
import Emotion from "../components/cycles/conflictDeEscalation/Emotion";
import Action from "../components/cycles/conflictDeEscalation/Action";
import ActionOfPartner from "../components/cycles/conflictDeEscalation/ActionOfPartner";
import Disclaimer from "../components/cycles/conflictDeEscalation/Disclaimer";
import Pain1 from "../components/cycles/conflictDeEscalation/Pain1";
import Pain2 from "../components/cycles/conflictDeEscalation/Pain2";
import Pain3 from "../components/cycles/conflictDeEscalation/Pain3";
import Pain4 from "../components/cycles/conflictDeEscalation/Pain4";
import PreSummary from "../components/cycles/conflictDeEscalation/PreSummary";
import CycleSummary from "../components/cycles/conflictDeEscalation/CycleSummary";
import Analysis from "../components/cycles/conflictDeEscalation/Analysis";
import Reflection from "../components/cycles/conflictDeEscalation/Reflection";

const CycleMainPage = () => {
  const [buffer, setBuffer] = React.useState(0.0715);
  const [progress, setProgress] = React.useState(0);

  const handleProgress = () => {
    if (Number(progress.toFixed(4)) < 1.001) {
      setProgress((preProgress) => preProgress + 0.0715);
      setBuffer((preBuffer) => preBuffer + 0.0715);
    } else {
      setProgress(0);
      setBuffer(0.0715);
    }
    // setProgress((preProgress) => preProgress + 0.0715);
    // setBuffer((preBuffer) => preBuffer + 0.0715);
  };

  const handleBack = () => {
    setProgress(progress - 0.0715);
  };

  // unmount this component when progress is 1

  const contentSelector = (progress: number) => {
    console.log(progress);
    switch (Number(progress.toFixed(4))) {
      // add cases till 1
      case 0:
        return <Intro2 handleProgress={handleProgress} />;
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
      case 0.5005:
        return <Pain1 handleProgress={handleProgress} />;
      case 0.572:
        return <Pain2 handleProgress={handleProgress} />;
      case 0.6435:
        return <Pain3 handleProgress={handleProgress} />;
      case 0.715:
        return <Pain4 handleProgress={handleProgress} />;
      case 0.7865:
        return <PreSummary handleProgress={handleProgress} />;
      case 0.858:
        return <CycleSummary handleProgress={handleProgress} />;
      case 0.9295:
        return <Analysis handleProgress={handleProgress} />;
      case 1.001:
        return <Reflection setProgress={setProgress} />;
      default:
        return <Intro2 handleProgress={handleProgress} />;
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Cta />
          <IonProgressBar
            className="ion-margin-top"
            buffer={buffer}
            value={progress}
          ></IonProgressBar>
        </IonToolbar>
        {progress === 0 ? (
          <img
            src={IntroImage}
            alt="couple sitting and watching sky"
            className="introImage"
          ></img>
        ) : null}
      </IonHeader>
      {contentSelector(progress)}
    </IonPage>
  );
};

export default CycleMainPage;
