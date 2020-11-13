import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonInput,
  IonList,
  IonRow,
  IonText,
  IonFooter,
} from "@ionic/react";
import React from "react";

const ForgetModal: React.FC<{
  isOpen: boolean;
  onClose: Function;
}> = ({ isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size-sm="12" size-md="12" size-lg="12">
              <IonRow className="ion-text-center">
                <IonCol>
                  <IonText>
                    <h2>Forgot Password</h2>
                    <p>
                      Enter your e-mail address below to reset your password.
                    </p>
                  </IonText>
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
                      spellCheck={false}
                      autocapitalize="off"
                      required
                    ></IonInput>
                  </IonItem>
                </IonList>
                <IonRow className="ion-justify-content-center">
                  <IonCol className="ion-margin-top">
                    <IonButton
                      href="/dashboard"
                      color="danger"
                      className="ion-button-class"
                      shape="round"
                      fill="solid"
                      size="large"
                      expand="block"
                      type="submit"
                    >
                      Submit
                    </IonButton>
                  </IonCol>
                </IonRow>
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      <IonFooter className="ion-padding">
        <IonToolbar>
          <IonButton
            onClick={() => {
              onClose({ cancelled: false });
            }}
          >
            Close Modal
          </IonButton>
          <IonButton
            color="danger"
            onClick={() => {
              onClose({ cancelled: true });
            }}
          >
            Close
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonModal>
  );
};

export default ForgetModal;
