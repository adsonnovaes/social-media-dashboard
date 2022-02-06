import { Router } from './routes';

import './styles/app.scss';
import './styles/global.scss';

function App() {
  const theme = 'dark-mode';

  return (
    <div id="container-primary" className={theme}>
      <div id="header-top"/>
      <Router />
    </div>
  );
}

export default App;
