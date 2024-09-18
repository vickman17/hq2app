import { IonPage, IonContent } from "@ionic/react";
import React from "react";
import BottomNav from "../components/BottomNav";

const Wallet: React.FC = () => {

    return(
        <IonPage>
            <IonContent style={{'--background':"#d9d9d9"}}>
                <div style={{background:"#212121", color:"white", paddingBottom:"7rem"}}>
                   <div style={{padding:"1rem", display:"flex", justifyContent:"space-between", alignItems:"center"}}> 
                        <div>
                            <p>Balance</p>
                            <h1 style={{fontSize:"35px"}}>&#8358; 0.0</h1>
                        </div>
                        <div>
                            <h1>Wallet</h1>
                        </div>
                    </div>
                    <div style={{border:"0px solid white", textAlign:"right", marginTop:"4rem"}}>
                        <button style={{paddingBlock:"15px", paddingInline:"25px", color:"#D9D9D9", marginRight:"1rem", borderRadius:"9px"}}>Add money</button>
                    </div>
                </div>
                <div style={{background:"#d9d9d9", marginTop:"-3rem", padding:"1rem", borderTopLeftRadius:"3rem", borderTopRightRadius:"3rem"}}>
                    <div>
                        <h1>Payment History</h1>
                        <p style={{fontSize:"10px"}}>Includes direct payments history and wallet activity</p>  
                    </div>
                </div>
            </IonContent>
            <BottomNav/>
        </IonPage>
    )
}

export default Wallet