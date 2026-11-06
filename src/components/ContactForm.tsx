import type React from "react";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation("common");
  const onSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "edbfddc0-6857-4f77-9d26-06ef18179836");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      toast.success(t("contact.success"));
    } else {
      toast.error(data.message || t("contact.error"));
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="grid sm:grid-cols-2  gap-3 sm:gap-5 max-w-2xl w-full"
      onSubmit={onSubmit}
    >
      <div>
        <label className="mb-4 text-sm font-medium" htmlFor="name">
          {t("contact.name")}
        </label>
        <div className="flex pl-3 rounded-lg mt-4 border border-gray-300 dark:border-gray-600">
          <img src={assets.person_icon} />
          <input
            type="text"
            placeholder={t("contact.namePlaceholder")}
            className="w-full p-3 text-sm outline-none"
            id="name"
            name="name"
          />
        </div>
      </div>

      <div>
        <label className="mb-4 text-sm font-medium" htmlFor="email">
          {t("contact.email")}
        </label>
        <div className="flex pl-3 rounded-lg mt-4 border border-gray-300 dark:border-gray-600">
          <img src={assets.email_icon} />
          <input
            type="email"
            placeholder={t("contact.emailPlaceholder")}
            className="w-full p-3 text-sm outline-none"
            id="email"
            name="email"
            required
          />
        </div>
      </div>

      <div className="col-span-2">
        <label className="text-sm font-medium" htmlFor="message">
          {t("contact.message")}
        </label>
        <textarea
          rows={8}
          placeholder={t("contact.messagePlaceholder")}
          className="w-full p-3 text-sm outline-none  pl-3 mt-4 rounded-lg border border-gray-300 dark:border-gray-600"
          id="message"
          name="message"
          required
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-primary text-white flex w-max gap-2 text-sm px-10 py-3 cursor-pointer hover:scale-103 transition-all"
      >
        {t("contact.submit")}{" "}
        <img src={assets.arrow_icon} alt="submit" className="w-4" />
      </button>
    </motion.form>
  );
};

export default ContactForm;
