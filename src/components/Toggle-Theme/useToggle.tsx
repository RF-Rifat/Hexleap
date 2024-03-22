"use client"
import { useState } from "react";

export default function useToggle(
  initialValue: boolean = false
): [boolean, (newValue?: boolean) => void] {
  const [value, setValue] = useState(initialValue);

  const toggle = (newValue?: boolean) => {
    setValue((prev) => (typeof newValue === "boolean" ? newValue : !prev));
  };

  return [value, toggle];
}
