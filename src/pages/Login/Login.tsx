import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import ForgetModal from "../../components/ForgetModal/ForgetModal";
import "../Login/Login.css";

const Login: React.FC = () => {
  const [forgetModal, setForgetModal] = useState({ isOpen: false });

  const onModalClose = () => {
    setForgetModal({ isOpen: false });
  };

  return (
    <IonPage>
      <IonContent class="background">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size-sm="12" size-md="4" size-lg="4">
              <div className="login-form">
                <IonRow className="ion-text-center">
                  <IonCol className="login-logo">
                    <img
                      src={require("../../assets/images/login_avatar.jpg")}
                      alt="Ionic logo"
                    />
                    <h1>
                      TIGER
                      <IonText color="warning">HRM</IonText>
                    </h1>
                  </IonCol>
                </IonRow>

                <form>
                  <IonList>
                    <IonItem>
                      <IonLabel position="stacked" color="dark">
                        Email
                      </IonLabel>
                      <IonInput
                        name="email"
                        type="email"
                        autocapitalize="off"
                        required
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonLabel position="stacked" color="dark">
                        Password
                      </IonLabel>
                      <IonInput
                        name="password"
                        type="password"
                        required
                      ></IonInput>
                    </IonItem>
                  </IonList>

                  <IonRow className="ion-text-right">
                    <IonCol className="ion-no-margin ion-no-padding">
                      <ForgetModal
                        isOpen={forgetModal.isOpen}
                        onClose={onModalClose}
                      ></ForgetModal>

                      <IonText
                        color="primary"
                        className="login-text"
                        onClick={() => setForgetModal({ isOpen: true })}
                      >
                        Forget Password?
                      </IonText>
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol className="ion-margin-top">
                      <IonButton
                        routerLink="/dashboard"
                        color="primary"
                        className=""
                        shape="round"
                        fill="solid"
                        size="large"
                        expand="block"
                        type="submit"
                      >
                        Sign in
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </form>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
