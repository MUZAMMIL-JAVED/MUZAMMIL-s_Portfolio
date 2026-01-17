import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";

import { SettingsContext } from "@/context/SettingsContext";
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";

import { KeyboardArrowUp } from "@styled-icons/material-outlined/KeyboardArrowUp";

const pulse = keyframes`
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
`;

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
    padding: 0 20px;
`;

const FooterContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: min(1200px, 100%);
    padding: 60px 0;
    gap: 40px;
    flex-wrap: wrap;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const BrandSection = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;

    @media (max-width: 900px) {
        align-items: center;
        max-width: 100%;
    }
`;

const BrandName = styled.h3`
    font-size: 24px;
    font-weight: 900;
    color: ${(props) => props.theme.colors.title};
    margin: 0 0 8px 0;
    
    span {
        background: linear-gradient(135deg, ${(props) => props.theme.colors.branding} 0%, #00d4ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;

const BrandTagline = styled.p`
    color: ${(props) => props.theme.colors.body};
    font-size: 14px;
    line-height: 1.7;
    margin: 0 0 20px 0;
`;

const LinksSection = styled.div`
    display: flex;
    gap: 60px;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 32px;
    }
`;

const LinkColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const LinkTitle = styled.h4`
    color: ${(props) => props.theme.colors.branding};
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 8px 0;
`;

const FooterLink = styled.a`
    color: ${(props) => props.theme.colors.body};
    font-size: 14px;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        color: ${(props) => props.theme.colors.branding};
        transform: translateX(4px);
    }
`;

const Divider = styled.div`
    width: min(1200px, 100%);
    height: 1px;
    background: linear-gradient(90deg, transparent, ${(props) => props.theme.colors.backgroundSecondary}, transparent);
`;

const BottomBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(1200px, 100%);
    padding: 24px 0;
    gap: 20px;

    @media (max-width: 600px) {
        flex-direction: column;
        text-align: center;
    }
`;

const Copyright = styled.span`
    color: ${(props) => props.theme.colors.subtitle};
    font-size: 14px;
`;

const MadeWith = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${(props) => props.theme.colors.subtitle};
    font-size: 14px;

    .heart {
        color: #ff6b6b;
        animation: ${pulse} 1.5s ease-in-out infinite;
    }
`;

const BackToTop = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        border-color: ${(props) => props.theme.colors.branding};
        transform: translateY(-4px);
    }

    svg {
        color: ${(props) => props.theme.colors.branding};
        width: 24px;
        height: 24px;
    }
`;

const TechStack = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;

    @media (max-width: 900px) {
        justify-content: center;
    }
`;

const TechBadge = styled.span`
    padding: 4px 12px;
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border-radius: 20px;
    font-size: 12px;
    color: ${(props) => props.theme.colors.subtitle};
`;

export default function FooterPage(props) {
	const { language } = useContext(SettingsContext);
	const [version, setVersion] = useState("");

	useEffect(() => {
		setVersion("2.0.0");
	}, []);

	const goToTop = () => {
		if (typeof window !== "undefined") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	return (
		<FooterContainer>
			<FooterContent>
				<BrandSection>
					<BrandName>
						Muzammil <span>Javed</span>
					</BrandName>
					<BrandTagline>
						AI & Machine Learning Engineer crafting intelligent systems
						that transform how we interact with technology.
					</BrandTagline>
					<SocialNetworkRowStack />
				</BrandSection>

				<LinksSection>
					<LinkColumn>
						<LinkTitle>Navigation</LinkTitle>
						<FooterLink href="#section-home">Home</FooterLink>
						<FooterLink href="#section-about">About</FooterLink>
						<FooterLink href="#section-services">Services</FooterLink>
						<FooterLink href="#section-portifolio">Projects</FooterLink>
						<FooterLink href="#section-experience">Experience</FooterLink>
					</LinkColumn>

					<LinkColumn>
						<LinkTitle>Connect</LinkTitle>
						<FooterLink href="https://github.com/MUZAMMIL-JAVED" target="_blank">GitHub</FooterLink>
						<FooterLink href="https://www.linkedin.com/in/muzammil-javed-655297203/" target="_blank">LinkedIn</FooterLink>
						<FooterLink href="https://www.facebook.com/muzammil.javed.925" target="_blank">Facebook</FooterLink>
						<FooterLink href="mailto:muzammiljavedd@gmail.com">Email</FooterLink>
					</LinkColumn>

					<LinkColumn>
						<LinkTitle>Built With</LinkTitle>
						<TechStack>
							<TechBadge>React</TechBadge>
							<TechBadge>Next.js</TechBadge>
							<TechBadge>Styled Components</TechBadge>
						</TechStack>
					</LinkColumn>
				</LinksSection>
			</FooterContent>

			<Divider />

			<BottomBar>
				<Copyright>
					© {new Date().getFullYear()} Muzammil Javed. All rights reserved.
				</Copyright>

				<MadeWith>
					Made with <span className="heart">❤️</span> in Pakistan 🇵🇰
				</MadeWith>

				<BackToTop onClick={goToTop} aria-label="Back to top">
					<KeyboardArrowUp />
				</BackToTop>
			</BottomBar>
		</FooterContainer>
	);
}
