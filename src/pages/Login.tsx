import React, {useEffect} from 'react';
import {IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import styles from "./style/Login.module.css"



const Login: React.FC = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#1f3c26";
    document.body.style.fontFamily = "Varela Round, san-serif";
    document.body.style.overflowX = "hidden";
  },[])

  const logo = '../favicon.png';

  return (
      <IonPage>
          <div>
            <div style={{alignItems:"left"}}>
              <img src={logo} style={{width:"20%", padding: "12px"}}/>
            </div>
            <form className={styles.form}>
              <h1 style={{fontWeight: "100", fontSize:'25px', marginBottom:'-10px'}}>SIGN IN</h1>
              <p style={{fontSize:'16px'}}>Sign in to your account</p>
              <div>
                <input type="text" style={{border: '1px solid white', fontSize:"17px", borderRadius: '6px', marginTop:"12px", width:'80%', padding:'10px', background:"transparent", borderStyle:"solid"}} name="email" placeholder='Email address'/>
              </div>
                <div>
                  <input type="password" name="pwd" placeholder='Password' style={{border: '1px solid white', fontSize:"17px", borderRadius: '6px', marginTop:"12px", width:'80%', padding:'10px', background:"transparent"}}/>
                </div>
                <div>
                  <button style={{padding:"12px", width:'85%', borderRadius:"6px", fontSize:"16px", marginTop:"12px", backgroundColor:"#19fb04", border:'none'}}>Sign in</button>
                </div>
                <div style={{display: "flex", alignItems: "center", margin: "15px",}}>
                  <hr style={{width:'20%', borderBottom: "1px ", height: "0"}}/><p style={{color:"#748177", fontSize:'15px'}}>or continue with</p><hr style={{width:'20%', height: "0", borderBottom: "1px "}}/>
                </div>
                <div>
                  <button style={{padding:"12px", width:'85%', borderRadius:"6px", fontSize:"16px", backgroundColor:"bab6b5", border:'none'}}>Google</button>
                  <div style={{marginTop:"40px"}}>
                    <p style={{margin:"0", color:"#748177", fontSize:'15px'}}>By clicking continue, you agree to our</p>
                    <p style={{margin:"0", fontSize:'15px', fontWeight:"100",}}>Terms of Service <span style={{color:"#748177", fontSize:'15px'}}>and</span> Privacy Policy</p>
                  </div>
                </div>
            </form>
          </div>
      </IonPage>
  );
};


export default Login;