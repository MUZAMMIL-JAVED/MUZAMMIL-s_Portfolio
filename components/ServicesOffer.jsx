import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";

import { SettingsContext } from "@/context/SettingsContext";

// Animations
const float = keyframes`
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
`;

const shimmer = keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
`;

const SectionServices = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 80px 20px;
    width: 100%;
    position: relative;

    @media (max-width: 600px) {
        padding: 50px 15px;
    }
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 48px;
`;

const SectionLabel = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(124, 92, 255, 0.1);
    border: 1px solid rgba(124, 92, 255, 0.3);
    border-radius: 50px;
    color: ${(props) => props.theme.colors.branding};
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
    color: ${(props) => props.theme.colors.title};
    font-size: 48px;
    font-weight: 900;
    margin: 0 0 12px 0;
    letter-spacing: -0.03em;

    @media (max-width: 900px) {
        font-size: 36px;
    }

    @media (max-width: 600px) {
        font-size: 28px;
    }
`;

const SectionSubtitle = styled.p`
    color: ${(props) => props.theme.colors.subtitle};
    font-size: 18px;
    max-width: 600px;
    margin: 0;
    line-height: 1.6;

    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    width: min(1200px, 92%);

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 650px) {
        grid-template-columns: 1fr;
    }
`;

const ServiceCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border-radius: 20px;
    border: 1px solid rgba(124, 92, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(124, 92, 255, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover {
        transform: translateY(-12px);
        border-color: rgba(124, 92, 255, 0.4);
        box-shadow: 0 24px 48px rgba(124, 92, 255, 0.2);

        &::before {
            opacity: 1;
        }

        .service-icon {
            animation: ${float} 2s ease-in-out infinite;
        }
    }
`;

const ServiceIcon = styled.div`
    width: 72px;
    height: 72px;
    background: linear-gradient(135deg, ${(props) => props.theme.colors.branding} 0%, #00d4ff 100%);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    margin-bottom: 24px;
    position: relative;
    z-index: 1;
`;

const ServiceTitle = styled.h3`
    color: ${(props) => props.theme.colors.title};
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 12px 0;
    position: relative;
    z-index: 1;
`;

const ServiceDescription = styled.p`
    color: ${(props) => props.theme.colors.body};
    font-size: 15px;
    line-height: 1.7;
    margin: 0 0 20px 0;
    position: relative;
    z-index: 1;
    flex: 1;
`;

const ServiceFeatures = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    z-index: 1;
`;

const ServiceFeature = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${(props) => props.theme.colors.body};
    font-size: 14px;
    margin-bottom: 10px;

    &::before {
        content: '✓';
        color: ${(props) => props.theme.colors.branding};
        font-weight: 700;
    }
`;

const CTASection = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px;
    background: linear-gradient(135deg, rgba(124, 92, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
    border: 1px solid rgba(124, 92, 255, 0.3);
    border-radius: 24px;
    width: min(800px, 92%);
`;

const CTATitle = styled.h3`
    color: ${(props) => props.theme.colors.title};
    font-size: 28px;
    font-weight: 800;
    margin: 0 0 12px 0;

    @media (max-width: 600px) {
        font-size: 22px;
    }
`;

const CTAText = styled.p`
    color: ${(props) => props.theme.colors.body};
    font-size: 16px;
    margin: 0 0 24px 0;
    max-width: 500px;

    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

const CTAButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 32px;
    background: linear-gradient(135deg, ${(props) => props.theme.colors.branding} 0%, #5a3efc 100%);
    color: #fff;
    border-radius: 50px;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    box-shadow: 0 8px 32px rgba(124, 92, 255, 0.35);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 40px rgba(124, 92, 255, 0.5);
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;

export default function ServicesOffer() {
	const { language } = useContext(SettingsContext);

	const services = [
		{
			icon: "🤖",
			title: "AI & Machine Learning",
			description: "Building intelligent systems using deep learning, computer vision, and automation technologies that transform how businesses operate.",
			features: [
				"Custom ML Model Development",
				"Computer Vision Solutions",
				"LLM Integration & Automation",
				"Predictive Analytics"
			]
		},
		{
			icon: "💻",
			title: "Full-Stack Development",
			description: "Creating dynamic, responsive web applications with modern tech stacks. From stunning frontends to robust backend APIs.",
			features: [
				"React & Next.js Applications",
				"Node.js & Express APIs",
				"MongoDB & Database Design",
				"Real-Time Features"
			]
		},
		{
			icon: "📱",
			title: "Mobile App Development",
			description: "Building native Android applications and cross-platform solutions focused on performance, UX, and seamless user experiences.",
			features: [
				"Native Android (Java/Kotlin)",
				"React Native Apps",
				"API Integration",
				"Firebase Services"
			]
		},
		{
			icon: "⚙️",
			title: "Workflow Automation",
			description: "Streamlining complex operational workflows with intelligent automation systems that reduce manual intervention and boost efficiency.",
			features: [
				"Business Process Automation",
				"Custom Integration Tools",
				"API Bridges & Connectors",
				"Data Pipeline Automation"
			]
		},
		{
			icon: "🎨",
			title: "UI/UX Design",
			description: "Designing intuitive, accessible, and visually appealing user interfaces that enhance user satisfaction and engagement.",
			features: [
				"Modern UI Design",
				"Responsive Layouts",
				"Interactive Prototypes",
				"Design Systems"
			]
		},
		{
			icon: "🚀",
			title: "IT Consulting",
			description: "Strategic analysis to help you adopt the right technologies, optimize processes, and accelerate results in your business.",
			features: [
				"Tech Stack Advisory",
				"Architecture Planning",
				"Performance Optimization",
				"Code Review & Audit"
			]
		}
	];

	return (
		<SectionServices id="section-services">
			<HeaderWrapper>
				<Fade triggerOnce>
					<SectionLabel>
						<span>⚡</span>
						What I Offer
					</SectionLabel>
					<SectionTitle>Services</SectionTitle>
					<SectionSubtitle>
						From AI-powered solutions to full-stack development, I deliver
						customized software that meets your business needs.
					</SectionSubtitle>
				</Fade>
			</HeaderWrapper>

			<ServicesGrid>
				{services.map((service, index) => (
					<Fade triggerOnce key={index} delay={index * 100}>
						<ServiceCard>
							<ServiceIcon className="service-icon">
								{service.icon}
							</ServiceIcon>
							<ServiceTitle>{service.title}</ServiceTitle>
							<ServiceDescription>{service.description}</ServiceDescription>
							<ServiceFeatures>
								{service.features.map((feature, i) => (
									<ServiceFeature key={i}>{feature}</ServiceFeature>
								))}
							</ServiceFeatures>
						</ServiceCard>
					</Fade>
				))}
			</ServicesGrid>

			<Fade triggerOnce delay={300}>
				<CTASection>
					<CTATitle>Have a project in mind?</CTATitle>
					<CTAText>
						Let's discuss how I can help bring your ideas to life with
						cutting-edge technology and professional development.
					</CTAText>
					<CTAButton href="mailto:muzammil.javed@email.com">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
							<polyline points="22,6 12,13 2,6" />
						</svg>
						Get In Touch
					</CTAButton>
				</CTASection>
			</Fade>
		</SectionServices>
	);
}
