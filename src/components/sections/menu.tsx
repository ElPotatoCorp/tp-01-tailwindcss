import type { FC } from "react";

export const Menu: FC = function () {
  return (
    <nav className="sm:grid sm:grid-cols-5 flex justify-center w-1/2 mx-auto my-10 text-2xl font-semibold">
      <a href="#activites" className="hidden sm:block">Activités</a>
      <a href="#experiences" className="hidden sm:block">Expériences</a>
      <a href="#" className="font-black self-center">Açores</a>
      <a href="#hotels" className="hidden sm:block">Hôtels</a>
      <a href="#spa" className="hidden sm:block">Spa</a>
    </nav>
  );
};

