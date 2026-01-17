import Head from "next/head";
import { useTheme } from "styled-components";

export default function HeadTag(props) {
    const theme = useTheme();

    const defaultTitle = "Muzammil Javed | AI & Machine Learning Engineer";
    const defaultDescription = "AI & Machine Learning Engineer specializing in Deep Learning, Computer Vision, and Full-Stack Development. Building intelligent systems that transform technology.";
    const defaultKeywords = "Muzammil Javed, AI Engineer, Machine Learning, Deep Learning, Computer Vision, Full Stack Developer, React, Next.js, Python, Android Developer, MERN Stack, Pakistan";

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{props.title || defaultTitle}</title>
            <meta name="title" content={props.title || defaultTitle} />
            <meta name="description" content={props.metaDescription || defaultDescription} />
            <meta name="keywords" content={props.keywords || defaultKeywords} />
            <meta name="author" content="Muzammil Javed" />
            <meta name="robots" content="index, follow" />

            {/* Theme Colors */}
            <meta name="theme-color" content={theme.colors.branding} />
            <meta name="msapplication-navbutton-color" content={theme.colors.branding} />
            <meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.branding} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://muzammiljaved.dev/" />
            <meta property="og:title" content={props.title || defaultTitle} />
            <meta property="og:description" content={props.metaDescription || defaultDescription} />
            <meta property="og:image" content="/images/og-image.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://muzammiljaved.dev/" />
            <meta property="twitter:title" content={props.title || defaultTitle} />
            <meta property="twitter:description" content={props.metaDescription || defaultDescription} />
            <meta property="twitter:image" content="/images/og-image.png" />

            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

            {/* Animation Library */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://muzammiljaved.dev/" />
        </Head>
    );
}
