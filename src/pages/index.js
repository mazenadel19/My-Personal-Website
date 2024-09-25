import React from "react";
import {
  AboutSection,
  ArticlesSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import Banner from '../components/banners/ceasefire'

import "./index.css"

export default function IndexPage() {
  return (
    <>
      <Seo title="Mazen Emam" />
      <Banner/>
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ProjectsSection sectionId="projects" heading="My Side Projects" />
      </Page>
    </>
  );
}
