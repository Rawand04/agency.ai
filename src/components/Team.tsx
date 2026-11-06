import { teamData } from "../assets/assets";
import Title from "./shared/Title";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Team = () => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-8 justify-center items-center mt-20 dark:text-white"
    >
      <Title title={t("team.title")} description={t("team.description")} />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((member, index) => (
          <TeamCard member={member} key={index} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Team;
