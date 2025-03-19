type Unit = "px" | "rem" | "em" | "%" | "vh" | "vw";
type Size = number | `${number}${Unit}`;
type Weight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";
type DeviceType = "mobile" | "tablet" | "desktop" | "unknown";
