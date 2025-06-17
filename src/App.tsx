import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-neutral-900">
      <div className="flex flex-col p-4 justify-center items-center bg-white rounded-md">
        <nav>
          <ul className="flex gap-2">
            {tabs.map((item) => (
              <motion.li
                key={item.label}
                initial={false}
                onClick={() => setSelectedTab(item)}
                className={clsx(
                  "flex flex-col text-black p-2 text-xs rounded-md transition-all duration-300 cursor-pointer",
                  item === selectedTab ? "bg-gray-200" : ""
                )}
              >
                {item.icon} {item.label}
                {item === selectedTab ? (
                  <motion.div
                    id="underline"
                    layoutId="underline"
                    className="w-full bg-black/80 h-[1px]"
                  />
                ) : null}
              </motion.li>
            ))}
          </ul>
        </nav>
        <main className="">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              key={selectedTab ? selectedTab.label : "empty"}
              className="text-8xl mt-10"
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

/**
 * ===============   Data   ============
 */

const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const [tomato, lettuce, cheese, Blueberries] = allIngredients;
const tabs = [tomato, lettuce, cheese, Blueberries];
