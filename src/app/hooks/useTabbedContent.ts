import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TabbedContent {
    activeTab: string;
    handleTabClick: (tab: string) => void;
}

const useTabbedContent = (): TabbedContent => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<string>(() => {
        const storedTab = sessionStorage.getItem("activeTab");
        return storedTab ? storedTab : "/"; // Значение по умолчанию (активная вкладка до перезагрузки)
    });

    useEffect(() => {
        sessionStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    useEffect(() => {
        setActiveTab(sessionStorage.getItem("activeTab") || "/");
    }, []);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        sessionStorage.setItem("activeTab", tab);
        navigate(tab);
    };

    return {
        activeTab,
        handleTabClick,
    };
};

export default useTabbedContent;
