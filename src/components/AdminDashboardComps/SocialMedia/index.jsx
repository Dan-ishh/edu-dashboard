import React from "react";
import { Box, Typography } from "@mui/material";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Insta from "@/assets/images/insta.png";
import Twitter from "@/assets/images/twitter.png";
import Facebook from "@/assets/images/fb.png";
import Linkedin from "@/assets/images/linkedin.png";
import styles from "./SocialMedia.module.scss";

// Icon map for each social media platform
const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Insta,
  linkedin: Linkedin,
};

const bgMap = {
  facebook: "#1877F2",
  twitter: "#1D9BF0",
  instagram: "#FE643B",
  linkedin: "#0A66C2",
};

const SocialMediaCard = ({ platform, followers }) => {
  return (
    <Box
      className={`${styles.socialMediaCard} ${styles[platform]}`}
      style={{ background: `${bgMap[platform]}` }}
    >
      <Box className={styles.socialMediaInfo}>
        <Typography className={styles.platform}>{`${
          platform === "facebook" ? "Like" : "Follow"
        } us on ${platform}`}</Typography>
        <Typography className={styles.followers}>{followers}</Typography>
      </Box>
      <img className={styles.icon} src={iconMap[platform]} />
    </Box>
  );
};

export default SocialMediaCard;
