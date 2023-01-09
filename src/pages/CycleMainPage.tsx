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
import Pain2 from "../components/cycles/conflictDeEscalation/Pain2";
import Pain3 from "../components/cycles/conflictDeEscalation/Pain3";
// import Pain4 from "../components/cycles/conflictDeEscalation/Pain4";
import PreSummary from "../components/cycles/conflictDeEscalation/PreSummary";
import Reflection from "../components/cycles/conflictDeEscalation/Reflection";
import Trigger from "../components/cycles/conflictDeEscalation/Trigger";
import ShareWithPartner from "../components/cycles/ShareWithPartner";

const CycleMainPage = () => {
  const [progress, setProgress] = React.useState<number>(0);

  const handleProgress = () => {
    if (Number(progress.toFixed(2)) < 1.0) {
      setProgress((preProgress) => preProgress + 0.07);
    } else {
      setProgress(0);
    }
  };

  const contentSelector = (progress: number) => {
    console.log(progress);
    switch (Number(progress.toFixed(2))) {
      // add cases till 1
      case 0:
        return <Intro2 handleProgress={handleProgress} />;
      case 0.07:
        return <InfoOfConflict handleProgress={handleProgress} />;
      case 0.14:
        return <Trigger handleProgress={handleProgress} />;
      case 0.21:
        return <Emotion handleProgress={handleProgress} />;
      case 0.28:
        return <Action handleProgress={handleProgress} />;
      case 0.35:
        return <ActionOfPartner handleProgress={handleProgress} />;
      case 0.42:
        return <Disclaimer handleProgress={handleProgress} />;
      case 0.49:
        return <Pain1 handleProgress={handleProgress} />;
      case 0.56:
        return <Pain2 handleProgress={handleProgress} />;
      case 0.63:
        return <Pain3 handleProgress={handleProgress} />;
      case 0.7:
        // return <Pain4 handleProgress={handleProgress} />;
        return <PreSummary handleProgress={handleProgress} />;
      case 0.77:
        return <CycleSummary handleProgress={handleProgress} />;
      case 0.84:
        return <ShareWithPartner handleProgress={handleProgress} />;
      case 0.91:
        return <Reflection setProgress={setProgress} />;
      // case 0.98:
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
            <img
              src={IntroImage}
              alt="couple sitting and watching sky"
              className="introImage"
            ></img>
          </div>
        ) : null}
      </IonHeader>
      {contentSelector(progress)}
    </IonPage>
  );
};

export default CycleMainPage;
