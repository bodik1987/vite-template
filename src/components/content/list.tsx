type ListProps = {
  setOpenBottomSheet: (value: boolean) => void;
};

export default function List({ setOpenBottomSheet }: ListProps) {
  return (
    <div className="mt-3">
      <div className="max-h-[80vh] overflow-y-auto">
        <p className="h-[2000px] bg-white rounded-2xl">List</p>
      </div>

      <button type="button" onClick={() => setOpenBottomSheet(false)}>
        Закрыть
      </button>
    </div>
  );
}
