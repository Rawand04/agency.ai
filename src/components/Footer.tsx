import assets from "../assets/assets";
import { NavLinks, SocialMedia } from "../lib/constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Footer = ({ theme }: { theme: string }) => {
  const { t } = useTranslation("common");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 dark:text-white/80"
    >
      {/* top  */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
            alt="logo"
          />
          <p className="max-w-md">{t("footer.description")}</p>

          <ul className="flex gap-8">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <a className="hover:text-primary" href={link.href}>
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* right  */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3 className="font-semibold"> {t("footer.newsletter.title")}</h3>
          <p className="text-sm mt-2 mb-6">
            {t("footer.newsletter.description")}{" "}
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder={t("footer.newsletter.placeholder")}
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200
             bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button className="bg-primary text-white rounded px-6">
              {t("footer.newsletter.button")}{" "}
            </button>
          </div>
        </motion.div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p>{t("footer.copyright")}</p>{" "}
        <div className="flex items-center  justify-between gap-4">
          {SocialMedia.map((link, index) => (
            <a href={link.link} key={index}>
              <img src={link.src} alt={link.name} />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
