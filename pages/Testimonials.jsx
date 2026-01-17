import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import dynamic from "next/dynamic";
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

//Context
import { SettingsContext } from "@/context/SettingsContext";

//Custom components
import TitleSection from "@/components/TitleSection";

//Icons
import { QuotesLeft } from "@styled-icons/icomoon";
import { StarFill } from "@styled-icons/bootstrap";

const shimmer = keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
`;

const Container = styled.div`
    width: 60%;

    @media (max-width: 1600px) {
        width: 75%;
    }

    @media (max-width: 1400px) {
        width: 80%;
    }

    @media (max-width: 1100px) {
        width: 85%;
    }

    @media (max-width: 900px) {
        width: 90%;
    }
`;

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 80px 0;

    @media (max-width: 601px) {
        padding: 50px 0;
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

const Testimonial = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 420px;
    min-height: 280px;
    margin-right: 24px;
    padding: 28px;
    border-radius: 20px;
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border: 1px solid rgba(124, 92, 255, 0.1);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    will-change: transform;
    transform: translateZ(0);

    &:hover {
        transform: translateY(-8px);
        border-color: rgba(124, 92, 255, 0.3);
        box-shadow: 0 20px 50px rgba(124, 92, 255, 0.1);
    }

    @media (max-width: 601px) {
        width: 320px;
        min-height: 260px;
        margin-right: 16px;
        padding: 20px;
    }
`;

const QuoteIcon = styled.div`
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, ${(props) => props.theme.colors.branding} 0%, #00d4ff 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    svg {
        color: #fff;
        width: 24px;
        height: 24px;
    }
`;

const QuoteText = styled.p`
    color: ${(props) => props.theme.colors.body};
    font-size: 15px;
    line-height: 1.7;
    margin: 0 0 24px 0;
    flex: 1;
    font-style: italic;
`;

const ReviewerInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: auto;
`;

const ReviewerDetails = styled.div`
    display: flex;
    flex-direction: column;

    .name {
        color: ${(props) => props.theme.colors.title};
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 2px;
    }

    .role {
        color: ${(props) => props.theme.colors.subtitle};
        font-size: 13px;
    }
`;

const StarRating = styled.div`
    display: flex;
    gap: 4px;

    .star {
        width: 18px;
        height: 18px;
        color: ${(props) => props.theme.colors.backgroundTertiary};
    }

    .star-filled {
        color: ${(props) => props.theme.colors.branding};
    }
`;

const ProjectBadge = styled.span`
    display: inline-flex;
    padding: 4px 10px;
    background: rgba(124, 92, 255, 0.1);
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.branding};
    margin-top: 12px;
`;

const testimonials = [
    {
        quote:
            "Muzammil's AI expertise transformed our plant monitoring system. The 95% accuracy in disease detection has saved our farm thousands in crop losses. Truly exceptional work!",
        name: "Ahmed Hassan",
        role: "Agricultural Tech Startup",
        project: "AI/ML Project",
        stars: 5,
    },
    {
        quote:
            "The web application Muzammil built exceeded our expectations. Clean architecture, smooth animations, and the codebase is incredibly maintainable. Highly recommended!",
        name: "Waleed Arif",
        role: "Business Developer",
        project: "Full-Stack Web App",
        stars: 5,
    },
    {
        quote:
            "Our Android app went from concept to Play Store in record time. Muzammil's attention to UX details and performance optimization made all the difference.",
        name: "Sarah Thompson",
        role: "Startup Founder",
        project: "Mobile App Development",
        stars: 5,
    },
    {
        quote:
            "The automation pipeline Muzammil designed cut our manual processing time by 80%. His LLM integration expertise is world-class.",
        name: "Lucas Ferreira",
        role: "Operations Director",
        project: "Workflow Automation",
        stars: 5,
    },
    {
        quote:
            "From design mockups to deployed application, the entire process was smooth. The gesture recognition system works flawlessly for our home automation needs.",
        name: "Mia Chen",
        role: "Smart Home Innovator",
        project: "Computer Vision",
        stars: 4,
    },
    {
        quote:
            "Professional, responsive, and incredibly skilled. Muzammil delivered our e-commerce platform ahead of schedule with all the features we needed.",
        name: "Sofia Ruiz",
        role: "E-commerce Manager",
        project: "Web Development",
        stars: 5,
    },
];

export default function Testimonials() {
    const { language } = useContext(SettingsContext);

    return (
        <Section id="testimonials">
            <HeaderWrapper>
                <SectionLabel>
                    <span>💬</span>
                    Client Feedback
                </SectionLabel>
                <SectionTitle>What Clients Say</SectionTitle>
                <SectionSubtitle>
                    Don't just take my word for it. Here's what clients and
                    collaborators have to say about working with me.
                </SectionSubtitle>
            </HeaderWrapper>

            <Marquee autoFill gradient={false} pauseOnHover direction="left" speed={35}>
                {testimonials.map((t, index) => (
                    <Testimonial key={index}>
                        <QuoteIcon>
                            <QuotesLeft />
                        </QuoteIcon>

                        <QuoteText>"{t.quote}"</QuoteText>

                        <ReviewerInfo>
                            <ReviewerDetails>
                                <span className="name">{t.name}</span>
                                <span className="role">{t.role}</span>
                                <ProjectBadge>{t.project}</ProjectBadge>
                            </ReviewerDetails>

                            <StarRating>
                                {[...Array(5)].map((_, i) => (
                                    <StarFill
                                        key={i}
                                        className={`star ${i < t.stars ? "star-filled" : ""}`}
                                    />
                                ))}
                            </StarRating>
                        </ReviewerInfo>
                    </Testimonial>
                ))}
            </Marquee>
        </Section>
    );
}
