import * as React from "react";

function RemoveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={8} height={8} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.06 3.882l2.24-2.24L6.239.583l-2.24 2.24L1.76.582.7 1.643l2.239 2.24L.582 6.238l1.06 1.06L4 4.944 6.357 7.3l1.06-1.06L5.06 3.881z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoRemoveIcon = React.memo(RemoveIcon);
export default MemoRemoveIcon;
