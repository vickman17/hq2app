import { IonContent, IonPage } from '@ionic/react';
import React, {useEffect} from 'react'
import style from './style/Verify.module.css'



const Verify: React.FC = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#b7b7b7";
        document.body.style.fontFamily = 'Varela Round';
    }, [])





    return(
        <IonPage>
            <IonContent className={style.cont}>
                <div style={{border:'0px solid black', textAlign:'center', marginTop:'5rem'}}>
                    <div>
                        <h1>HQ2</h1>
                    </div>
                    <div>
                        oooooooo
                    </div>
                </div>
                <div className={style.message}>
                    <h1>We sent you a code to verify your email</h1>
                </div>
                <div className={style.input}>
                    <input maxLength={1} type="number"/>
                    <input maxLength={1} type="number"/>
                    <input maxLength={1} type="number"/>
                    <input maxLength={1} type="number"/>
                </div>
                <div className={style.did}>
                    <p>
                        Didn't receive code? Resend in 00:05
                    </p>
                </div>
                <div className={style.butCont}>
                    <button className={style.but}>Continue</button>
                </div>
            </IonContent>
        </IonPage>
    )



}


export default Verify;
