import { useLocation, useNavigate } from "react-router-dom";
import { type ReactElement } from "react";
import { Routes } from "../../router";
import "./style.css";

export interface INavigationButtonProps {
    isActive: boolean;
    onClick: () => void;
    children: string;
}

const NavigationButton = ({
    isActive,
    onClick,
    children,
}: INavigationButtonProps): ReactElement => {
    const className: string = `header-button ${isActive ? "active" : ""}`;

    return (
        <button className={className} disabled={isActive} onClick={onClick}>
            {children}
        </button>
    );
};

const Header = (): ReactElement => {
    const handleExit = (): void => {
        alert("close");
    };

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const isOn = (page: string): boolean => {
        return pathname === page;
    };

    return (
        <div className="header-container">
            <div className="button-group">
                <NavigationButton
                    isActive={isOn(Routes.LIST)}
                    onClick={() => navigate(Routes.LIST)}
                >
                    List
                </NavigationButton>
                <NavigationButton
                    isActive={isOn(Routes.PREVIEW)}
                    onClick={() => navigate(Routes.PREVIEW)}
                >
                    Preview
                </NavigationButton>
            </div>
            <button className="header-button exit-button" onClick={handleExit}>
                Exit
            </button>
        </div>
    );
};

export default Header;
