export default function Header() {
  return (
    <header className="sticky z-10 top-0 inset-x-0 select-none">
      <div className="wrapper py-3">
        {/* Ряд с кнопками */}
        <div className="flex gap-3">
          <button
            type="button"
            className="rounded-button w-12 aspect-square bg-white"
          >
            1
          </button>
        </div>

        {/* Ряд с информацией */}
        <div className="mt-2 flex gap-3">
          <div>Info</div>
        </div>
      </div>
    </header>
  );
}
