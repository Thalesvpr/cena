export type Unit = "px" | "rem" | "em" | "%" | "vh" | "vw";
export type Size = number | `${number}${Unit}`;
export type Weight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";
export type DeviceType = "mobile" | "tablet" | "desktop" | "unknown";
