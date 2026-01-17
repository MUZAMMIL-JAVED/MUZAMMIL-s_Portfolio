"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";

import { SettingsContext } from "@/context/SettingsContext";

// Animations
const pulse = keyframes`
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
`;

const countUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

const SectionSatisfactionIndicators = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 80px 20px;
    width: 100%;
    position: relative;
    overflow: hidden;

    @media (max-width: 600px) {
        padding: 50px 15px;
    }
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
    text-align: center;
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
    text-align: center;
    max-width: 600px;
    margin: 0 0 48px 0;
    line-height: 1.6;

    @media (max-width: 600px) {
        font-size: 14px;
        margin-bottom: 32px;
    }
`;

const WrapperStatistics = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    width: min(1200px, 90%);

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

const StatCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 24px;
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border-radius: 20px;
    border: 1px solid rgba(124, 92, 255, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, ${(props) => props.theme.colors.branding}, #00d4ff);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover {
        transform: translateY(-8px);
        border-color: rgba(124, 92, 255, 0.3);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

        &::before {
            opacity: 1;
        }
    }
`;

const StatIcon = styled.div`
    font-size: 36px;
    margin-bottom: 16px;
`;

const StatNumber = styled.div`
    display: flex;
    align-items: baseline;
    gap: 4px;

    .prefix {
        font-size: 28px;
        font-weight: 700;
        color: ${(props) => props.theme.colors.branding};
    }

    .number {
        font-size: 48px;
        font-weight: 900;
        color: ${(props) => props.theme.colors.title};
        line-height: 1;
    }

    .suffix {
        font-size: 28px;
        font-weight: 700;
        color: ${(props) => props.theme.colors.branding};
    }

    @media (max-width: 600px) {
        .number {
            font-size: 40px;
        }
        .prefix, .suffix {
            font-size: 24px;
        }
    }
`;

const StatLabel = styled.span`
    color: ${(props) => props.theme.colors.body};
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    margin-top: 12px;
    line-height: 1.4;
`;

// Animated counter hook
function useCountUp(end, duration = 2000, startOnView = true) {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !isVisible) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.3 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [isVisible]);

	useEffect(() => {
		if (!isVisible) return;

		let startTime;
		const animate = (currentTime) => {
			if (!startTime) startTime = currentTime;
			const progress = Math.min((currentTime - startTime) / duration, 1);
			setCount(Math.floor(progress * end));

			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		};

		requestAnimationFrame(animate);
	}, [isVisible, end, duration]);

	return { count, ref };
}

function AnimatedStat({ icon, number, prefix, suffix, label }) {
	const { count, ref } = useCountUp(number);

	return (
		<StatCard ref={ref}>
			<StatIcon>{icon}</StatIcon>
			<StatNumber>
				{prefix && <span className="prefix">{prefix}</span>}
				<span className="number">{count}</span>
				{suffix && <span className="suffix">{suffix}</span>}
			</StatNumber>
			<StatLabel>{label}</StatLabel>
		</StatCard>
	);
}

export default function SatisfactionIndicators() {
	const { language } = useContext(SettingsContext);

	const stats = [
		{
			icon: "🚀",
			number: 3,
			suffix: "+",
			label: "Years of Experience"
		},
		{
			icon: "💻",
			number: 28,
			suffix: "+",
			label: "GitHub Projects"
		},
		{
			icon: "🎯",
			number: 95,
			suffix: "%",
			label: "AI Model Accuracy"
		},
		{
			icon: "⭐",
			number: 10,
			suffix: "+",
			label: "Happy Clients"
		}
	];

	return (
		<SectionSatisfactionIndicators>
			<Fade triggerOnce>
				<SectionLabel>
					<span>📊</span>
					By The Numbers
				</SectionLabel>
				<SectionTitle>Impact & Results</SectionTitle>
				<SectionSubtitle>
					A track record of delivering high-quality solutions and achieving real results
				</SectionSubtitle>
			</Fade>

			<WrapperStatistics>
				{stats.map((stat, index) => (
					<Fade triggerOnce key={index} delay={index * 100}>
						<AnimatedStat
							icon={stat.icon}
							number={stat.number}
							prefix={stat.prefix}
							suffix={stat.suffix}
							label={stat.label}
						/>
					</Fade>
				))}
			</WrapperStatistics>
		</SectionSatisfactionIndicators>
	);
}
