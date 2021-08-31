import Link from "next/link";
import Image from "next/image";

import { Container, PageCol, IconImg, TypoImg } from "./Header.module.css";

export default function Header() {
  return (
    <header className={Container}>
      <Link
        href="/"
        passHref
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <a>
          <Image name="icon.png" alt="rhymesmaker logo" className={IconImg} />
        </a>
      </Link>
      <Link
        href="/"
        passHref
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <a>
          <Image
            name="logo.png"
            alt="rhymesmaker typo logo"
            className={TypoImg}
          />
        </a>
      </Link>
      <div className={PageCol}>
        <button>Francais</button>
        <p />
      </div>
    </header>
  );
}
