import { useTranslation } from "react-i18next";
import { company_logos } from "../assets/assets";
import { motion } from "framer-motion";

const TrustedBy = () => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col dark:text-white/80 items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-semibold "
      >
        {t("trustedCompanies.title")}
      </motion.h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-10 flex-wrap m-4"
      >
        {company_logos.map((item, index) => (
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            src={item}
            key={index}
            alt="company"
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TrustedBy;
