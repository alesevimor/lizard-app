import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/knowledge">
      <a style={linkStyle}>Knowledge</a>
    </Link>
    <Link href="/new-additions">
      <a style={linkStyle}>New additions</a>
    </Link>
  </div>
);

export default Header;