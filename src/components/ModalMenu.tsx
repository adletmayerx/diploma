import React, { useEffect } from "react";
import { Button } from "./shared";
import { MemoCloseIcon, MemoProfileIcon } from "./icons";
import Link from "next/link";
import clsx from "clsx";
import { createPortal } from "react-dom";

type Props = {
  isVisible: boolean;
  onCloseButtonClick: () => unknown;
  pathname: string;
};

const ModalMenu = ({ isVisible, onCloseButtonClick, pathname }: Props) => {
  const LINKS = [
    { href: "/", title: "Главная" },
    { href: "/movies", title: "Фильмы" },
    { href: "/favorites", title: "Сохраненные фильмы" },
    { href: "/profile", title: "Аккаунт" },
  ] as const;
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";

      return;
    }

    document.body.style.overflow = "";
  }, [isVisible]);

  return mounted
    ? createPortal(
        <div
          className={clsx(
            "absolute top-0 left-0 flex h-screen w-full flex-col overflow-hidden",
            !isVisible && "pointer-events-none"
          )}
        >
          <div
            className={clsx(
              "relative flex h-full w-full flex-col items-center justify-start bg-mine-shaft pt-36 pb-24 transition-transform duration-700",
              !isVisible && "translate-x-full"
            )}
          >
            <Button
              className="absolute right-4 top-4"
              onClick={onCloseButtonClick}
            >
              <MemoCloseIcon />
            </Button>
            <ul className="flex h-full flex-col items-center justify-start gap-6">
              {LINKS.map((link) => {
                return (
                  <li
                    key={link.title}
                    className={clsx(
                      "relative cursor-pointer text-lg font-medium text-gray-50",
                      pathname === link.href &&
                        "after:absolute after:top-8 after:left-0 after:h-0.5 after:w-full after:bg-gray-50",
                      link.href === "/profile" && "mt-auto"
                    )}
                  >
                    <Link
                      href={link.href}
                      className={clsx(
                        link.href === "/profile" &&
                          "inline-flex items-center justify-center gap-2"
                      )}
                    >
                      {link.title}{" "}
                      {link.href === "/profile" && <MemoProfileIcon />}
                    </Link>
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
