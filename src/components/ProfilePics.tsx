import React from 'react';
import {IonImg} from "@ionic/react";
import pro from './ProfilePics.module.css'
import {useUser} from '../hooks/UserContext';


const ProfilePics: React.FC = () => {


    const { userInfo } = useUser();

    const prof = '/profile.jpg'

    return(
        <div className={pro.profile}>
            <IonImg src={userInfo?.image}></IonImg>
        </div>
    )
}

export default ProfilePics;