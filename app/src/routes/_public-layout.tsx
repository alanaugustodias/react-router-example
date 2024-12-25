import Footer from "@gca-web-app/components/src/Footer";
import Header from "@gca-web-app/components/src/Header";
import { Outlet } from "react-router";

export default function PublicLayout() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <article className="flex flex-grow w-screen items-center justify-center">
        <div className="h-max w-screen-lg">
          <Outlet />
        </div>
      </article>
      <Footer />
    </main>
  );
}
