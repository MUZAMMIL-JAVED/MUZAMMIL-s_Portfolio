import React, { useContext, useEffect, useState } from "react";

//Third's librarys
import styled, { keyframes } from "styled-components";
import { useTheme } from "styled-components";
import dynamic from "next/dynamic";
const ProgressBar = dynamic(() => import("react-progressbar-on-scroll"), { ssr: false });

//Custom components
import Head from "@/components/Head";
import FloatNavigationBar from "@/components/FloatNavigationBar";

//UI Components
import { FluidContainer } from "@/styles/ui";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

// CV file public URL 
const cvFile = "/pdf/Muzammil_Javed_CV.pdf";

// Animations
const float = keyframes`
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
`;

const pulse = keyframes`
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
`;

const gradientShift = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const typewriter = keyframes`
    from { width: 0; }
    to { width: 100%; }
`;

const blink = keyframes`
    50% { border-color: transparent; }
`;

// Background decorative elements
const BackgroundOrb = styled.div`
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.3;
    pointer-events: none;
    animation: ${pulse} 8s ease-in-out infinite;
    
    &.orb1 {
        width: 400px;
        height: 400px;
        background: linear-gradient(135deg, #7c5cff 0%, #00d4ff 100%);
        top: -100px;
        right: -100px;
    }
    
    &.orb2 {
        width: 300px;
        height: 300px;
        background: linear-gradient(135deg, #ff6b6b 0%, #ffc107 100%);
        bottom: -50px;
        left: -50px;
        animation-delay: 2s;
    }
    
    &.orb3 {
        width: 200px;
        height: 200px;
        background: linear-gradient(135deg, #00d4ff 0%, #7c5cff 100%);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation-delay: 4s;
    }
`;

const LandingPageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    z-index: 1;

    @media (max-width: 930px) {
        flex-direction: column;
    }

    @media (max-width: 850px) {
        margin-bottom: 60px;
    }
`;

const TitleLandingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    gap: 20px;
`;

const RoleBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: rgba(124, 92, 255, 0.1);
    border: 1px solid rgba(124, 92, 255, 0.3);
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.branding};
    backdrop-filter: blur(10px);
    
    .dot {
        width: 8px;
        height: 8px;
        background: #00ff88;
        border-radius: 50%;
        animation: ${pulse} 2s ease-in-out infinite;
    }
    
    @media (max-width: 600px) {
        font-size: 12px;
        padding: 8px 16px;
    }
`;

const SubTitleLanding = styled.div`
    font-weight: 400;
    color: ${(props) => props.theme.colors.subtitle};
    text-align: center;
    max-width: 600px;
    font-size: 18px;
    line-height: 1.7;

    @media (max-width: 1200px) {
        font-size: 16px;
    }
    
    @media (max-width: 600px) {
        font-size: 14px;
        max-width: 90%;
    }
`;

const SectionHomePage = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    min-height: 100vh;
    position: relative;
    overflow: hidden;

    @media (max-width: 900px) {
        width: 90%;
    }
    @media (max-width: 601px) {
        width: 95%;
        min-height: 90vh;
    }
`;

const IntroText = styled.span`
    display: inline-block;
    font-weight: 500;
    color: ${(props) => props.theme.colors.body};
    font-size: 18px;
    
    @media (max-width: 900px) {
        font-size: 16px;
    }
    @media (max-width: 601px) {
        font-size: 14px;
    }
`;

const DeveloperName = styled.span`
    font-weight: 800;
    background: linear-gradient(135deg, ${(props) => props.theme.colors.branding} 0%, #00d4ff 50%, ${(props) => props.theme.colors.branding} 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 3s ease infinite;
`;

const HelloImage = styled.img`
    width: 43px;
    height: 38px;
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
    transform: translateY(-2px);
    animation: ${float} 3s ease-in-out infinite;

    @media (max-width: 900px) {
        width: 36px;
        height: 32px;
    }
    @media (max-width: 601px) {
        width: 32px;
        height: 28px;
    }
`;

const WrapperButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
    margin-top: 32px;
    flex-wrap: wrap;
`;

const HeroTitle = styled.h1`
    font-weight: 900;
    color: ${(props) => props.theme.colors.title};
    font-size: 68px;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin: 0;

    .role-line {
        display: block;
        background: linear-gradient(135deg, ${(props) => props.theme.colors.branding} 0%, #00d4ff 50%, #ff6b6b 100%);
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: ${gradientShift} 4s ease infinite;
    }

    @media (min-width: 1600px) {
        font-size: 80px;
    }
    @media (max-width: 1400px) {
        font-size: 56px;
    }
    @media (max-width: 900px) {
        font-size: 42px;
    }
    @media (max-width: 601px) {
        font-size: 32px;
    }
`;

const PrimaryButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 32px;
    background: linear-gradient(135deg, ${(props) => props.theme.colors.branding} 0%, #5a3efc 100%);
    color: #ffffff;
    border-radius: 50px;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    box-shadow: 0 8px 32px rgba(124, 92, 255, 0.35);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 40px rgba(124, 92, 255, 0.5);
        
        &::before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(-1px);
    }

    @media (max-width: 601px) {
        font-size: 14px;
        padding: 14px 24px;
    }
`;

const SecondaryButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 32px;
    background: transparent;
    color: ${(props) => props.theme.colors.title};
    border: 2px solid ${(props) => props.theme.colors.branding};
    border-radius: 50px;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
        background: ${(props) => props.theme.colors.branding};
        color: #ffffff;
        transform: translateY(-3px);
        box-shadow: 0 8px 32px rgba(124, 92, 255, 0.35);
    }

    @media (max-width: 601px) {
        font-size: 14px;
        padding: 14px 24px;
    }
`;

const StatsRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 48px;
    flex-wrap: wrap;
    
    @media (max-width: 600px) {
        gap: 24px;
        margin-top: 32px;
    }
`;

const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    .number {
        font-size: 36px;
        font-weight: 900;
        color: ${(props) => props.theme.colors.branding};
        line-height: 1;
        
        @media (max-width: 600px) {
            font-size: 28px;
        }
    }
    
    .label {
        font-size: 14px;
        color: ${(props) => props.theme.colors.subtitle};
        margin-top: 4px;
        
        @media (max-width: 600px) {
            font-size: 12px;
        }
    }
`;

const TechBadges = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 24px;
    flex-wrap: wrap;
`;

const TechBadge = styled.span`
    padding: 6px 14px;
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.body};
    border: 1px solid rgba(124, 92, 255, 0.2);
    transition: all 0.2s ease;
    
    &:hover {
        border-color: ${(props) => props.theme.colors.branding};
        color: ${(props) => props.theme.colors.branding};
    }
`;

export default function HomePage() {
    const theme = useTheme();
    const { language } = useContext(SettingsContext);

    return (
        <FluidContainer id="section-home" hasMinHeight>
            <SectionHomePage>
                <BackgroundOrb className="orb1" />
                <BackgroundOrb className="orb2" />
                <BackgroundOrb className="orb3" />
                <FloatNavigationBar />
                <ProgressBar color={theme.colors.branding} height={5} />
                <Head
                    title="Muzammil Javed | AI & ML Engineer"
                    metaDescription="AI & Machine Learning Engineer specializing in Deep Learning, Computer Vision, and Full-Stack Development. Building intelligent systems that transform how we interact with technology."
                    keywords="Muzammil Javed, AI Engineer, Machine Learning, Deep Learning, Computer Vision, Full Stack Developer, React, Next.js, Python, MERN Stack"
                />
                <LandingPageContainer>
                    <TitleLandingContainer>
                        <RoleBadge>
                            <span className="dot" />
                            Available for Projects
                        </RoleBadge>

                        <IntroText>
                            <HelloImage src="/images/hello.png" alt="Hello" />
                            Hey, I'm <DeveloperName>Muzammil Javed</DeveloperName>
                        </IntroText>

                        <HeroTitle>
                            AI & MACHINE LEARNING
                            <span className="role-line">ENGINEER</span>
                        </HeroTitle>

                        <SubTitleLanding>
                            Designing intelligent systems that transform how we interact with technology.
                            Specializing in Deep Learning, Computer Vision, and Full-Stack Development.
                        </SubTitleLanding>

                        <TechBadges>
                            <TechBadge>🧠 Deep Learning</TechBadge>
                            <TechBadge>👁️ Computer Vision</TechBadge>
                            <TechBadge>⚡ Automation</TechBadge>
                            <TechBadge>🌐 Full-Stack</TechBadge>
                        </TechBadges>

                        <WrapperButtons>
                            <PrimaryButton href="#section-portifolio">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                                View My Work
                            </PrimaryButton>
                            <SecondaryButton href={cvFile} download="Muzammil_Javed_CV.pdf">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download CV
                            </SecondaryButton>
                        </WrapperButtons>

                        <StatsRow>
                            <StatItem>
                                <span className="number">3+</span>
                                <span className="label">Years Experience</span>
                            </StatItem>
                            <StatItem>
                                <span className="number">28+</span>
                                <span className="label">GitHub Projects</span>
                            </StatItem>
                            <StatItem>
                                <span className="number">95%</span>
                                <span className="label">AI Model Accuracy</span>
                            </StatItem>
                        </StatsRow>
                    </TitleLandingContainer>
                </LandingPageContainer>
            </SectionHomePage>
        </FluidContainer>
    );
}
