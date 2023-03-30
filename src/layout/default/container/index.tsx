import { FC } from "react";
import DefaultLayoutHeader from "../header";

interface IProps {
  children: React.ReactNode;
}

const DefaultLayoutContainer: FC<IProps> = ({ children }) => {
  return (
    <>
      <DefaultLayoutHeader />
      {children}
    </>
  );
};

export default DefaultLayoutContainer;
