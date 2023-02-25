import { FC } from 'react';
import { useStore } from "effector-react";

import { $uiSettings, setLocale } from "@/application/operations/uiSettings";

import { Locales } from "@/i18n/i18n-types";
import { isLocale } from "@/i18n/i18n-util";
import { loadLocale } from "@/i18n/i18n-util.sync";
import TypesafeI18n from "@/i18n/i18n-react";

import { Loader } from "@/components/common/loader/loader";

import LoginPage from "@/pages";

const FreeroamApp: FC = () => {
    const { locale } = useStore($uiSettings);

    let uiLocale: Locales = locale as Locales;

    if (!isLocale(locale)) {
        uiLocale = "en";
    }

    setTimeout(() => {
        setLocale("ru");
    }, 5000);

    loadLocale(uiLocale);
    return (
        <>
            {locale !== "" ? (
                <TypesafeI18n locale={locale as Locales}>
                    <LoginPage />
                </TypesafeI18n>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default FreeroamApp;
