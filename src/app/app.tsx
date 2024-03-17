// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Button from '../../ui/src/lib/button'

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="myreactapp" />
      <Button />
    </div>
  );
}

export default App;
