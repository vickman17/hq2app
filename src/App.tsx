import React, {useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Verify from './pages/Verify'
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs'
import {homeOutline, wallet} from 'ionicons/icons'

//import ionic CSS
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import Menu from './components/Menu';
import Wallet from './pages/Wallet';
import { UserProvider } from './hooks/UserContext';
import { Storage } from '@ionic/storage';
import ProtectedRoute from './hooks/ProtectedRouteProps';
import Transition from './components/Transition';



setupIonicReact();

const App: React.FC = () => {
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

  useEffect(()=>{
    document.body.style.fontFamily = "Varela Round";
  },[])


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
    </IonApp>
  )

};

export default App;
