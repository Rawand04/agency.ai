import { useEffect, useRef, useState } from "react";
import {
  TopNavBar,
  Hero,
  TrustedBy,
  Services,
  OurWork,
  Team,
  ContactUs,
  Footer,
} from "./components";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

type Theme = "dark" | "light";

function App() {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) ?? "light",
  );
  const dotRef = useRef<HTMLDivElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <TopNavBar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Team />
      <ContactUs />
      <Footer theme={theme} />

      {/* cursor ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-9999"
        style={{ transition: "transform 0.1s ease-out" }}
      />

      {/* cursor dot */}

      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full  bg-primary pointer-events-none z-9999"
      />
    </div>
  );
}

export default App;
