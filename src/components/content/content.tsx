import { useUIStore } from "../../store/useStore";
import List from "./list";
import BottomSheet from "../ui/bottom-sheet";
import type { ReactNode } from "react";

export default function Content() {
  const { openBottomSheet, setOpenBottomSheet, contentKey } = useUIStore();

  const handleClose = () => {
    setOpenBottomSheet(false);
  };

  const modalContent: Record<string, ReactNode> = {
    list: <List setOpenBottomSheet={setOpenBottomSheet} />,
  };

  return (
    <>
      <section className="max-w-4xl px-3 overflow-y-auto">Контент</section>

      <BottomSheet
        open={openBottomSheet}
        onClose={handleClose}
        modalContent={modalContent}
        contentKey={contentKey}
      />
    </>
  );
}
