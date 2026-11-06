import { useTranslation } from "react-i18next";
import assets from "../../assets/assets";
import { ServicesData } from "../../lib/constants";
import Title from "../shared/Title";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="flex flex-col gap-10 mt-10 items-center w-full relative"
    >
      <img
        src={assets.bgImage2}
        alt="bg2"
        className="absolute -z-1 -top-110 -left-70 dark:hidden"
      />

      <Title
        title={t("services.title")}
        description={t("services.description")}
      />

      <div className="flex justify-center flex-wrap">
        {ServicesData.map((service, index) => (
          <div key={index} className="">
            <ServiceCard service={service} index={index} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
