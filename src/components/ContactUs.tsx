import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import Title from "./shared/Title";
import { motion } from "framer-motion";

const ContactUs = () => {
  const { t } = useTranslation("common");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col gap-8 items-center mt-20 dark:text-white"
    >
      <Title
        title={t("contact.title")}
        description={t("contact.description")}
      />

      <ContactForm />
    </motion.div>
  );
};

export default ContactUs;
