import QRCode from 'qrcode.react';
import { IonPage, IonText } from '@ionic/react';

const DesktopQRCode: React.FC<{url:string}> = ({url}) => {
  return (
      <IonPage className="ion-padding fancy-page">
        <QRCode value={url} />
        <IonText>
          <h2>
            Current version of the app is not supported on desktop. Please use
            your phone to scan the QR code above.
          </h2>
        </IonText>
      </IonPage>
  )
}

export default DesktopQRCode;