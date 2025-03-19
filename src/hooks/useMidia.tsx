import { useState, useEffect } from "react";

const useMedia = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>("unknown");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setDeviceType("mobile");
      } else if (width >= 768 && width < 1024) {
        setDeviceType("tablet");
      } else if (width >= 1024) {
        setDeviceType("desktop");
      } else {
        setDeviceType("unknown");
      }
    };

    // Verifica o tipo de dispositivo ao montar o componente
    handleResize();

    // Adiciona um listener para o evento de redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};

export default useMedia;
