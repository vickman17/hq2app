import { IonInput, IonHeader, IonMenu, IonPage, IonToolbar, IonContent, IonCard, IonLabel, IonButton, IonMenuButton } from "@ionic/react"
import React, { useEffect, useState } from "react"
import BottomNav from "../components/BottomNav";
import styles from './style/Dashboard.module.css';
import ProfilePics from "../components/ProfilePics";
import Menu from "../components/Menu";
import DarkMode from "../components/DarkMode";
import Theme from "../components/Theme";
import '../theme/variables.css'



const Dashboard: React.FC = () => {
    useEffect(() => {
        document.body.style.overflowX = "hidden";
        document.body.style.fontFamily = 'Varela Round';
    }, [])

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuIsOpen(true);
    }

    const handleMenuClose = () => {
        setMenuIsOpen(false);
    }

    const electrical = './Electricianbg.png'
    const baker = './Bakerbg.png';
    const eng = './Engbg.png'
    const painter = './Painter2bg.png'
    const name = "Victory";

    return (
        <>
            <Menu contentId="dashboard-content" onMenuOpen={handleMenuOpen} onMenuClose={handleMenuClose} />
            <IonPage id="dashboard-content" className='page'>
                <IonHeader style={{ border: "none", boxShadow: "none", padding: "4px", }}>
                    <div style={{ display: 'flex', justifyContent: "space-between", border: "0px solid black", width: "100%", alignItems: "center", margin: "auto" }}>
                        <div className="menu" style={{ border: "0px solid black", justifyItems: "left", width: "fit-content" }}>
                            <IonMenuButton className={styles.menu} />
                        </div>
                        {!menuIsOpen && (
                            <div style={{ display: "flex", border: "0px solid", marginLeft: "auto", alignItems: "center" }} className={`${styles.transitionFade} ${!menuIsOpen ? styles.visible : styles.hidden}`}>
                                <div style={{ border: "0px solid black", marginLeft: "auto", paddingRight: "1em" }}>
                                    <h3>Hi <span style={{ color: "#27f316" }}>{name}!</span></h3>
                                </div>
                                <div style={{ marginLeft: "auto", border: "0px solid yellow" }}>
                                    <ProfilePics />
                                </div>
                            </div>
                        )}
                    </div>
                </IonHeader>
                <IonContent style={{ '--background': "transparent" }}>
                    <div style={{ textAlign: "center", marginTop: "1em" }}>
                        <input type="search" placeholder="Search for services" style={{ width: "70%", borderRadius: "5px", padding: "5px", background: "#d9d9d9", border: "none", outline:"none", color:"black" }} />
                    </div>
                    <div className={styles.horizontalScroll}>
                        <div className={styles.scrollContainer}>
                            <IonCard style={{ flex: "0 0 auto", width: "290px", height: "130px", marginRight: "10px", backgroundColor: "#0f0f2b", display: "flex", color: "white", alignItems: "center", justifyContent: "space-between", textAlign: "center", borderRadius: "6px" }}>
                                <div style={{ width: "50%", border: "0px solid white", paddingBottom: "13px" }}>
                                    <h4 style={{ marginLeft: "-20px" }}>25% OFF</h4>
                                    <p>On first painting order</p>
                                    <button style={{ padding: "6px", borderRadius: "8px", background: "transparent", border: "1px solid grey" }}>Book now</button>
                                </div>
                                <div style={{ width: "70%", marginTop: "auto" }}>
                                    <img src={painter} alt="Painter" />
                                </div>
                            </IonCard>
                            <IonCard style={{ flex: "0 0 auto", width: "290px", height: "130px", marginRight: "10px", backgroundColor: "green", display: "flex", color: "white", alignItems: "center", justifyContent: "center", textAlign: "center", borderRadius: "6px" }}>
                                <div style={{ width: "50%", border: "0px solid white", paddingBottom: "13px" }}>
                                    <h4 style={{ marginLeft: "-20px" }}>15% OFF</h4>
                                    <p>On first electrical order</p>
                                    <button style={{ padding: "6px", borderRadius: "8px", background: "transparent", border: "1px solid grey" }}>Book now</button>
                                </div>
                                <div style={{ width: "70%", marginTop: "auto" }}>
                                    <img src={electrical} alt="Electrical" />
                                </div>
                            </IonCard>
                            <IonCard style={{ flex: "0 0 auto", width: "290px", height: "130px", marginRight: "10px", backgroundColor: "green", display: "flex", color: "white", alignItems: "center", justifyContent: "center", textAlign: "center", borderRadius: "6px" }}>
                                <div style={{ width: "50%", border: "0px solid white", paddingBottom: "13px" }}>
                                    <h4 style={{ marginLeft: "-10px" }}>10% OFF</h4>
                                    <p>On first baking order</p>
                                    <button style={{ padding: "6px", borderRadius: "8px", background: "transparent", border: "1px solid grey" }}>Book now</button>
                                </div>
                                <div style={{ width: "70%", marginTop: "auto" }}>
                                    <img src={baker} alt="Baker" />
                                </div>
                            </IonCard>
                        </div>
                    </div>
                    <div style={{ border: "0px solid black" }}>
                        <IonLabel className={styles.lab}>
                            Category<p>see all</p>
                        </IonLabel>
                    </div>
                    <div className={styles.category}>
                        <p style={{ background: '' }}>All</p>
                        <p>Electronics</p>
                        <p>Carpenters</p>
                        <p>Plumbers</p>
                    </div>
                    <div style={{ border: "0px solid black" }}>
                        <IonLabel className={styles.lab}>
                            Trending<p>see all</p>
                        </IonLabel>
                    </div>
                    <div className={styles.horizontalScroll2}>
                        <div className={styles.scrollContainer2}>
                            <IonCard style={{ flex: "0 0 auto", width: "300px", height: "200px", marginRight: "10px", backgroundColor: "#0f0f2b", display: "flex", color: "white", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                                <div style={{ textAlign: "center", width: "250px", display: "block", border: "0px solid white", paddingLeft: "1rem" }}>
                                    <h1 style={{ paddingBottom: "2rem", fontSize: "2.2rem" }}>Electronics</h1>
                                    <button style={{ padding: "2px", borderRadius: "12px", width: "50%", background: "white", color: "black" }}>Check it out</button>
                                </div>
                                <div style={{ width: "60%", border: "0px solid white" }}>
                                    <img style={{ width: "100%", }} src={eng} alt="Electronics" />
                                </div>
                            </IonCard>
                            <IonCard style={{ flex: "0 0 auto", width: "300px", height: "200px", marginRight: "10px", backgroundColor: "#0f0f2b", display: "flex", color: "white", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                                <div style={{ textAlign: "center", width: "250px", display: "block", border: "0px solid white", paddingLeft: "1rem" }}>
                                    <h1 style={{ paddingBottom: "2rem", fontSize: "2.2rem" }}>Electronics</h1>
                                    <button style={{ padding: "2px", borderRadius: "12px", width: "50%", background: "white", color: "black" }}>Check it out</button>
                                </div>
                                <div style={{ width: "60%", border: "0px solid white" }}>
                                    <img style={{ width: "100%", }} src={eng} alt="Electronics" />
                                </div>
                            </IonCard>
                            <IonCard style={{ flex: "0 0 auto", width: "300px", height: "200px", marginRight: "10px", backgroundColor: "#0f0f2b", display: "flex", color: "white", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                                <div style={{ textAlign: "center", width: "250px", display: "block", border: "0px solid white", paddingLeft: "1rem" }}>
                                    <h1 style={{ paddingBottom: "2rem", fontSize: "2.2rem" }}>Electronics</h1>
                                    <button style={{ padding: "2px", borderRadius: "12px", width: "50%", background: "white", color: "black" }}>Check it out</button>
                                </div>
                                <div style={{ width: "60%", border: "0px solid white" }}>
                                    <img style={{ width: "100%", }} src={eng} alt="Electronics" />
                                </div>
                            </IonCard>
                        </div>
                    </div>
                    <div style={{ borderTop: "1px solid black" }} className="verified">
                        
                    </div>
                </IonContent>
                <BottomNav />
            </IonPage>
        </>
    )
}

export default Dashboard
