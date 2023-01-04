import { IonContent } from '@ionic/react';

import Cover from '../../assets/Cover.png';

const Splash = () => {
  return (
    <IonContent fullscreen className="ion-align-self-center">
      <img
        src={Cover}
        alt="cover page for Closer App"
        style={{
          height: "100vh",
          width: "100vw",
          objectFit: "cover",
        }}
      ></img>
    </IonContent>
  );
};

export default Splash;
