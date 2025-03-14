import * as MdIcons from "react-icons/md";

// Tipagem das chaves dos ícones
export type IconName = keyof typeof MdIcons;

// Função para obter o ícone pelo nome
export const getIcon = (iconName: IconName) => {
  return MdIcons[iconName];
};
