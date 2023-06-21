import * as React from "react";

function MenuBurgerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={43} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 15H9v-2.5h22V15zM31 24H9v-2.5h22V24zM31 33H9v-2.5h22V33z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoMenuBurgerIcon = React.memo(MenuBurgerIcon);
export default MemoMenuBurgerIcon;
