import { useTranslation } from "react-i18next";
import { WorkData } from "../lib/constants";
import Title from "./shared/Title";
import WorkCard from "./WorkCard";
import { motion } from "framer-motion";

const OurWork = () => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="flex flex-col items-center gap-8 px-4 sm:px-12 lg:px-24 
      xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title title={t("work.title")} description={t("work.description")} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {WorkData.map((work, index) => (
          <WorkCard work={work} key={index} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
