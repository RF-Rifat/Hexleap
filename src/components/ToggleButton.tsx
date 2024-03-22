"use client";
import { useEffect, useState } from "react";

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(Boolean);
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
    }
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const buttonClasses = `w-[55px] h-6 flex items-center bg-gray-300 rounded-full text-[9px] ${
    isChecked ? "peer-checked:text-black" : "text-gray-300"
  } font-extrabold after:flex after:items-center after:justify-center peer after:content-['Dark'] peer-checked:after:content-['Light'] peer-checked:after:translate-x-full after:absolute after:left-[0px] peer-checked:after:border-white peer-checked:after:right-4 after:bg-black peer-checked:after:bg-white after:border after:border-gray-300 after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-black `;

  return (
    <div className="flex items-center absolute right-4 top-1/4">
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className={buttonClasses} />
      </label>
    </div>
  );
};

export default ToggleButton;
