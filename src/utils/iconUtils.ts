import * as MdIcons from "react-icons/md";
import * as TiIcons from "react-icons/ti";
import * as Fa6Icons from "react-icons/fa6";

// Tipagem das chaves dos ícones (MdIcons e TiIcons)
export type IconName =
  | keyof typeof MdIcons
  | keyof typeof TiIcons
  | keyof typeof Fa6Icons;

// Função para obter o ícone pelo nome
export const getIcon = (iconName: IconName) => {
  if (iconName in TiIcons) {
    return TiIcons[iconName as keyof typeof TiIcons];
  }
  if (iconName in Fa6Icons) {
    return Fa6Icons[iconName as keyof typeof Fa6Icons];
  }
  return MdIcons[iconName as keyof typeof MdIcons];
};
