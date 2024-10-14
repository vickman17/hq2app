// src/components/Menu.tsx

import { IonContent, IonHeader, IonItem, IonMenu, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import menu from './Menu.module.css';
import Theme from './Theme';
import DarkMode from "./DarkMode";
import { useUser } from "../hooks/UserContext";  // Import useUser

interface MenuProps {
    contentId: string;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
}

const Menu: React.FC<MenuProps> = ({ contentId, onMenuOpen, onMenuClose }) => {
    const { userInfo } = useUser();  // Access userInfo from useUser

    return (
        <IonMenu contentId={contentId} onIonDidOpen={onMenuOpen} onIonDidClose={onMenuClose}>
            <IonHeader style={{ display: "flex", height: "20%", border: "0px solid black" }}>
                <div style={{ height: "100%", width: "40%" }}>
                    <img src={userInfo?.image} style={{ width: "100%", height: "100%" }} alt="Profile" />
                </div>
                <div style={{ padding: "5px", width: "60%" }} className={menu.menuheader}>
                    <div style={{ border: "0px solid black", width: "fit-content", marginLeft: "auto" }}>
                        <Theme />
                    </div>
                    <div style={{ border: "0px solid black", marginTop: "2rem", width: "95%", margin: "auto", textAlign: "left" }}>
                        <h1 className={menu.name} style={{ margin: "auto" }}>{userInfo?.firstName} {userInfo?.lastName}</h1>
                    </div>
                </div>
            </IonHeader>
            <IonContent className={menu.menulist} style={{ height: "100vh", paddingTop: "2rem" }}>
                <div style={{ borderBottom: "0px solid black", width: "95%", margin: "auto", paddingBottom: "0.5rem", paddingTop:"2rem" }}>
                    <IonItem style={{ '--background': "transparent" }}>
                        <h1>NOTIFICATION</h1>
                    </IonItem>
                </div>
                <div style={{ borderBottom: "0px solid black", width: "95%", margin: "auto", paddingTop: "2rem", paddingBottom: "0.5rem" }}>
                    <IonItem style={{ '--background': "transparent" }}>
                        <h1>SERVICES</h1>
                    </IonItem>
                </div>
                <div style={{ borderBottom: "0px solid black", width: "95%", margin: "auto", paddingTop: "2rem", paddingBottom: "0.5rem" }}>
                    <IonItem style={{ '--background': "transparent" }}>
                        <h1>INBOX</h1>
                    </IonItem>
                </div>
                <div style={{ borderBottom: "0px solid black", width: "95%", margin: "auto", paddingTop: "2rem", paddingBottom: "0.5rem" }}>
                    <IonItem style={{ '--background': "transparent" }}>
                        <h1>SETTINGS</h1>
                    </IonItem>
                </div>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
