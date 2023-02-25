import { FunctionComponent } from "react";
import { useI18nContext } from "@/i18n/i18n-react";
import { $uiSettings, setLocale } from "@/application/operations/uiSettings";
import { useStore } from "effector-react";

const LoginPage: FunctionComponent = () => {
    const { LL } = useI18nContext();
    const { locale } = useStore($uiSettings);
    return <div className="m-6">{LL.HI({ name: "JustCup" })}</div>;
};

export default LoginPage;
