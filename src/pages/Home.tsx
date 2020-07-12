import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header Tittle="Home" />
      <IonContent>
        <h3>estas en el Home</h3>
      </IonContent>
    </IonPage>
  );
};
export default Home;
