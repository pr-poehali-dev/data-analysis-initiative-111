interface HeaderProps {
  className?: string;
  onOpenModal: () => void;
}

export default function Header({ className, onOpenModal }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">По России с любовью</div>
        <nav className="flex gap-8 items-center">
          <a
            href="#tours"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Туры
          </a>
          <button
            onClick={onOpenModal}
            className="text-white bg-white/20 hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm px-4 py-2 border border-white cursor-pointer tracking-wide"
          >
            Оставить заявку
          </button>
        </nav>
      </div>
    </header>
  );
}