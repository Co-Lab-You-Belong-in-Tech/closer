import React from "react";
import { Redirect } from "react-router-dom";

import { IonHeader, IonPage, IonProgressBar, IonToolbar } from "@ionic/react";

import IntroImage from "../assets/IntroImage.png";
import Cta from "../components/Cta";
import Action from "../components/cycles/conflictDeEscalation/Action";
import ActionOfPartner from "../components/cycles/conflictDeEscalation/ActionOfPartner";
// import Analysis from "../components/cycles/conflictDeEscalation/Analysis";
import CycleSummary from "../components/cycles/conflictDeEscalation/CycleSummary";
import Disclaimer from "../components/cycles/conflictDeEscalation/Disclaimer";
import Emotion from "../components/cycles/conflictDeEscalation/Emotion";
import InfoOfConflict from "../components/cycles/conflictDeEscalation/InfoOfConflict";
import Intro2 from "../components/cycles/conflictDeEscalation/Intro2";
import Pain1 from "../components/cycles/conflictDeEscalation/Pain1";
// import Pain2 from "../components/cycles/conflictDeEscalation/Pain2";
import Pain3 from "../components/cycles/conflictDeEscalation/Pain3";
// import Pain4 from "../components/cycles/conflictDeEscalation/Pain4";
import PreSummary from "../components/cycles/conflictDeEscalation/PreSummary";
import Reflection from "../components/cycles/conflictDeEscalation/Reflection";
import Trigger from "../components/cycles/conflictDeEscalation/Trigger";
import ShareWithPartner from "../components/cycles/conflictDeEscalation/ShareWithPartner";

const CycleMainPage = () => {
  const [progress, setProgress] = React.useState<number>(0);

  const handleProgress = () => {
    if (Number(progress.toFixed(2)) < 1.0) {
      setProgress((preProgress) => preProgress + 0.08);
    } else {
      setProgress(0);
    }
  };

  const contentSelector = (progress: number) => {
    switch (Number(progress.toFixed(2))) {
      // add cases till 1
      case 0:
        return <Intro2 handleProgress={handleProgress} />;
      case 0.08:
        return <InfoOfConflict handleProgress={handleProgress} />;
      case 0.16:
        return <Trigger handleProgress={handleProgress} />;
      case 0.24:
        return <Emotion handleProgress={handleProgress} />;
      case 0.32:
        return <Action handleProgress={handleProgress} />;
      case 0.4:
        return <ActionOfPartner handleProgress={handleProgress} />;
      case 0.48:
        return <Disclaimer handleProgress={handleProgress} />;
      case 0.56:
        return <Pain1 handleProgress={handleProgress} />;
      case 0.64:
        // return <Pain2 handleProgress={handleProgress} />;
        return <Pain3 handleProgress={handleProgress} />;
      case 0.72:
        return <PreSummary handleProgress={handleProgress} />;
      case 0.8:
        return <CycleSummary handleProgress={handleProgress} />;
      // return <Pain4 handleProgress={handleProgress} />;
      case 0.88:
        return <ShareWithPartner handleProgress={handleProgress} />;
      case 0.96:
        return <Reflection setProgress={setProgress} />;
      default:
        return <Redirect to="/" />;
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Cta setProgress={setProgress} progress={progress} />
          <IonProgressBar
            className="ion-margin-top"
            value={progress}
          ></IonProgressBar>
        </IonToolbar>
        {progress === 0 ? (
          <div className="introImageContainer">
            <img src={IntroImage} alt="couple sitting and watching sky"></img>
          </div>
        ) : null}
      </IonHeader>
      {contentSelector(progress)}
    </IonPage>
  );
};

export default CycleMainPage;
