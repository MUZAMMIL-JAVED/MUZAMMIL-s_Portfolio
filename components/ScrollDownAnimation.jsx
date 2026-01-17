import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import ScrollDownLottie from "@/public/lotties/scroll-down.json";
import ScrollDownLottieLight from "@/public/lotties/scroll-down-light.json";

const ContainerLottie = styled.div`
	width: 80px;
	height: 80px;
	transition: all 0.3s ease;
	z-index: 1;
	position: absolute;
	bottom: 20px;

	@media (max-width: 601px) {
		display: none;
	}
`;

export default function ScrollDownAnimation() {
    const theme = useTheme();
    const animationData = theme.name === "dark" ? ScrollDownLottie : ScrollDownLottieLight;

    return (
        <ContainerLottie>
            <Lottie animationData={animationData} loop autoplay style={{ width: "100%", height: "100%" }} />
        </ContainerLottie>
    );
}
