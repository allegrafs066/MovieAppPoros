import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Movielist from "./components/movielist";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full font-[family-name:var(--font-geist-sans)]">
      <div className="absolute top-0 w-full z-10">
        <Navbar></Navbar>
      </div>
      <Landing></Landing>
      <Movielist></Movielist>
      <div className="bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
}
