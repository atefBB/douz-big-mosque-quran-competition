import { Header, MainContent, Footer } from "./components";

import "./app.css";

export function App() {
  return (
    <div className="h-full flex flex-col bg-sky-50">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
