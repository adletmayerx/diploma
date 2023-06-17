import React, { useEffect } from "react";
import { Button } from "./shared";
import { MemoCloseIcon } from "./icons";
import Link from "next/link";
import clsx from "clsx";
import { createPortal } from "react-dom";

type Props = {
  onClose: () => unknown;
  title: string;
};

const ModalMenu = () => {
  const LINKS = [
    { href: "/", title: "Главная" },
    { href: "/movies", title: "Фильмы" },
    { href: "/favorites", title: "Сохраненные фильмы" },
  ];

  const active = "/movies";

  const [mounted, setMounted] = React.useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  });

  return mounted
    ? createPortal(
        <div className="absolute top-0 left-0 flex h-screen w-screen flex-col">
          <div className="relative flex h-full w-full flex-col items-center justify-start bg-mine-shaft pt-36">
            <Button className="absolute right-4 top-4">
              <MemoCloseIcon />
            </Button>
            <ul className="flex flex-col items-center justify-start gap-6">
              {LINKS.map((link) => {
                return (
                  <li
                    key={link.title}
                    className={clsx(
                      "relative cursor-pointer text-lg font-medium text-gray-50",
                      active === link.title &&
                        "after:absolute after:top-4 after:h-px after:w-full after:bg-gray-50"
                    )}
                  >
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default ModalMenu;
