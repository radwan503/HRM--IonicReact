import { IonButton, IonContent, IonPage, IonText } from "@ionic/react";
import React from "react";

const DashBoard: React.FC = () => {
  return (
    <IonPage>
      <IonText className="ion-text-center">
        <h1>Welcome To Dashbord</h1>
        <p color="success">You Have Logging successfully</p>
      </IonText>
      <IonContent className="ion-text-center">
        <IonButton className="primary" routerLink="/">
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default DashBoard;
