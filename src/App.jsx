import { Header } from './components/Header'
import { CreateTasks } from './components/CreateTasks'

import './global.css'
import styles from './App.module.css'
import clipboard from './assets/Clipboard.png'

export function App() {
  /* informações que mudam :

    taskCount

    Component Task P
  */
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <CreateTasks />
      </main>

    </div>
  )
}

