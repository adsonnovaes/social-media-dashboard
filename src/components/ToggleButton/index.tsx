import { useState } from "react";
import useTheme from "../../hooks/useTheme";

import './styles.scss';

export function ToggleButton() {
  const { theme, themeToggle } = useTheme();

  return (
    <div className="toggle-content">
      {
        theme === "dark-mode" ?
          <input type="checkbox" id="toggle" className="toggle-checkbox" onClick={themeToggle} checked />
          :
          <input type="checkbox" id="toggle" className="toggle-checkbox" onClick={themeToggle} />
      }
      <label htmlFor="toggle" className="toggle-label">
        <span className="toggle-label-background"></span>
      </label>
    </div>
  );
}