import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <div className="sticky-bar">
          <Link className = "stickyLink" href="/action_menu">Action Menu</Link>
          <Link className = "stickyLink" href="/employee">Employee</Link>
          <Link className = "stickyLink" href="/driver">Driver</Link>
          <Link className = "stickyLink" href="/product">Product</Link>
          <Link className = "stickyLink" href="/service">Service</Link>
          <Link className = "stickyLink" href="/location">Location</Link>
          <Link className = "stickyLink" href="/owner">Owner</Link>
        </div>


        <main>{children}</main>
      </body>
    </html>
  );
}
