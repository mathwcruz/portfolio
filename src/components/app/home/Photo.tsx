"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.9, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-72 h-72 xl:w-[360px] xl:h-[360px]"
        >
          <Image
            src="/assets/photo.jpg"
            priority
            quality={100}
            fill
            alt=""
            className="object-cover rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
