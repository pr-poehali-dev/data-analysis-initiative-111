import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/c9b64e62-c223-4269-a424-7cf5b104dd1c/files/61429102-6036-4e60-9e7a-add2733033ac.jpg"
          alt="Крым — скалы и море"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          КРЫМ И РОССИЯ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Авторские туры по самым живописным уголкам — от крымских скал до просторов Сибири
        </p>
        <button
          onClick={onOpenModal}
          className="inline-block mt-8 bg-white text-black px-8 py-3 uppercase text-sm tracking-widest font-semibold hover:bg-transparent hover:text-white border border-white transition-all duration-300 cursor-pointer"
        >
          Оставить заявку
        </button>
      </div>
    </div>
  );
}
