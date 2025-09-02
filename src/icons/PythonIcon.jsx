import { siPython } from "simple-icons";

export default function PythonIcon(props) {
  return (
    <svg
      role="img"
      viewBox={`0 0 24 24`} // fixed to 24 so Tailwind scales it
      fill="currentColor"
      aria-label={siPython.title}
      {...props}
    >
      <path d={siPython.path} />
    </svg>
  );
}
