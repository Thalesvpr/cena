import React, { useState } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Button } from "./Button";

// Subcomponente: Wrapper
interface WrapperProps {
  followKeyboard?: boolean;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({
  followKeyboard = false,
  children,
}) => {
  const backgroundColor = useThemeColor("surfaceContainerHigh");

  return (
    <div
      className={`w-full flex flex-row gap-4 items-center bg-[${backgroundColor}]`}
    >
      {children}
    </div>
  );
};

// Subcomponente: Container
interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const backgroundColor = useThemeColor("surfaceContainer");

  return (
    <div
      className={`flex-1 flex flex-row items-center rounded-full bg-[${backgroundColor}] p-2`}
    >
      {children}
    </div>
  );
};

// Subcomponente: Field
interface FieldProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const Field: React.FC<FieldProps> = ({ placeholder, value, onChangeText }) => {
  const color = useThemeColor("onSurface");
  const placeholderColor = useThemeColor("outlineVariant"); // Renomeado para placeholderColor

  return (
    <input
      className={`flex-1 h-10 border-0 bg-transparent rounded-full px-3 placeholder-[${placeholderColor}]`}
      style={{ color }} // Aplica a cor do texto
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeText(e.target.value)}
    />
  );
};

// Componente principal: InputBar
interface InputBarProps {
  onSearch: (text: string) => void;
  followKeyboard?: boolean;
}

export const InputBar: React.FC<InputBarProps> & {
  Wrapper: React.FC<WrapperProps>;
  Container: React.FC<ContainerProps>;
  Field: React.FC<FieldProps>;
} = ({ onSearch, followKeyboard = false }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <InputBar.Wrapper followKeyboard={followKeyboard}>
      <InputBar.Container>
        <InputBar.Field
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </InputBar.Container>
      <Button icon="MdSearch" onPress={handleSearch} />
    </InputBar.Wrapper>
  );
};

// Associando subcomponentes ao InputBar
InputBar.Wrapper = Wrapper;
InputBar.Container = Container;
InputBar.Field = Field;
