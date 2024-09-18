import React from 'react';
import {IonImg} from "@ionic/react";
import pro from './ProfilePics.module.css'



const ProfilePics: React.FC = () => {

    const prof = '../public/profile.jpg'

    return(
        <div className={pro.profile}>
            <IonImg src={prof}></IonImg>
        </div>
    )
}

export default ProfilePics;