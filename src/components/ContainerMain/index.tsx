import { Cont } from "./style";

interface ContProps {
  children: React.ReactNode;
}
const ContainerMain = ({ children }: ContProps) => {
  return <Cont>{children}</Cont>;
};
export default ContainerMain;
