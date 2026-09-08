import { Hero } from "./components/sections/hero";
import { Menu } from "./components/sections/menu";

function App() {
  return (
    <div className="debug font-sans mx-auto">
      <header className="flex flex-col justify-center" >
        <Menu />
        <Hero />
      </header>

      <main className="container mx-auto px-6">
        {/* <Benefits /> */}
        {/* <Tours /> */}
        {/* <Hotels /> */}
        {/* <Blog /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App
