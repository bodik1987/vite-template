import { useUIStore } from "../../store/useStore";

export default function Footer() {

    const { setOpenBottomSheet, setContentKey } = useUIStore();

  return (
    <footer className="select-none">
      <div className="wrapper pt-3 pb-8">
        <div className="flex items-center gap-3">
          <div className="flex gap-3 w-full bg-white rounded-full p-1.5">
            <button type="button" className="rounded-button w-full text-accent">
              Кнопка 1
            </button>
            <button
              type="button"
              className="rounded-button w-full bg-accent text-white"
            >
              Кнопка 2
            </button>
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
