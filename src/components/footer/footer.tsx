import { Button } from "@heroui/react";
import { useUIStore } from "../../store/useStore";
import { Tabs, Tab } from "@heroui/tabs";

export default function Footer() {
  const { setOpenBottomSheet, setContentKey } = useUIStore();

  return (
    <footer className="select-none">
      <div className="wrapper pt-3 pb-8">
        <div className="w-full flex items-center gap-3">
          {/* Панель с кнопками
          <div className="flex gap-3 w-full bg-gray-200 rounded-full p-[2px]">
            <button
              type="button"
              className="rounded-button w-full text-gray-600"
            >
              Кнопка 1
            </button>
            <button
              type="button"
              className="rounded-button w-full bg-white border border-[#D7D7D8] shadow"
            >
              Кнопка 2
            </button>
          </div> */}

          <div className="flex w-full flex-col">
            <Tabs radius="full" fullWidth aria-label="Options" size="lg">
              <Tab key="1" title="Кнопка 1" className="h-11"></Tab>
              <Tab key="2" title="Кнопка 2" className="h-11"></Tab>
            </Tabs>
          </div>
          <Button
            onPress={() => {
              setOpenBottomSheet(true);
              setContentKey("list");
            }}
            type="button"
            radius="full"
            variant="light"
            isIconOnly
            className="w-13 h-11 aspect-square bg-accent text-white"
          >
            +
          </Button>
        </div>
      </div>
    </footer>
  );
}
