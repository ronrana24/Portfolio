import Footer from "./footer/Footer";
import Header from "./header/Header";
import { ChildrenProps } from "../common/interfaces";

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
