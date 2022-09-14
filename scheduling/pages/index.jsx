import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hello Friends</h1>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/Login">
          <a>Login</a>
        </Link>
      </li>
      <li>
        <Link href="/Scheduling">
          <a>Marcar Horário</a>
        </Link>
      </li>
      <li>
        <Link href="/Cancellation">
          <a>Cancelar agendamento</a>
        </Link>
      </li>
    </ul>
    </div>
  )
}
