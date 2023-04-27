import { Box, Divider } from "@chakra-ui/react";
import React from "react";

import FreelancerEducationSection from "../../components/FreelancerProfileComponents/FreelancerEducation/FreelancerEducationSection";
import FreelancerExperienceSection from "../../components/FreelancerProfileComponents/FreelancerExperience/FreelancerExperienceSection";
import FreelancerPortfolioSection from "../../components/FreelancerProfileComponents/FreelancerPortfolio/FreelancerPortfolioSection";
import FreelancerProfileHeader from "../../components/FreelancerProfileComponents/FreelancerProfileHeader/FreelancerProfileHeader";
import FreelancerProfileAbout from "../../components/FreelancerProfileComponents/FreelancerProfileSection/FreelancerProfileAbout";
import FreelancerSkill from "../../components/FreelancerProfileComponents/FreelnacerSkill/FreelancerSkill";
import FreelancerProjectCatalog from "../../components/FreelancerProfileComponents/FreelancerProjectCatalog/FreelancerProjectCatalog";

const FreelancerProfilePage = () => {
  return (
    <Box
      w={"90vw"}
      p={5}
      margin={"auto"}
      my={10}
      background={"#1a202c"}
      rounded={"2xl"}
    >
      <FreelancerProfileHeader />
      <Divider color={"gray.900"} />
      <FreelancerProfileAbout />
      <Divider />
      <FreelancerPortfolioSection />

      <Divider />
      <FreelancerSkill></FreelancerSkill>
      <Divider />
      <FreelancerProjectCatalog />
      <Divider />
      <FreelancerEducationSection />
      <Divider />
      <FreelancerExperienceSection />
    </Box>
  );
};

export default FreelancerProfilePage;
