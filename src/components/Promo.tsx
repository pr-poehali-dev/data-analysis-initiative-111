import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface PromoProps {
  onOpenModal: () => void;
}

export default function Promo({ onOpenModal }: PromoProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/c9b64e62-c223-4269-a424-7cf5b104dd1c/files/cadf6b3c-cd7a-4d44-9aae-cb8817a6eb3c.jpg"
            alt="Крымский горный маршрут"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg">
        Куда зовёт душа
      </h3>

      <div className="absolute bottom-12 right-6 z-10 text-right">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl mb-6">
          Крымские скалы над морем, рассвет на Байкале, тишина алтайских гор — каждый маршрут создан для тех, кто хочет почувствовать Россию по-настоящему
        </p>
        <button
          onClick={onOpenModal}
          className="inline-block bg-white text-black px-8 py-3 uppercase text-sm tracking-widest font-semibold hover:bg-transparent hover:text-white border border-white transition-all duration-300 cursor-pointer"
        >
          Оставить заявку
        </button>
      </div>
    </div>
  );
}