import Book from "./components/Book";
import Content from "./components/Content";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Book />
      <Content />
    </div>
  );
}
