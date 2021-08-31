import Header from "./Header";
import Footer from "./Footer";

import "./layout.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="MainPage">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
