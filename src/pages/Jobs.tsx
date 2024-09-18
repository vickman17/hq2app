import { IonContent, IonHeader, IonItem, IonPage, IonToolbar } from "@ionic/react"
import React, {useState} from "react"
import Menu from "../components/Menu";
import BottomNav from "../components/BottomNav";
import style from "./style/Jobs.module.css";
import CancelledJobs from '../components/CancelledJobs';
import CompletedJobs from "../components/CompletedJobs";
import { Component } from "ionicons/dist/types/stencil-public-runtime";

const Jobs: React.FC = () => {
    
    const [activeComponent, setActiveComponent] = useState<string | null>("CompletedJobs");

    const handleClick = (ComponentName: string) => {
        setActiveComponent(ComponentName);
    };


    return(
        <IonPage>
            <IonHeader className={style.Head}>
                <p>My Jobs</p>
            </IonHeader>
            <div>
                <div className={style.table} style={{width:"90%", margin: "auto", display:"flex", justifyContent:"space-around", borderRadius:"6px"}}>   
                    <div style={{background: "", textAlign:"center", padding:".4rem",  width: "50%",}} onClick={() => handleClick('CompletedJobs')}>
                         <label>Completed Jobs</label>
                    </div>
                    <div style={{background: "red", textAlign:"center", padding:".4rem", width: "50%"}} onClick={() => handleClick('CancelledJobs')}>
                         <label>Cancelled Jobs</label>
                    </div>
                </div>
            </div>
            <IonContent>
                {activeComponent === "CompletedJobs" && <CompletedJobs/>}
                {activeComponent === "CancelledJobs" && <CancelledJobs/>}
            </IonContent>
            <BottomNav/>
        </IonPage>
    )
}


export default Jobs;