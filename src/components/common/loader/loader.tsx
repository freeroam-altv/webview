import { FC } from "react";

export const Loader: FC = () => {
    return (
        <div className="w-full h-full absolute flex justify-center items-center bg-dark">
            <div className="animate-spinLogo">
                <img src="/images/logo.svg"/>
            </div>
        </div>
    );
};
