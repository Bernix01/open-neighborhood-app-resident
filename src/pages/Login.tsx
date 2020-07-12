import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  return (
    <IonPage>
      <Header Tittle="Login" />
      <IonContent>
        <LoginForm />
      </IonContent>
    </IonPage>
  );
};
export default Login;
