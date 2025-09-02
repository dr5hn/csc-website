import { siKaggle } from "simple-icons";

export default function KaggleIcon(props) {
  return (
    <svg
      role="img"
      viewBox={`0 0 24 24`} // fixed to 24 so Tailwind scales it
      fill="currentColor"
      aria-label={siKaggle.title}
      {...props}
    >
      <path d={siKaggle.path} />
    </svg>
  );
}
