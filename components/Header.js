import Link from 'next/link';

const linkStyle = {
  marginRight: 50,
  color: "green",
  textDecoration: "none"
};

const nav = {
  textAlign: 'center'
}

const Header = () => (
  <div style={nav}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
  </div>
);

export default Header;