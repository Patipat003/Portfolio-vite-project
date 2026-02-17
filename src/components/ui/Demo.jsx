import { FaExternalLinkAlt } from "react-icons/fa";

export const Demo = (url) => ({
  link: url,
  label: (
    <span className="flex items-center gap-2 text-cyan-500">
      <FaExternalLinkAlt />
      Live Demo
    </span>
  ),
});
