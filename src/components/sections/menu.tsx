import type { FC } from "react";

export const Menu: FC = function () {
  return (
    <nav className="grid grid-cols-5 w-1/2 mx-auto my-10 text-2xl font-semibold text-center">
      <a href="#activites">Activités</a>
      <a href="#experiences">Expériences</a>
      <a href="#" className="font-black">Açores</a>
      <a href="#hotels">Hôtels</a>
      <a href="#spa">Spa</a>
    </nav>
  );
};

