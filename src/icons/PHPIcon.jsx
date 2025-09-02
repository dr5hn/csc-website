import { siPhp } from "simple-icons";

export default function PHPIcon(props) {
  return (
    <svg
      role="img"
      viewBox={`0 0 24 24`} // fixed to 24 so Tailwind scales it
      fill="currentColor"
      aria-label={siPhp.title}
      {...props}
    >
      <path d={siPhp.path} />
    </svg>
  );
}
