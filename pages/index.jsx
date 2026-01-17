import React from "react";

//Pages
import AboutPage from "./about";
import PortfolioPage from "./portfolio";
import ExperiencePage from "./experience";
import HomePage from "./homepage";
import Testimonials from "./Testimonials";

//Components
import FooterPage from "@/components/FooterPage";
import CarrouselTechsDivContainer from "@/components/CarrouselTechsDivContainer";
import SatisfactionIndicators from "@/components/SatisfactionIndicators";
import WorkTogetherCTA from "@/components/WorkTogetherCTA";
import ServicesOffer from "@/components/ServicesOffer";

let flagMessage = false;
export default function Index() {
    function ConsoleMessage() {
        console.log(
            "%c███╗   ███╗██╗   ██╗███████╗ █████╗ ███╗   ███╗███╗   ███╗██╗██╗\n" +
            "%c████╗ ████║██║   ██║╚══███╔╝██╔══██╗████╗ ████║████╗ ████║██║██║\n" +
            "%c██╔████╔██║██║   ██║  ███╔╝ ███████║██╔████╔██║██╔████╔██║██║██║\n" +
            "%c██║╚██╔╝██║██║   ██║ ███╔╝  ██╔══██║██║╚██╔╝██║██║╚██╔╝██║██║██║\n" +
            "%c██║ ╚═╝ ██║╚██████╔╝███████╗██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║██║███████╗\n" +
            "%c╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚═╝╚══════╝",
            "color: #7c5cff;",
            "color: #7c5cff;",
            "color: #7c5cff;",
            "color: #00d4ff;",
            "color: #00d4ff;",
            "color: #00d4ff;"
        );

        console.log(
            "%c🧠 AI & Machine Learning Engineer\n" +
            "%c💻 Full-Stack Developer | 📱 Mobile Developer\n\n" +
            "%c🔗 GitHub: " + "%chttps://github.com/MUZAMMIL-JAVED\n\n" +
            "%c⭐ Don't forget to star my repos!",
            "font-family: Inter, sans-serif; font-size: 1.3rem; font-weight: 700; color: #7c5cff;",
            "font-family: Inter, sans-serif; font-size: 1rem; font-weight: 500; color: #6b7280;",
            "font-family: Inter, sans-serif; font-size: 1rem; font-weight: 500;",
            "font-family: Inter, sans-serif; font-size: 1rem; font-weight: 500; color: #00d4ff;",
            "font-family: Inter, sans-serif; font-size: 1rem; font-weight: 500; color: #ffc107;"
        );
    }

    if (flagMessage == false) {
        ConsoleMessage();
        flagMessage = true;
    }

    return (
        <>
            {/* Hero Section */}
            <HomePage />

            {/* Tech Stack Marquee */}
            <CarrouselTechsDivContainer />

            {/* About Section */}
            <AboutPage />

            {/* Impact Stats */}
            <SatisfactionIndicators />

            {/* Services Section */}
            <ServicesOffer />

            {/* Tech Stack Marquee (reverse) */}
            <CarrouselTechsDivContainer direction="left" />

            {/* Projects Portfolio */}
            <PortfolioPage />

            {/* Experience Timeline */}
            <ExperiencePage />

            {/* Testimonials */}
            <Testimonials />

            {/* CTA Section */}
            <WorkTogetherCTA />

            {/* Footer */}
            <FooterPage />
        </>
    );
}
