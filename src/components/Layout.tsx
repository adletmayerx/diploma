import { type ReactNode } from "react";
import { Header } from "~/components";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="flex grow flex-col">{children}</main>
    </>
  );
};

export default Layout;
