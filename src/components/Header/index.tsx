import { ToggleButton } from '../ToggleButton';
import './styles.scss';

export function Header() {
  return (
    <div id="container-header">
      <div id="title-container">
        <h1>Social Media Dashboard</h1>
        <span>Total Followers: 23,004</span>
      </div>

      <div id="toggle-container">
        <span id="theme-color">Dark Theme</span>
        <ToggleButton />
      </div>
    </div>
  )
}