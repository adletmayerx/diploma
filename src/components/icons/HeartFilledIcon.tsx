import * as React from "react";

function HeartFilledIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={12} fill="none" {...props}>
      <path
        d="M10.182 0C8.782 0 7.764.738 7 1.538 6.236.8 5.218 0 3.818 0 1.591 0 0 1.785 0 4c0 1.108.445 2.092 1.273 2.77L7 12l5.727-5.23C13.491 6.03 14 5.107 14 4c0-2.215-1.59-4-3.818-4z"
        fill="#EE3465"
      />
    </svg>
  );
}

const MemoHeartFilledIcon = React.memo(HeartFilledIcon);

export default MemoHeartFilledIcon;
