import React, {useEffect} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Verify from './pages/Verify'
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs'
import {homeOutline} from 'ionicons/icons'

//import ionic CSS
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import Menu from './components/Menu';
import Wallet from './pages/Wallet';


setupIonicReact();

const App: React.FC = () => {


  useEffect(()=>{
    document.body.style.fontFamily = "Varela Round";
  },[])

  return(
    <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/">
              <Redirect to="/Dashboard" />
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/verify'>
              <Verify/>
            </Route>
            <Route path='/Signup'>
              <Signup/>
            </Route>
            <Route path='/dashboard'>
              <Dashboard/>
            </Route>
            <Route path='/jobs'>
              <Jobs/>
            </Route>
            <Route path='/wallet'>
              <Wallet/>
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
  )

};

export default App;
