import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-yellow py-4">
      <div className="container mx-auto">
        <div className="flex flex-row">
          <Link to="/">
            <div className="px-4">
              <p className="text-white capitalize">Home</p>
            </div>
          </Link>
          <Link to="/carros">
            <div className="px-4">
              <p className="text-white capitalize">Cars</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
