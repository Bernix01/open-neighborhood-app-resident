import React from 'react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

export default function Header(props: { Tittle: React.ReactNode }) {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{props.Tittle}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
