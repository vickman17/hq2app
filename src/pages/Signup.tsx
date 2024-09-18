import {IonPage, IonIcon } from "@ionic/react";
import React, {useEffect} from "react";
import styles from './style/Signup.module.css';


const Signup: React.FC = () => {

    useEffect(() => {
        document.body.style.backgroundColor = "#252525";
        document.body.style.overflowX = "hidden";
        document.body.style.overflowX = "auto";
      },[])
    
      const logo = '../public/favicon.png';
      const GoogleIcon = './google.svg';

    return(
        <IonPage style={{textAlign:"center"}}>
                <div className={styles.content}>
                    <div style={{textAlign:"left"}}>
                        <img src={logo} style={{width: "15%", padding:'10px'}}></img>
                    </div>
                    <form className={styles.form}>
                        <div>
                        <h1 style={{fontWeight: "100", fontSize:'25px', marginBottom:'-10px'}}>SIGN UP</h1>
                            <p>Create an account</p>
                        </div>
                        <div>
                            <input type="text" placeholder="Email address" style={{border: '1px solid white', fontSize:"17px", borderRadius: '6px', marginTop:"12px", width:'80%', padding:'10px', background:"#696969", borderStyle:"solid"}}/>
                        </div>
                        <div>
                            <input type="password" placeholder="Password" style={{border: '1px solid white', fontSize:"17px", borderRadius: '6px', marginTop:"12px", width:'80%', padding:'10px', background:"#696969", borderStyle:"solid"}}/>
                        </div>
                        <div>
                            <input type="password" placeholder="Password" style={{border: '1px solid white', fontSize:"17px", borderRadius: '6px', marginTop:"12px", width:'80%', padding:'10px', background:"#696969", borderStyle:"solid"}}/>
                        </div>
                        <div>
                        <button style={{padding:"12px", width:'85%', borderRadius:"6px", fontSize:"16px", marginTop:"12px", backgroundColor:"#19fb04", border:'none'}}>Sign up</button>
                        </div>
                        <div style={{display: "flex", alignItems: "center", margin: "15px",}}>
                            <hr style={{width:'20%', borderBottom: "1px ", height: "0"}}/><p style={{color:"#748177", fontSize:'15px'}}>or continue with</p><hr style={{width:'20%', height: "0", borderBottom: "1px "}}/>
                        </div>
                        <div>
                            <button style={{padding:"12px", width:'85%', borderRadius:"6px", fontSize:"16px", backgroundColor:"bab6b5", border:'none'}}>
                                <img src='./google.svg' style={{alignItems: 'auto'}}></img>Google
                            </button>
                            <div style={{marginTop:"40px"}}>
                                <p style={{margin:"0", color:"#748177", fontSize:'15px'}}>By clicking continue, you agree to our</p>
                                <p style={{margin:"0", fontSize:'15px', fontWeight:"100",}}>Terms of Service <span style={{color:"#748177", fontSize:'15px'}}>and</span> Privacy Policy</p>
                            </div>
                        </div>
                    </form>
                </div>
            </IonPage>
    )
}

export default Signup