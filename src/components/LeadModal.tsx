import { useState } from "react";
import Icon from "@/components/ui/icon";

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LeadModal({ open, onClose }: LeadModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [direction, setDirection] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        {submitted ? (
          <div className="p-10 text-center">
            <Icon name="CheckCircle" size={48} className="mx-auto mb-4 text-black" />
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-tight">Заявка принята!</h2>
            <p className="text-neutral-500 text-sm">Мы свяжемся с вами в ближайшее время и подберём идеальный тур.</p>
          </div>
        ) : (
          <div className="p-8 sm:p-10">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-1">Подобрать тур</h2>
            <p className="text-neutral-500 text-sm mb-8">Оставьте контакты — мы позвоним и расскажем о лучших маршрутах</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs uppercase tracking-wide text-neutral-500 mb-1 block">Ваше имя</label>
                <input
                  type="text"
                  required
                  placeholder="Иван Иванов"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wide text-neutral-500 mb-1 block">Телефон</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 900 000-00-00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wide text-neutral-500 mb-1 block">Направление</label>
                <select
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
                  className="w-full border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors bg-white text-neutral-700"
                >
                  <option value="">Выберите направление</option>
                  <option value="crimea">Крым</option>
                  <option value="sochi">Сочи и Краснодарский край</option>
                  <option value="baikal">Байкал</option>
                  <option value="karelia">Карелия</option>
                  <option value="altai">Алтай</option>
                  <option value="other">Другое / Не знаю</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-2 bg-black text-white uppercase text-sm tracking-widest py-3 px-6 hover:bg-neutral-800 transition-colors font-semibold"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
