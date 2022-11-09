import { Header } from './components/Header'
import { CreateTasks } from './components/CreateTasks'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <CreateTasks />
      </main>

    </div>
  )
}

