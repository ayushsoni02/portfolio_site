"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["experience", "projects", "blogs"] as const;
type SectionId = typeof SECTIONS[number];

export default function Header() {
  const [active, setActive] = useState<SectionId>("experience");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id") as SectionId | null;
            if (id) setActive(id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute top-5 right-8 z-10 p-6">
      <ul className="flex gap-8 text-lg">
        {SECTIONS.map((id) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-colors duration-200 hover:text-gray-600 ${
                  isActive ? "text-black font-medium" : "text-gray-500"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}