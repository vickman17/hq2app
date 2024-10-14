<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
=======
import React, {useEffect} from 'react';
>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Verify from './pages/Verify'
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs'
<<<<<<< HEAD
import {homeOutline, wallet} from 'ionicons/icons'
=======
import {homeOutline} from 'ionicons/icons'
>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836

//import ionic CSS
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import Menu from './components/Menu';
import Wallet from './pages/Wallet';
<<<<<<< HEAD
import { UserProvider } from './hooks/UserContext';
import { Storage } from '@ionic/storage';
import ProtectedRoute from './hooks/ProtectedRouteProps';
import Transition from './components/Transition';

=======
>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836


setupIonicReact();

const App: React.FC = () => {
<<<<<<< HEAD
  const [storage, setStorage] = useState<Storage | null>(null); // useState is now correctly imported

  // Initialize Ionic Storage
  useEffect(() => {
    const initStorage = async () => {
      const newStorage = new Storage(); // No arguments needed in the constructor
      const createdStorage = await newStorage.create(); // Await the storage creation
      setStorage(createdStorage); // Set storage once it's initialized
    };

    initStorage(); // Call the initStorage function
  }, []);
=======

>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836

  useEffect(()=>{
    document.body.style.fontFamily = "Varela Round";
  },[])

<<<<<<< HEAD

  if (!storage) {
    return <div>Loading...</div>; // You can show a loading screen while storage is being initialized
  }
  return(
    <IonApp>
      <UserProvider>
        <IonReactRouter>
          
            <IonRouterOutlet>
              <Route exact path="/" component={Login} />
              <Route path='/login' component={Login} />
              <Route path='/verify' component={Verify} />
              <Route path='/Signup' component={Signup} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <ProtectedRoute path="/wallet" component={Wallet} />
              <ProtectedRoute path="/jobs" component={Jobs} />
            </IonRouterOutlet>
          
        </IonReactRouter>
      </UserProvider>
=======
  return(
    <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/">
              <Redirect to="/login"/>
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
>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836
    </IonApp>
  )

};

export default App;
