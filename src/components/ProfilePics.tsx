import React from 'react';
import {IonImg} from "@ionic/react";
import pro from './ProfilePics.module.css'
<<<<<<< HEAD
import {useUser} from '../hooks/UserContext';
=======

>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836


const ProfilePics: React.FC = () => {

<<<<<<< HEAD

    const { userInfo } = useUser();

    const prof = '/profile.jpg'

    return(
        <div className={pro.profile}>
            <IonImg src={userInfo?.image}></IonImg>
=======
    const prof = '../public/profile.jpg'

    return(
        <div className={pro.profile}>
            <IonImg src={prof}></IonImg>
>>>>>>> 045e3193e8097b77a23757af94ccd46b36cb2836
        </div>
    )
}

export default ProfilePics;