/* eslint-disable react/jsx-key */
import React, { useContext, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Icons
import { Robot } from "@styled-icons/fa-solid/Robot";
import { Brain } from "@styled-icons/fa-solid/Brain";
import { Eye } from "@styled-icons/fa-solid/Eye";
import { Leaf } from "@styled-icons/fa-solid/Leaf";
import { Java } from "@styled-icons/fa-brands/Java";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Firebase } from "@styled-icons/boxicons-logos/Firebase";
import { Android } from "@styled-icons/boxicons-logos/Android";
import { Kotlin } from "@styled-icons/simple-icons/Kotlin";
import { Flask } from "@styled-icons/simple-icons/Flask";
import { Tensorflow } from "@styled-icons/simple-icons/Tensorflow";
import { Opencv } from "@styled-icons/simple-icons/Opencv";

//Custom components
import Tooltip from "@/components/Tooltip";
import CardProject from "@/components/CardProject";

const shimmer = keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
`;

const pulse = keyframes`
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
`;

const SectionPortifolio = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding: 80px 0;
    position: relative;

    @media (max-width: 601px) {
        min-height: auto;
        padding: 50px 0;
    }
`;

const HeaderWrapper = styled.div`
    width: min(1200px, 90%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
`;

const HeaderLabel = styled.span`
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

const HeaderTitle = styled.h2`
    margin: 0;
    font-size: 56px;
    line-height: 1.1;
    font-weight: 900;
    color: ${(props) => props.theme.colors.title};
    letter-spacing: -0.03em;

    @media (max-width: 900px) {
        font-size: 42px;
    }
    @media (max-width: 601px) {
        font-size: 32px;
    }
`;

const HeaderSubtitle = styled.p`
    margin-top: 16px;
    font-size: 18px;
    color: ${(props) => props.theme.colors.subtitle};
    max-width: 600px;
    line-height: 1.6;

    @media (max-width: 601px) {
        font-size: 14px;
    }
`;

// Filter tabs
const FilterTabs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 40px;
    flex-wrap: wrap;
    padding: 0 20px;
`;

const FilterTab = styled.button`
    padding: 10px 24px;
    background: ${(props) => props.active ? props.theme.colors.branding : props.theme.colors.backgroundSecondary};
    color: ${(props) => props.active ? '#fff' : props.theme.colors.body};
    border: 2px solid ${(props) => props.active ? props.theme.colors.branding : 'transparent'};
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        border-color: ${(props) => props.theme.colors.branding};
        color: ${(props) => props.active ? '#fff' : props.theme.colors.branding};
    }
`;

// Featured project card (larger)
const FeaturedProjectCard = styled.div`
    width: min(1200px, 92%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 40px;
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border-radius: 24px;
    border: 1px solid rgba(124, 92, 255, 0.2);
    margin-bottom: 40px;
    transition: all 0.3s ease;

    &:hover {
        border-color: rgba(124, 92, 255, 0.5);
        box-shadow: 0 20px 60px rgba(124, 92, 255, 0.15);
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 24px;
    }
`;

const FeaturedImage = styled.div`
    width: 100%;
    height: 300px;
    background: linear-gradient(135deg, rgba(124, 92, 255, 0.2) 0%, rgba(0, 212, 255, 0.2) 100%);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    .icon {
        font-size: 80px;
        color: ${(props) => props.theme.colors.branding};
        opacity: 0.5;
    }

    &::after {
        content: 'FEATURED';
        position: absolute;
        top: 16px;
        right: 16px;
        padding: 6px 12px;
        background: linear-gradient(135deg, ${(props) => props.theme.colors.branding} 0%, #00d4ff 100%);
        color: #fff;
        font-size: 10px;
        font-weight: 700;
        border-radius: 20px;
        letter-spacing: 1px;
    }

    @media (max-width: 900px) {
        height: 200px;
    }
`;

const FeaturedContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FeaturedBadge = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background: rgba(0, 255, 136, 0.1);
    border: 1px solid rgba(0, 255, 136, 0.3);
    color: #00ff88;
    font-size: 12px;
    font-weight: 600;
    border-radius: 20px;
    width: fit-content;
    margin-bottom: 16px;
`;

const FeaturedTitle = styled.h3`
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme.colors.title};
    margin: 0 0 12px 0;
    
    @media (max-width: 601px) {
        font-size: 24px;
    }
`;

const FeaturedDescription = styled.p`
    font-size: 16px;
    color: ${(props) => props.theme.colors.body};
    line-height: 1.7;
    margin: 0 0 20px 0;
`;

const FeaturedStats = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
    flex-wrap: wrap;
`;

const FeaturedStat = styled.div`
    .value {
        font-size: 24px;
        font-weight: 800;
        color: ${(props) => props.theme.colors.branding};
    }
    .label {
        font-size: 12px;
        color: ${(props) => props.theme.colors.subtitle};
    }
`;

const TechStack = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 24px;
`;

const TechTag = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background: ${(props) => props.theme.colors.backgroundTertiary};
    border-radius: 8px;
    font-size: 12px;
    color: ${(props) => props.theme.colors.body};

    svg {
        width: 16px;
        height: 16px;
        color: ${(props) => props.theme.colors.branding};
    }
`;

const FeaturedButtons = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;

const ProjectButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: ${(props) => props.primary ? props.theme.colors.branding : 'transparent'};
    color: ${(props) => props.primary ? '#fff' : props.theme.colors.branding};
    border: 2px solid ${(props) => props.theme.colors.branding};
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        background: ${(props) => props.primary ? '#5a3efc' : props.theme.colors.branding};
        color: #fff;
        transform: translateY(-2px);
    }

    svg {
        width: 16px;
        height: 16px;
    }
`;

// Regular projects grid
const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
    width: min(1200px, 92%);
    gap: 24px;
    transition: all 0.3s ease;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

// Project card styled
const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(124, 92, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-8px);
        border-color: rgba(124, 92, 255, 0.4);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    }
`;

const ProjectImage = styled.div`
    width: 100%;
    height: 180px;
    background: ${(props) => props.bgColor || 'linear-gradient(135deg, rgba(124, 92, 255, 0.15) 0%, rgba(0, 212, 255, 0.15) 100%)'};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .emoji {
        font-size: 48px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ProjectCategory = styled.span`
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 4px 12px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

const ProjectContent = styled.div`
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const ProjectTitle = styled.h4`
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.title};
    margin: 0 0 8px 0;
`;

const ProjectDescription = styled.p`
    font-size: 14px;
    color: ${(props) => props.theme.colors.body};
    line-height: 1.6;
    margin: 0 0 16px 0;
    flex: 1;
`;

const ProjectTechs = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 16px;
`;

const SmallTechTag = styled.span`
    padding: 4px 10px;
    background: ${(props) => props.theme.colors.backgroundTertiary};
    border-radius: 6px;
    font-size: 11px;
    color: ${(props) => props.theme.colors.subtitle};
    font-weight: 500;
`;

const ProjectLinks = styled.div`
    display: flex;
    gap: 12px;
    margin-top: auto;
`;

const ProjectLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.branding};
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        color: #00d4ff;
    }

    svg {
        width: 14px;
        height: 14px;
    }
`;

// Footer CTA
const ProjectsFooterCTA = styled.a`
    margin-top: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 32px;
    background: linear-gradient(135deg, ${(props) => props.theme.colors.branding} 0%, #5a3efc 100%);
    border-radius: 50px;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
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

export default function Portifolio() {
	const { language } = useContext(SettingsContext);
	const [filter, setFilter] = useState("all");

	// Featured AI/ML Projects from your GitHub
	const featuredProjects = [
		{
			id: "gesture-vision",
			title: "GestureVision",
			description: "A powerful hand gesture recognition system built on HaGRIDv2 dataset for real-time gesture detection. Features 33 gesture classes, YOLOv10 object detection, and 21 hand landmarks per hand. Perfect for video conferencing and home automation.",
			category: "AI/ML",
			stats: [
				{ value: "89.4%", label: "mAP Score" },
				{ value: "33+", label: "Gesture Classes" },
				{ value: "1M+", label: "Training Images" }
			],
			techs: ["Python", "YOLOv10", "OpenCV", "Deep Learning"],
			github: "https://github.com/MUZAMMIL-JAVED",
			icon: "🖐️"
		},
		{
			id: "plant-disease",
			title: "Plant Disease Detection",
			description: "An AI-powered web application that detects diseases in tomato plants using CNN deep learning. Identifies 10 disease types with fast predictions and provides treatment recommendations.",
			category: "AI/ML",
			stats: [
				{ value: "95%+", label: "Accuracy" },
				{ value: "10", label: "Disease Types" },
				{ value: "<2s", label: "Prediction Time" }
			],
			techs: ["Python", "TensorFlow", "Flask", "CNN"],
			github: "https://github.com/MUZAMMIL-JAVED",
			icon: "🌿"
		}
	];

	// Regular projects from your GitHub repos
	const projects = [
		{
			id: 1,
			title: "Chatify",
			description: "Real-time chat application with modern UI and seamless messaging experience.",
			category: "mobile",
			techs: ["Java", "Android", "Firebase"],
			emoji: "💬",
			github: "https://github.com/MUZAMMIL-JAVED/chatify"
		},
		{
			id: 2,
			title: "Weather App",
			description: "Beautiful weather application with location-based forecasts and stunning visualizations.",
			category: "mobile",
			techs: ["Kotlin", "Android", "API"],
			emoji: "⛅",
			github: "https://github.com/MUZAMMIL-JAVED/weather-app"
		},
		{
			id: 3,
			title: "Movies App",
			description: "Movie discovery platform with rich posters, ratings and detailed movie information.",
			category: "mobile",
			techs: ["Kotlin", "Android", "TMDB API"],
			emoji: "🎬",
			github: "https://github.com/MUZAMMIL-JAVED/movies-app"
		},
		{
			id: 4,
			title: "AR E-Commerce",
			description: "Augmented Reality shopping experience - preview products in your space before buying.",
			category: "mobile",
			techs: ["Java", "ARCore", "Android"],
			emoji: "🛒",
			github: "https://github.com/MUZAMMIL-JAVED/ar-ecommerce"
		},
		{
			id: 5,
			title: "R-Translator",
			description: "Lightweight translator with conversational preview and quick language switching.",
			category: "mobile",
			techs: ["Android", "ML Kit", "Translation API"],
			emoji: "🌐",
			github: "https://github.com/MUZAMMIL-JAVED/R-Translator"
		},
		{
			id: 6,
			title: "Attendance System",
			description: "Complete attendance management with tracking, dashboards and daily status reports.",
			category: "mobile",
			techs: ["Java", "Android", "SQLite"],
			emoji: "📋",
			github: "https://github.com/MUZAMMIL-JAVED/Attendance_System"
		},
		{
			id: 7,
			title: "Portfolio Website",
			description: "This stunning portfolio showcasing AI/ML expertise and full-stack development skills.",
			category: "web",
			techs: ["React", "Next.js", "Styled Components"],
			emoji: "🚀",
			github: "https://github.com/MUZAMMIL-JAVED"
		},
		{
			id: 8,
			title: "LLM Automation Suite",
			description: "Business process automation powered by Large Language Models for enterprise workflows.",
			category: "ai",
			techs: ["Python", "LangChain", "OpenAI"],
			emoji: "🤖",
			github: "https://github.com/MUZAMMIL-JAVED"
		},
		{
			id: 9,
			title: "Rice Classification",
			description: "Image-based rice variety classification using VGG16 deep learning architecture.",
			category: "ai",
			techs: ["Python", "TensorFlow", "VGG16"],
			emoji: "🌾",
			github: "https://github.com/MUZAMMIL-JAVED"
		}
	];

	const filteredProjects = filter === "all"
		? projects
		: projects.filter(p => p.category === filter);

	return (
		<SectionPortifolio id="section-portifolio">
			<HeaderWrapper>
				<Fade triggerOnce>
					<HeaderLabel>
						<span>💻</span>
						Things I Built and Didn't Break
					</HeaderLabel>
					<HeaderTitle>My Projects</HeaderTitle>
					<HeaderSubtitle>
						From AI-powered applications to full-stack web development and mobile apps.
						Here's a showcase of my work across different technologies.
					</HeaderSubtitle>
				</Fade>
			</HeaderWrapper>

			{/* Featured AI/ML Project */}
			<Fade triggerOnce delay={100}>
				<FeaturedProjectCard>
					<FeaturedImage>
						<span className="icon">🖐️</span>
					</FeaturedImage>
					<FeaturedContent>
						<FeaturedBadge>
							<span>🧠</span> AI/ML Featured Project
						</FeaturedBadge>
						<FeaturedTitle>GestureVision</FeaturedTitle>
						<FeaturedDescription>
							A powerful hand gesture recognition system built on HaGRIDv2 dataset for real-time
							gesture detection. Features 33 gesture classes, YOLOv10 object detection with 89.4% mAP,
							and 21 hand landmarks per hand tracking. Perfect for video conferencing and home automation.
						</FeaturedDescription>
						<FeaturedStats>
							<FeaturedStat>
								<div className="value">89.4%</div>
								<div className="label">mAP Score</div>
							</FeaturedStat>
							<FeaturedStat>
								<div className="value">33+</div>
								<div className="label">Gesture Classes</div>
							</FeaturedStat>
							<FeaturedStat>
								<div className="value">1M+</div>
								<div className="label">Training Images</div>
							</FeaturedStat>
						</FeaturedStats>
						<TechStack>
							<TechTag><Python /> Python</TechTag>
							<TechTag><Opencv /> OpenCV</TechTag>
							<TechTag><Tensorflow /> YOLOv10</TechTag>
						</TechStack>
						<FeaturedButtons>
							<ProjectButton href="https://github.com/MUZAMMIL-JAVED" target="_blank" primary="true">
								<svg viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
								View on GitHub
							</ProjectButton>
						</FeaturedButtons>
					</FeaturedContent>
				</FeaturedProjectCard>
			</Fade>

			{/* Second Featured Project - Plant Disease */}
			<Fade triggerOnce delay={150}>
				<FeaturedProjectCard>
					<FeaturedContent>
						<FeaturedBadge>
							<span>🌿</span> AI/ML Featured Project
						</FeaturedBadge>
						<FeaturedTitle>Plant Disease Detection</FeaturedTitle>
						<FeaturedDescription>
							An AI-powered web application that detects diseases in tomato plants using CNN deep learning.
							Identifies 10 different disease types with 95%+ accuracy and fast predictions in under 2 seconds.
							Includes treatment recommendations for each detected disease.
						</FeaturedDescription>
						<FeaturedStats>
							<FeaturedStat>
								<div className="value">95%+</div>
								<div className="label">Accuracy</div>
							</FeaturedStat>
							<FeaturedStat>
								<div className="value">10</div>
								<div className="label">Disease Types</div>
							</FeaturedStat>
							<FeaturedStat>
								<div className="value">&lt;2s</div>
								<div className="label">Prediction Time</div>
							</FeaturedStat>
						</FeaturedStats>
						<TechStack>
							<TechTag><Python /> Python</TechTag>
							<TechTag><Tensorflow /> TensorFlow</TechTag>
							<TechTag><Flask /> Flask</TechTag>
						</TechStack>
						<FeaturedButtons>
							<ProjectButton href="https://github.com/MUZAMMIL-JAVED" target="_blank" primary="true">
								<svg viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
								View on GitHub
							</ProjectButton>
						</FeaturedButtons>
					</FeaturedContent>
					<FeaturedImage>
						<span className="icon">🌿</span>
					</FeaturedImage>
				</FeaturedProjectCard>
			</Fade>

			{/* Filter Tabs */}
			<FilterTabs>
				<FilterTab active={filter === "all"} onClick={() => setFilter("all")}>
					All Projects
				</FilterTab>
				<FilterTab active={filter === "ai"} onClick={() => setFilter("ai")}>
					🧠 AI/ML
				</FilterTab>
				<FilterTab active={filter === "web"} onClick={() => setFilter("web")}>
					💻 Web
				</FilterTab>
				<FilterTab active={filter === "mobile"} onClick={() => setFilter("mobile")}>
					📱 Mobile
				</FilterTab>
			</FilterTabs>

			{/* Projects Grid */}
			<ContainerGrid>
				{filteredProjects.map((project, index) => (
					<Fade triggerOnce key={project.id} delay={index * 50}>
						<ProjectCard>
							<ProjectImage>
								<span className="emoji">{project.emoji}</span>
								<ProjectCategory>
									{project.category === "ai" ? "AI/ML" :
										project.category === "web" ? "Web" : "Mobile"}
								</ProjectCategory>
							</ProjectImage>
							<ProjectContent>
								<ProjectTitle>{project.title}</ProjectTitle>
								<ProjectDescription>{project.description}</ProjectDescription>
								<ProjectTechs>
									{project.techs.map((tech, i) => (
										<SmallTechTag key={i}>{tech}</SmallTechTag>
									))}
								</ProjectTechs>
								<ProjectLinks>
									<ProjectLink href={project.github} target="_blank">
										<svg viewBox="0 0 24 24" fill="currentColor">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
										View Code
									</ProjectLink>
								</ProjectLinks>
							</ProjectContent>
						</ProjectCard>
					</Fade>
				))}
			</ContainerGrid>

			<ProjectsFooterCTA
				href="https://github.com/MUZAMMIL-JAVED"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
				</svg>
				Explore All 28+ Projects on GitHub
			</ProjectsFooterCTA>
		</SectionPortifolio>
	);
}
