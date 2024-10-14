<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import styles from "./style/Login.module.css";
import {useUser} from '../hooks/UserContext'; // Import the hook

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { saveUserInfo } = useUser(); // Use the custom hook

  useEffect(() => {
    document.body.style.fontFamily = "Varela Round, sans-serif";
    document.body.style.overflowX = "hidden";
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost/hq2endpoint/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (data.status === 'success') {
            console.log('Login successful!', data);
            saveUserInfo(data.user); // Save user info to context
            history.push('/dashboard');
        } else {
            setError(data.message || 'Login failed. Please try again.');
            console.error('Login failed:', data.message);
        }
    } catch (error) {
        setError('An error occurred while logging in. Please try again later.');
        console.error('Error:', error);
    }
};

=======
import React, {useEffect} from 'react';
import {IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import styles from "./style/Login.module.css"



const Login: React.FC = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#1f3c26";
    document.body.style.fontFamily = "Varela Round, san-serif";
    document.body.style.overflowX = "hidden";
  },[])
>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836

  const logo = '../favicon.png';

  return (
<<<<<<< HEAD
    <IonPage className={styles.page}>
      <div>
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          <img src={logo} style={{ width: "20%", padding: "12px" }} alt="Logo" />
          <div>ooooooooooo</div>
        </div>
        <form className={styles.form} onSubmit={handleLogin}>
          <h1 style={{ fontWeight: "100", fontSize: '25px', marginBottom: '-10px' }}>SIGN IN</h1>
          <p style={{ fontSize: '16px' }}>Sign in to your account</p>
          <div style={{ color: 'red' }}>
            {error}
          </div>
          <div>
            <input
              type="text"
              style={{ border: '1px solid white', fontSize: "17px", borderRadius: '6px', marginTop: "12px", width: '80%', padding: '10px', background: "transparent" }}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email address'
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder='Password'
              style={{ border: '1px solid white', fontSize: "17px", borderRadius: '6px', marginTop: "12px", width: '80%', padding: '10px', background: "transparent" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              style={{ padding: "12px", width: '85%', borderRadius: "6px", fontSize: "16px", marginTop: "12px", backgroundColor: "#19fb04", border: 'none' }}
              type="submit"
            >
              Sign in
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", margin: "15px", }}>
            <hr style={{ width: '20%', borderBottom: "1px ", height: "0" }} />
            <p style={{ color: "#748177", fontSize: '15px' }}>or continue with</p>
            <hr style={{ width: '20%', height: "0", borderBottom: "1px " }} />
          </div>
          <div>
            <button style={{ padding: "12px", width: '85%', borderRadius: "6px", fontSize: "16px", backgroundColor: "bab6b5", border: 'none' }}>Google</button>
            <div style={{ marginTop: "40px" }}>
              <p style={{ margin: "0", color: "#748177", fontSize: '15px' }}>By clicking continue, you agree to our</p>
              <p style={{ margin: "0", fontSize: '15px', fontWeight: "100", }}>Terms of Service <span style={{ color: "#748177", fontSize: '15px' }}>and</span> Privacy Policy</p>
            </div>
          </div>
        </form>
      </div>
    </IonPage>
  );
};

export default Login;
=======
      <IonPage>
          <div>
            <div style={{textAlign:"center", border:"1px solid black", marginTop:"5rem"}}>
              <img src={logo} style={{width:"20%", padding: "12px"}}/>
              <div>
              oooooooooo
              </div>
              
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
>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836
