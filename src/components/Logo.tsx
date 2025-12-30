import type { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 80 80"
      fill="none"
      className="fill-foreground"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M43.5264 5.14551L72.0586 25.875L75.585 28.4375L74.2383 32.584L68.9043 48.998L74.4834 45.9844L78.7607 53.9023L60.8389 63.5859L57.4697 65.3643L57.416 65.4355L55.5859 62.0312L45.9014 44.1104L53.8125 39.8359L57.2148 46.1338L61.4775 33.0205L40 17.416L18.5215 33.0205L26.7256 58.2705L45.667 58.2695L51.7842 70.2705H18.0078L16.6602 66.125L5.76172 32.584L4.41504 28.4375L7.94141 25.875L36.4736 5.14551L40 2.58398L43.5264 5.14551Z"
        fill="white"
      />
    </svg>
  );
};
