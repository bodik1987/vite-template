import { HeroUIProvider } from "@heroui/react";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export default function App() {
  return (
    <HeroUIProvider>
      <main className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
        <Header />
        <Content />
        <Footer />
      </main>
    </HeroUIProvider>
  );
}
