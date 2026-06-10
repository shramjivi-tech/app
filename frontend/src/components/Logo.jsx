import { LOGO_URL } from "../data/mock";

export default function Logo({ height = 44, dark = false }) {
  // The logo is a wide banner (orange circle icon + green "Shramjivi" text + tagline).
  // We display the full logo at a fixed height with object-contain so nothing is cropped.
  return (
    <img
      src={LOGO_URL}
      alt="Shramjivi — Honouring Labour. Empowering Lives."
      style={{ height }}
      className={`w-auto object-contain ${dark ? "" : ""}`}
    />
  );
}
