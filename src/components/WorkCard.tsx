import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type WorkCardProps = {
  work: { title: string; description: string; image: string };
  index: number;
};

const WorkCard = ({ work, index }: WorkCardProps) => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col gap-6 hover:scale-102 duration-500 transition-all cursor-pointer"
    >
      <img src={work.image} alt={t(work.title)} />
      <div>
        <h3 className="font-semibold! mt-3 mb-2 text-lg"> {t(work.title)}</h3>
        <p className="text-sm opacity-60 w-5/6"> {t(work.description)}</p>
      </div>
    </motion.div>
  );
};

export default WorkCard;
