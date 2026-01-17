import React, { useContext } from "react";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Third's librarys
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";

//Custom components
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";

// Animations
const shimmer = keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
`;

const float = keyframes`
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
`;

const SectionSobreMim = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    scroll-margin-top: 80px;
    padding: 80px 0;
    position: relative;
    overflow: hidden;

    @media (max-width: 601px) {
        padding: 50px 0;
    }
`;

const WrapperAboutMe = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 70%;
    max-width: 1200px;

    @media (max-width: 1600px) {
        width: 85%;
    }

    @media (max-width: 900px) {
        width: 92%;
    }

    @media (max-width: 601px) {
        width: 96%;
    }
`;

const AboutHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 40px;
`;

const AboutLabel = styled.span`
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

const AboutTitle = styled.h2`
    color: ${(props) => props.theme.colors.title};
    font-weight: 900;
    font-size: 64px;
    letter-spacing: -0.03em;
    margin: 0;
    line-height: 1.1;

    @media (max-width: 1400px) {
        font-size: 52px;
    }
    @media (max-width: 900px) {
        font-size: 40px;
    }
    @media (max-width: 601px) {
        font-size: 32px;
    }
`;

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    width: 100%;
    margin-top: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const AboutParagraph = styled.p`
    color: ${(props) => props.theme.colors.body};
    font-size: 18px;
    line-height: 1.8;
    margin: 0;

    strong {
        font-weight: 700;
        color: ${(props) => props.theme.colors.branding};
    }

    @media (max-width: 900px) {
        font-size: 16px;
    }
`;

// Skills showcase
const SkillsSection = styled.div`
    margin-top: 20px;
`;

const SkillCategory = styled.div`
    margin-bottom: 24px;
`;

const SkillCategoryTitle = styled.h4`
    color: ${(props) => props.theme.colors.branding};
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
`;

const SkillTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const SkillTag = styled.span`
    padding: 8px 16px;
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border: 1px solid rgba(124, 92, 255, 0.2);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.body};
    transition: all 0.2s ease;

    &:hover {
        border-color: ${(props) => props.theme.colors.branding};
        color: ${(props) => props.theme.colors.branding};
        transform: translateY(-2px);
    }
`;

// Experience Cards
const ExperienceCard = styled.div`
    padding: 24px;
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border-radius: 16px;
    border: 1px solid rgba(124, 92, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
        border-color: rgba(124, 92, 255, 0.3);
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    }
`;

const ExperienceIcon = styled.div`
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, ${(props) => props.theme.colors.branding} 0%, #00d4ff 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    font-size: 24px;
`;

const ExperienceTitle = styled.h4`
    color: ${(props) => props.theme.colors.title};
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 8px 0;
`;

const ExperienceDuration = styled.span`
    color: ${(props) => props.theme.colors.branding};
    font-size: 14px;
    font-weight: 600;
`;

const ExperienceDescription = styled.p`
    color: ${(props) => props.theme.colors.body};
    font-size: 14px;
    line-height: 1.6;
    margin: 12px 0 0 0;
`;

const BottomActions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    margin-top: 40px;
    flex-wrap: wrap;
`;

const GitHubStatsButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 24px;
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border: 2px solid ${(props) => props.theme.colors.branding};
    border-radius: 50px;
    color: ${(props) => props.theme.colors.branding};
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        background: ${(props) => props.theme.colors.branding};
        color: #fff;
        transform: translateY(-2px);
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;

// Fun fact card
const FunFactCard = styled.div`
    padding: 20px 24px;
    background: linear-gradient(135deg, rgba(124, 92, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
    border: 1px solid rgba(124, 92, 255, 0.3);
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 16px;

    .emoji {
        font-size: 32px;
        animation: ${float} 3s ease-in-out infinite;
    }

    .text {
        color: ${(props) => props.theme.colors.body};
        font-size: 15px;
        font-weight: 500;
        
        strong {
            color: ${(props) => props.theme.colors.branding};
        }
    }
`;

export default function SobreMim(props) {
    const { language } = useContext(SettingsContext);

    const aiMlSkills = ["Python", "TensorFlow", "PyTorch", "OpenCV", "YOLOv10", "CNN", "Deep Learning", "Computer Vision"];
    const fullStackSkills = ["React", "Next.js", "Node.js", "Express", "MongoDB", "REST APIs", "TypeScript"];
    const mobileSkills = ["Android", "Java", "Kotlin", "React Native", "Firebase"];

    return (
        <SectionSobreMim id="section-about">
            <WrapperAboutMe>
                <Fade triggerOnce delay={100}>
                    <AboutHeader>
                        <AboutLabel>
                            <span>🚀</span>
                            The Developer Behind the Keyboard
                        </AboutLabel>
                        <AboutTitle>About Me</AboutTitle>
                    </AboutHeader>
                </Fade>

                <ContentGrid>
                    <LeftContent>
                        <Fade triggerOnce delay={200}>
                            <AboutParagraph>
                                I'm <strong>Muzammil Javed</strong>, an AI & Machine Learning Engineer from Pakistan 🇵🇰,
                                passionate about building intelligent systems that transform how we interact with technology.
                                My current focus is on <strong>Deep Learning</strong>, <strong>Computer Vision</strong>, and
                                <strong> Automation</strong>.
                            </AboutParagraph>
                        </Fade>

                        <Fade triggerOnce delay={300}>
                            <AboutParagraph>
                                With over <strong>3 years</strong> in the tech industry, I've delivered 25+ successful projects
                                spanning AI-powered applications, full-stack web development, and mobile apps. I love turning
                                complex problems into elegant, high-performing solutions.
                            </AboutParagraph>
                        </Fade>

                        <Fade triggerOnce delay={400}>
                            <FunFactCard>
                                <span className="emoji">🌿</span>
                                <span className="text">
                                    Fun fact: I built a <strong>Plant Disease Detection</strong> system with
                                    <strong> 95%+ accuracy</strong> using CNN deep learning!
                                </span>
                            </FunFactCard>
                        </Fade>

                        <Fade triggerOnce delay={500}>
                            <SkillsSection>
                                <SkillCategory>
                                    <SkillCategoryTitle>🧠 AI & Machine Learning</SkillCategoryTitle>
                                    <SkillTags>
                                        {aiMlSkills.map((skill, i) => (
                                            <SkillTag key={i}>{skill}</SkillTag>
                                        ))}
                                    </SkillTags>
                                </SkillCategory>

                                <SkillCategory>
                                    <SkillCategoryTitle>💻 Full-Stack Development</SkillCategoryTitle>
                                    <SkillTags>
                                        {fullStackSkills.map((skill, i) => (
                                            <SkillTag key={i}>{skill}</SkillTag>
                                        ))}
                                    </SkillTags>
                                </SkillCategory>

                                <SkillCategory>
                                    <SkillCategoryTitle>📱 Mobile Development</SkillCategoryTitle>
                                    <SkillTags>
                                        {mobileSkills.map((skill, i) => (
                                            <SkillTag key={i}>{skill}</SkillTag>
                                        ))}
                                    </SkillTags>
                                </SkillCategory>
                            </SkillsSection>
                        </Fade>
                    </LeftContent>

                    <RightContent>
                        <Fade triggerOnce delay={300}>
                            <ExperienceCard>
                                <ExperienceIcon>🤖</ExperienceIcon>
                                <ExperienceTitle>AI & Automation Engineer</ExperienceTitle>
                                <ExperienceDuration>Current Role • Bit n Byte Digital Solutions</ExperienceDuration>
                                <ExperienceDescription>
                                    Designing intelligent systems with LLM-driven business process automation,
                                    ML model development, and AI integration via robust APIs.
                                </ExperienceDescription>
                            </ExperienceCard>
                        </Fade>

                        <Fade triggerOnce delay={400}>
                            <ExperienceCard>
                                <ExperienceIcon>💻</ExperienceIcon>
                                <ExperienceTitle>Full-Stack Developer</ExperienceTitle>
                                <ExperienceDuration>1.5+ Years Experience</ExperienceDuration>
                                <ExperienceDescription>
                                    Built dynamic web apps with React, Node.js, Express. Experienced in JWT Authentication,
                                    Role-Based Access Control, and real-time applications.
                                </ExperienceDescription>
                            </ExperienceCard>
                        </Fade>

                        <Fade triggerOnce delay={500}>
                            <ExperienceCard>
                                <ExperienceIcon>📲</ExperienceIcon>
                                <ExperienceTitle>Mobile Developer</ExperienceTitle>
                                <ExperienceDuration>1.5+ Years Experience</ExperienceDuration>
                                <ExperienceDescription>
                                    Developed native Android applications focused on performance & UX.
                                    Proficient in API integration and modern design principles.
                                </ExperienceDescription>
                            </ExperienceCard>
                        </Fade>
                    </RightContent>
                </ContentGrid>

                <Fade triggerOnce delay={600}>
                    <BottomActions>
                        <SocialNetworkRowStack />
                        <GitHubStatsButton
                            href="https://github.com/MUZAMMIL-JAVED"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View GitHub (28+ repos)
                        </GitHubStatsButton>
                    </BottomActions>
                </Fade>
            </WrapperAboutMe>
        </SectionSobreMim>
    );
}
