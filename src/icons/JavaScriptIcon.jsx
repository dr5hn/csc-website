import { siJavascript } from "simple-icons";

export default function JavaScriptIcon(props) {
  return (
    <svg
      role="img"
      viewBox={`0 0 24 24`} // fixed to 24 so Tailwind scales it
      fill="currentColor"
      aria-label={siJavascript.title}
      {...props}
    >
      <path d={siJavascript.path} />
    </svg>
  );
}
