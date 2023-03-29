import style from './Header.module.css'
import igniteLogo from '../assets/ignite.svg'

export function Header() {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="Logotipo do ignite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}