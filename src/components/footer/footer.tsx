import { useState } from "react";
import { motion } from "framer-motion";
import { useUIStore } from "../../store/useStore";

const tabs = [
  { id: "element_1", label: "Кнопка 1" },
  { id: "element_2", label: "Кнопка 2" },
];

export default function Footer() {
  const { setOpenBottomSheet, setContentKey } = useUIStore();

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <footer className="select-none">
      <div className="wrapper pt-3 pb-8">
        <div className="flex items-center gap-3">
          {/* Панель с кнопками */}
          <div className="w-full mx-auto flex space-x-1 bg-gray-200 rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full w-full rounded-button px-4 py-2 ${
                  activeTab === tab.id
                    ? "text-black" // активная кнопка → текст черный
                    : "text-gray-700 hover:text-black/60"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-white rounded-full shadow"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20">{tab.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setOpenBottomSheet(true);
              setContentKey("list");
            }}
            type="button"
            className="rounded-button w-12 aspect-square bg-accent text-white"
          >
            +
          </button>
        </div>
      </div>
    </footer>
  );
}
