import { JSX } from "preact";

type Props = {
  size?: number | string;
  fill?: string;
};

export default function ZennIcon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        enableBackground: "new 0 0 88.3 88.3",
      }}
      viewBox="0 0 88.3 88.3"
      width={props.size}
      height={props.size}
    >
      <g fill={props.fill}>
        <path
          d="M3.9 83.3h17c.9 0 1.7-.5 2.2-1.2L69.9 5.2c.6-1-.1-2.2-1.3-2.2H52.5c-.8 0-1.5.4-1.9 1.1L3.1 81.9c-.3.6.1 1.4.8 1.4zM62.5 82.1l22.1-35.5c.7-1.1-.1-2.5-1.4-2.5h-16c-.6 0-1.2.3-1.5.8L43 81.2c-.6.9.1 2.1 1.2 2.1h16.3c.8 0 1.6-.4 2-1.2z"
          className="st0"
        />
      </g>
    </svg>
  );
}
