import { FacebookLogoIcon, TwitterLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import type { FC } from "react";
import { Button } from "../button";

export const Footer: FC = function () {
  return (
    <footer className="py-10 bg-primary">
      <div className="flex flex-row justify-between px-15 py-10 bg-secondary/7">
        <div className="flex flex-col text-white">
          <span className="text-5xl font-semibold">Açores</span>
          <span className="text-xl font-medium">Joyau perdu dans l'Atlantique</span>
        </div>
        <div className="flex self-center gap-7">
          <Button className="px-8" textColor="primary" bgColor="white" shape="pill" size="sm">
            <FacebookLogoIcon size={32} />
          </Button>
          <Button className="px-8" textColor="primary" bgColor="white" shape="pill" size="sm">
            <TwitterLogoIcon size={32} />
          </Button>
          <Button className="px-8" textColor="primary" bgColor="white" shape="pill" size="sm">
            <YoutubeLogoIcon size={32} />
          </Button>
        </div>
      </div>
    </footer>
  );
};