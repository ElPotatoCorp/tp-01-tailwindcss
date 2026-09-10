import { Benefits } from "./components/sections/benefits";
import { Blog } from "./components/sections/blog";
import { Hero } from "./components/sections/hero";
import { Hotels } from "./components/sections/hotels";
import { Menu } from "./components/sections/menu";
import { Tours } from "./components/sections/tours";

function App() {
  return (
    <div className="font-sans mx-auto">
      <header className="flex flex-col justify-center" >
        <Menu />
        <Hero />
      </header>

      <main className="container flex flex-col gap-5 my-10 mx-auto px-6">
        <Benefits />
        <Tours />
        <Hotels />
        <Blog />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App
