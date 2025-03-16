import { ComponentPropsWithoutRef, ReactNode } from "react";

type FlexDirection = "row" | "column";

interface FlexContainerProps extends ComponentPropsWithoutRef<"div"> {
  direction?: FlexDirection;
  wrap?: boolean;
  children: ReactNode;
}
const FlexContainer = ({
  children,
  direction = "column",
  wrap = false,
  className = "",
  ...props
}: FlexContainerProps) => {
  const baseClasses = "flex";
  const wrapClass = wrap ? "flex-wrap" : "flex-nowrap";
  const responsiveDirection =
    direction === "row" ? "flex-col md:flex-row" : "flex-col";

  return (
    <div
      className={`${baseClasses} ${wrapClass} ${responsiveDirection} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Subcomponente para layout horizontal responsivo
const FlexRow = ({
  wrap = false,
  className = "",
  ...props
}: Omit<FlexContainerProps, "direction">) => (
  <FlexContainer direction="row" wrap={wrap} className={className} {...props} />
);

// Subcomponente para layout vertical
const FlexCol = ({
  wrap = false,
  className = "",
  ...props
}: Omit<FlexContainerProps, "direction">) => (
  <FlexContainer
    direction="column"
    wrap={wrap}
    className={className}
    {...props}
  />
);

FlexContainer.Row = FlexRow;
FlexContainer.Col = FlexCol;

export default FlexContainer;
