import React, { useState, useContext } from 'react';
import { useMutation, ClientContext } from 'graphql-hooks';
import {
  IonList,
  IonLabel,
  IonInput,
  IonItem,
  IonText,
  IonRow,
  IonCol,
  IonButton,
  IonCard,
} from '@ionic/react';

const LOGIN_MUTATION = `mutation LoginUser (name: String!, password: String!) {
    loginUser(name: $name, password: $password) {
      token
    }
  }`;

export default function LoginForm() {
  const client = useContext(ClientContext);
  const [loginUserMutation] = useMutation(LOGIN_MUTATION);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (username && password) {
      submit(e);
    } else {
      validar(e);
    }
  }

  async function submit(e: React.FormEvent) {
    // eslint-disable-next-line no-console
    e.preventDefault();
    const { data, error } = await loginUserMutation({
      variables: { username, password },
    });
    if (error) {
      // mensaje de error
    } else {
      const { token } = data.loginUser;
      client.setHeader('Authorization', `Bearer ${token}`);
      // your code to handle token in browser and login redirection
    }
  }

  function validar(e: React.FormEvent) {
    e.preventDefault();
    if (!username) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }

  return (
    <IonCard>
      <form noValidate onSubmit={login}>
        <IonList>
          <IonItem>
            <IonLabel position="stacked" color="primary">
              Username
            </IonLabel>
            <IonInput
              name="username"
              type="email"
              value={username}
              spellCheck={false}
              autocapitalize="off"
              onIonChange={(e) => setUsername(e.detail.value!)}
              required
            />
          </IonItem>

          {usernameError && (
            <IonText color="danger">
              <p className="ion-padding-start">Username is required</p>
            </IonText>
          )}

          <IonItem>
            <IonLabel position="stacked" color="primary">
              Password
            </IonLabel>
            <IonInput
              name="password"
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
          </IonItem>

          {passwordError && (
            <IonText color="danger">
              <p className="ion-padding-start">Password is required</p>
            </IonText>
          )}

          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">
                Login
              </IonButton>
            </IonCol>
          </IonRow>
        </IonList>
      </form>
    </IonCard>
  );
}
