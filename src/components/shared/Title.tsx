import { motion } from "framer-motion";

type TitleProps = {
  title: string;
  description: string;
};

const Title = ({ title, description }: TitleProps) => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-medium  dark:text-white/75"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6"
      >
        {description}
      </motion.p>
    </>
  );
};

export default Title;
