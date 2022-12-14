//react-icons
import { SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";
//styles
import styles from "./sidebar.module.css";
//components
import CustomAvatar from "./CustomAvatar";
//hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
//userData
import { userData } from "../../data";
const { sidebar } = userData;

const iconArray = [
  <SiGithub key={0} />,
  <SiLinkedin key={1} />,
  <SiDiscord key={2} />,
];

//social media icons reausable
export const SocialAvatars = (sidebar) => {
  return sidebar.map((social, idx) => {
    if (idx > 2) return;
    const Icon = iconArray[idx];
    return <CustomAvatar key={idx} social={social} Icon={Icon} />;
  });
};

export default function Sidebar() {
  const isMd = useMediaQuery(835);

  return (
    <>
      {!isMd && (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={styles.aside}
        >
          <nav className={!isMd ? styles.nav : styles.atSidebar}>
            {SocialAvatars(sidebar)}
          </nav>
        </motion.aside>
      )}
    </>
  );
}
