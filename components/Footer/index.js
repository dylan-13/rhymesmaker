import "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()}, rhymesmaker built with
      {` `}
      <a href="https://nextjs.org">Next Js</a>
    </footer>
  );
}
