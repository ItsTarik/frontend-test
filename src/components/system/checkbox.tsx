"use client";

import { useState } from "react";

export function Checkbox({
  checked,
  label,
}: {
  checked: boolean;
  label: string;
}) {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <label className="space-x-1">
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        className="cursor-pointer"
        checked={isChecked}
        name={label}
      />
      <span>{label}</span>
    </label>
  );
}
