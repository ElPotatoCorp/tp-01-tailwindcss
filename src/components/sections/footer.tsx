import { FacebookLogoIcon, TwitterLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import type { FC } from "react";
import { Button } from "../button";
import { Heading } from "../heading";

export const Footer: FC = function () {
  return (
    <footer className="py-10 bg-primary">
      <div className="flex flex-row justify-between px-15 py-10 bg-secondary/7">
        <div className="flex flex-col text-white">
          <Heading as="h2" color="white" size="lg">Açores</Heading>
          <Heading as="span" color="white" size="sm" weight="medium">Joyau perdu dans l'Atlantique</Heading>
        </div>
        <div className="flex self-center gap-7">
          <Button className="px-8" textColor="primary" bgColor="white" shape="pill" size="sm">
            <FacebookLogoIcon weight="bold" size={32} />
          </Button>
          <Button className="px-8" textColor="primary" bgColor="white" shape="pill" size="sm">
            <TwitterLogoIcon weight="bold" size={32} />
          </Button>
          <Button className="px-8" textColor="primary" bgColor="white" shape="pill" size="sm">
            <YoutubeLogoIcon weight="bold" size={32} />
          </Button>
        </div>
      </div>
    </footer>
  );
};