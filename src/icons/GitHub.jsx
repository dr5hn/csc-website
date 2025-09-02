import { siGithub } from "simple-icons";

export default function GitHubIcon(props) {
  return (
    <svg
      role="img"
      viewBox={`0 0 24 24`} // fixed to 24 so Tailwind scales it
      fill="currentColor"
      aria-label={siGithub.title}
      {...props}
    >
      <path d={siGithub.path} />
    </svg>
  );
}
