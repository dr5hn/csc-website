import { siX } from "simple-icons";

export default function XIcon(props) {
  return (
    <svg
      role="img"
      viewBox={`0 0 24 24`} // fixed to 24 so Tailwind scales it
      fill="currentColor"
      aria-label={siX.title}
      {...props}
    >
      <path d={siX.path} />
    </svg>
  );
}
