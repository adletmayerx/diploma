import * as React from "react";

function LinkArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 17" fill="none" {...props}>
      <path
        d="M2.607 16.524L.945 14.862 13.303 2.483H3.757L3.778.182h13.488V13.69h-2.323l.021-9.545-12.357 12.38z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoLinkArrowIcon = React.memo(LinkArrowIcon);
export default MemoLinkArrowIcon;
