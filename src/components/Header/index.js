import { useNavigate } from 'react-router-dom'

import BackImg from '../../assets/icons/arrow-left.svg'

import './styles.css'

function Header() {
  const navigate = useNavigate()

  return (
    <div className="hd-comp">
      <button className="back" onClick={() => navigate(-1)}>
        <img src={BackImg} alt="Voltar" />
        <span>Voltar</span>
      </button>
      <p>POKEREACT</p>
    </div>
  )
}

export default Header
