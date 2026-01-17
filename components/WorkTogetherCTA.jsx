import React from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";

import { FluidContainer } from "@/styles/ui";

const pulse = keyframes`
    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(124, 92, 255, 0.4); }
    50% { transform: scale(1.02); box-shadow: 0 0 40px 10px rgba(124, 92, 255, 0.2); }
`;

const float = keyframes`
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 100px 20px;
  position: relative;
`;

const CTACard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 60px 40px;
    background: linear-gradient(135deg, rgba(124, 92, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
    border: 1px solid rgba(124, 92, 255, 0.3);
    border-radius: 32px;
    width: min(900px, 92%);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(124, 92, 255, 0.1) 0%, transparent 70%);
        pointer-events: none;
    }

    @media (max-width: 600px) {
        padding: 40px 24px;
    }
`;

const EmojiRow = styled.div`
    font-size: 48px;
    margin-bottom: 24px;
    animation: ${float} 3s ease-in-out infinite;
`;

const CtaTitle = styled.h2`
  color: ${(props) => props.theme.colors.title};
  font-weight: 900;
  letter-spacing: -0.03em;
  text-align: center;
  margin: 0 0 16px 0;
  position: relative;
  z-index: 1;

  font-size: 52px;
  @media (max-width: 1100px) { font-size: 42px; }
  @media (max-width: 900px)  { font-size: 36px; }
  @media (max-width: 600px)  { font-size: 28px; }
`;

const HighlightText = styled.span`
    background: linear-gradient(135deg, ${(props) => props.theme.colors.branding} 0%, #00d4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const CtaSubtitle = styled.p`
  color: ${(props) => props.theme.colors.body};
  text-align: center;
  max-width: 600px;
  margin: 0 0 32px 0;
  font-size: 18px;
  line-height: 1.7;
  position: relative;
  z-index: 1;

  @media (max-width: 600px) {
      font-size: 15px;
  }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    z-index: 1;
`;

const PrimaryButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 18px 36px;
    background: linear-gradient(135deg, ${(props) => props.theme.colors.branding} 0%, #5a3efc 100%);
    color: #fff;
    border-radius: 50px;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    box-shadow: 0 8px 32px rgba(124, 92, 255, 0.4);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 48px rgba(124, 92, 255, 0.5);
    }

    svg {
        width: 20px;
        height: 20px;
    }

    @media (max-width: 600px) {
        padding: 16px 28px;
        font-size: 14px;
    }
`;

const SecondaryButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 18px 36px;
    background: transparent;
    color: ${(props) => props.theme.colors.title};
    border: 2px solid ${(props) => props.theme.colors.branding};
    border-radius: 50px;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        background: ${(props) => props.theme.colors.branding};
        color: #fff;
        transform: translateY(-4px);
    }

    svg {
        width: 20px;
        height: 20px;
    }

    @media (max-width: 600px) {
        padding: 16px 28px;
        font-size: 14px;
    }
`;

const EmailText = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    position: relative;
    z-index: 1;

    .label {
        color: ${(props) => props.theme.colors.subtitle};
        font-size: 14px;
    }

    .email {
        color: ${(props) => props.theme.colors.branding};
        font-size: 18px;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.2s ease;

        &:hover {
            color: #00d4ff;
        }
    }
`;

const StatusBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(0, 255, 136, 0.1);
    border: 1px solid rgba(0, 255, 136, 0.3);
    border-radius: 50px;
    margin-bottom: 24px;
    position: relative;
    z-index: 1;

    .dot {
        width: 8px;
        height: 8px;
        background: #00ff88;
        border-radius: 50%;
        animation: ${pulse} 2s ease-in-out infinite;
    }

    .text {
        color: #00ff88;
        font-size: 14px;
        font-weight: 600;
    }
`;

export default function WorkTogetherCTA() {
  return (
    <FluidContainer>
      <Fade triggerOnce>
        <Section id="section-work-together">
          <CTACard>
            <EmojiRow>🚀</EmojiRow>

            <StatusBadge>
              <span className="dot" />
              <span className="text">Open for Opportunities</span>
            </StatusBadge>

            <CtaTitle>
              Let's Build Something <HighlightText>Amazing</HighlightText> Together
            </CtaTitle>

            <CtaSubtitle>
              Have an AI project, web application, or mobile app in mind?
              I'm ready to help transform your ideas into reality with
              cutting-edge technology and professional execution.
            </CtaSubtitle>

            <ButtonGroup>
              <PrimaryButton href="mailto:muzammiljavedd@gmail.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Get In Touch
              </PrimaryButton>

              <SecondaryButton href="https://github.com/MUZAMMIL-JAVED" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub
              </SecondaryButton>
            </ButtonGroup>

            <EmailText>
              <span className="label">Or drop a message at</span>
              <a className="email" href="mailto:muzammiljavedd@gmail.com">
                muzammiljavedd@gmail.com
              </a>
            </EmailText>
          </CTACard>
        </Section>
      </Fade>
    </FluidContainer>
  );
}