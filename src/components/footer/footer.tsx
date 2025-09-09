import { useState } from "react";
import { motion } from "framer-motion";
import { useUIStore } from "../../store/useStore";

const tabs = [
  { id: "1", label: "Сегодня" },
  { id: "2", label: "Календарь" },
];

export default function Footer() {
  const { setOpenBottomSheet, setContentKey } = useUIStore();

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <footer className="select-none">
      <div className="wrapper pt-3 pb-8">
        <div className="flex items-center gap-3">
          {/* Панель с кнопками */}
          <div className="w-full mx-auto flex space-x-1 bg-gray-200 border-y-2 border-t-gray-300 border-b-gray-50 rounded-full py-[3px] pl-[4px] pr-[5px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full w-full rounded-button px-4 pt-2 pb-[11px] -translate-y-[1px] ${
                  activeTab === tab.id
                    ? "text-gray-800"
                    : "text-gray-700 hover:text-black/60"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-gray-50 border-y border-t-white border-b-gray-300 rounded-full shadow"
                    transition={{ type: "spring", bounce: 0.1, duration: 0.2 }}
                  />
                )}
                <span
                  className={`${tab.id === "1" && "text-xl"} relative z-20`}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setOpenBottomSheet(true);
              setContentKey("list");
            }}
            type="button"
            className="rounded-button !w-13 !h-13 aspect-square bg-gray-50 border-y-2 border-t-white border-b-gray-300 shadow mb-1 text-gray-500 text-3xl pb-1.5"
          >
            +
          </button>
        </div>
      </div>
    </footer>
  );
}
