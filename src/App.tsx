import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-zinc-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc overflow-x-clip pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-apple_system">
      <Header />
      <Hero />
      <Footer />
      <div className="box-border caret-transparent"></div>
      <img
        src="https://c.animaapp.com/mmaw5r5q6lUknB/assets/icon-44.svg"
        alt="Icon"
        className="box-border caret-transparent hidden align-baseline"
      />
      <div className="box-border caret-transparent">
        <div className="caret-transparent"></div>
      </div>
      <div className="box-border caret-transparent"></div>
    </body>
  );
};
