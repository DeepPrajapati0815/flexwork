import { Box, Divider } from "@chakra-ui/react";
import { useContext, useEffect } from "react";

import FreelancerEducationSection from "../../components/FreelancerProfileComponents/FreelancerEducation/FreelancerEducationSection";
import FreelancerExperienceSection from "../../components/FreelancerProfileComponents/FreelancerExperience/FreelancerExperienceSection";
import FreelancerPortfolioSection from "../../components/FreelancerProfileComponents/FreelancerPortfolio/FreelancerPortfolioSection";
import FreelancerProfileHeader from "../../components/FreelancerProfileComponents/FreelancerProfileHeader/FreelancerProfileHeader";
import FreelancerProfileAbout from "../../components/FreelancerProfileComponents/FreelancerProfileSection/FreelancerProfileAbout";
import FreelancerProfileCatalog from "../../components/FreelancerProfileComponents/FreelancerProjectCatalog/FreelancerProjectCatalog";
import FreelancerSkill from "../../components/FreelancerProfileComponents/FreelnacerSkill/FreelancerSkill";
import { FlexWorkContext } from "../../context/ContextStore";
import axios from "../../utils/axiosInstance";

const FreelancerProfilePage = () => {
  const { setFreelancerProfile, user, freelancerProfile } =
    useContext(FlexWorkContext);

  const getProfileData = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/freelancer/profile/${user._id}`
      );
      const { _id, title, description, skills } = data.data;
      setFreelancerProfile({
        ...freelancerProfile,
        skills,
        _id,
        title,
        description,
        userId: user._id,
      });
    } catch (error) {}
  };

  useEffect(() => {
    setFreelancerProfile({ ...freelancerProfile, userId: user._id });
    getProfileData();
  }, [user]);

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
      <FreelancerProfileCatalog />
      <Divider />
      <FreelancerEducationSection />
      <Divider />
      <FreelancerExperienceSection />
    </Box>
  );
};

export default FreelancerProfilePage;
