import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const useNavigation = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState("inicio");

    const location = useLocation();
    const navigate = useNavigate();

    const isInicio = location.pathname === "/";

    // Scroll de secciones
    useEffect(() => {
        if (!isInicio) return;

        const sections = Array.from(
            document.querySelectorAll<HTMLElement>("section[id]")
        );

        const HEADER_OFFSET = 100;

        const onScroll = () => {
            if (window.scrollY === 0) {
                setActiveSection("inicio");
                return;
            }

            let currentId = "inicio";

            for (const section of sections) {
                const top = section.getBoundingClientRect().top;

                if (top - HEADER_OFFSET <= 0) {
                    currentId = section.id;
                } else {
                    break;
                }
            }

            setActiveSection(currentId);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // inicial

        return () => window.removeEventListener("scroll", onScroll);
    }, [isInicio]);

    // OCULTAR / MOSTRAR HEADER
    useEffect(() => {
        const handleScroll = () => {
            if (menuVisible) return;

            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, menuVisible]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setMenuVisible(false);
        }
    };

    const navigateToSection = (id: string) => {
        navigate("/");
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
        setMenuVisible(false);
    };

    return {
        menuVisible,
        showHeader, 
        activeSection,
        isInicio,
        actions: {
            setMenuVisible,
            scrollToSection,
            navigateToSection,
            navigate
        }
    }
}
