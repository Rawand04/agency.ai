import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type TeamCardProps = {
  member: { name: string; title: string; image: string };
  index: number;
};

const TeamCard = ({ member, index }: TeamCardProps) => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex max-sm:flex-col items-center gap-5 p-4 border border-gray-100 dark:border-gray-700
     dark:bg-gray-900 shadow-xl shadow-gray-100 bg-white rounded-2xl dark:shadow-white/5 hover:scale-103 transition-all duration-400"
    >
      <img
        src={member.image}
        alt={t(member.name)}
        className="rounded-full w-12 h-12"
      />
      <div className="flex flex-col gap-1">
        <p className="font-bold text-sm">{t(member.name)}</p>
        <p className="text-xs opacity-60">{t(member.title)}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
