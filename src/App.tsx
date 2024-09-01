import { Header, MainContent, Footer } from "./components";

import "./app.css";

export function App() {
  return (
    <div className="h-screen flex flex-col bg-sky-50">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
