import { useTranslation } from "react-i18next";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation("common");
  return (
    <div
      id="hero"
      className="flex flex-col gap-6 justify-center items-center py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center
    overflow-hidden w-full text-gray-700 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="flex gap-2 rounded-full p-2 border border-gray-300 justify-center items-center "
      >
        <img src={assets.group_profile} alt="people" height={20} width={75} />
        <p className="text-[12px]"> {t("hero.trustedPeople")}</p>
      </motion.div>
      {/* hero title  */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="font-semibold text-4xl md:text-5xl xl:text-[80px] xl:leading[95px]"
      >
        {t("hero.titleBefore")}{" "}
        <span className="bg-linear-to-r from-[#574bff] to-[#42D6FF] inline-block bg-clip-text text-transparent">
          {t("hero.titleHighlight")}
        </span>{" "}
        {t("hero.titleAfter")}
      </motion.h1>
      {/* hero subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-[12px] md:text-[16px] xl:text-[18px]"
      >
        {t("hero.description")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img src={assets.hero_img} alt="hero" className="max-w-6xl w-full" />
        <img
          src={assets.bgImage1}
          alt="bg"
          className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
