import type { FC } from "react";

export const Menu: FC = function () {
  return (
    <nav className="md:grid md:grid-cols-5 flex justify-center text-center w-3/4 mx-auto my-10 text-2xl font-semibold">
      <a href="#activites" className="hidden md:block">Activités</a>
      <a href="#experiences" className="hidden md:block">Expériences</a>
      <a href="#" className="font-black self-center">Açores</a>
      <a href="#hotels" className="hidden md:block">Hôtels</a>
      <a href="#spa" className="hidden md:block">Spa</a>
    </nav>
  );
};

