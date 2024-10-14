// Transition.tsx
import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Transition.css';
interface TransitionProps {
  children: React.ReactNode;
}

const Transition: React.FC<TransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="fade-transition">
      <IonRouterOutlet>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as React.ReactElement<RouteComponentProps<any>>, {
            location: location
          });
        })}
      </IonRouterOutlet>
    </div>
  );
};

export default Transition;
