import { useIonToast } from '@ionic/react';

export const useShowToast = () => {
    const [present] = useIonToast();

    const showToast = (message: string, type: string) => {
        present({
            message,
            duration: 2000,
            color: type,
            position: "top",
        });
    }

    return showToast;
}
