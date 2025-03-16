import { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImgProps extends Omit<ImageProps, "width" | "height"> {
  size?: number;
  lazy?: boolean;
  dimensionType?: "width" | "height";
}

const getImageDimensions = (
  src: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = (error) => {
      reject(error);
    };
  });
};

const Img = (props: ImgProps) => {
  const {
    size,
    dimensionType = "width",
    src,
    alt,
    className,
    style,
    lazy = true,
    quality = 75,
    ...rest
  } = props;
  const [dimensions, setDimensions] = useState<{
    width?: number;
    height?: number;
  }>({});

  useEffect(() => {
    if (src && typeof src === "string") {
      getImageDimensions(src)
        .then(({ width, height }) => {
          if (dimensionType === "width" && size) {
            setDimensions({
              width: size,
              height: (size / width) * height,
            });
          } else if (dimensionType === "height" && size) {
            setDimensions({
              width: (size / height) * width,
              height: size,
            });
          }
        })
        .catch((error) => {
          console.error("Failed to load image dimensions:", error);
        });
    }
  }, [src, size, dimensionType]);

  if (!dimensions.width || !dimensions.height) {
    return null; // Ou um placeholder enquanto a imagem é carregada
  }

  return (
    <Image
      {...rest}
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      loading={lazy ? "lazy" : "eager"}
      quality={quality}
      className={`object-cover ${className}`}
      style={style}
    />
  );
};

export default Img;
