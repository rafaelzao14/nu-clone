import Icon from "react-native-vector-icons/MaterialIcons";
import logo from "../../../assets/Nubank_Logo.png";
import { ContainerHead, Logo, NameUser, Top } from "./style";
const Header = () => {
  return (
    <ContainerHead>
      <Top>
        <Logo source={logo} />
        <NameUser>Rafael</NameUser>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </ContainerHead>
  );
};
export default Header;
