import { useState } from 'react'
import './App.css'
import coin from './img/Group 9.svg'
import img from './img/Group 24.svg'
import img2 from './img/Vector.svg'
import img3 from './img/Union.svg'
import img4 from './img/Group.svg'
import img5 from './img/Group (1).svg'
import img6 from './img/Group 8.svg'
import img7 from './img/image 2.svg'
function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(false)

  return (
    <>

      <div className="phone">
        <div className="phone-container">
          <div className="title">Hamster Kombat</div>
          <div className="box-parent">
            <div className="box">
              <p className="box-text" style={{ color: '#F79841' }}>Earn per tap</p>
              <nav className="box-text-2"><img src={coin} alt="" /> +12</nav>
            </div>
            <div className="box" style={{ gap: 6 }}>
              <p className="box-text" style={{ color: '#6F72E2' }}>Coins to level up</p>
              <nav className="box-text-2"> 10 M</nav>
            </div>
            <div className="box">
              <p className="box-text" style={{ color: '#84CB69' }}>Profit per hour</p>
              <nav className="box-text-2"><img src={coin} alt="" /> +636</nav>
            </div>
          </div>
          <div className="coins">
            <img src={coin} alt="" />
            <p>{count}</p>
          </div>
         <div className="hamster">
           <img src={img} alt=""  onClick={() => {
            setCount(count + 1)
            setNumber(true)
            setTimeout(()=>{
              setNumber(false)
            }, 500)
          }
          } />
            <h1 className={number ? 'text1' : 'text2'}>+1</h1>
         </div>
         <div className="parent">
          <div className="left">
            <img src={img2} alt="" />
            <p>6500 / 6500</p>
          </div>
          <div className="right">Boost</div>
         </div>
         <div className="box-parent-2">
          <div className="box-2">
            <img src={img3} alt="" />
            <p>Exchange</p>
          </div>
          <div className="box-2">
            <img src={img4} alt="" />
            <p>Mine</p>
          </div>
          <div className="box-2">
            <img src={img5} alt="" />
            <p>Friends</p>
          </div>
          <div className="box-2">
            <img src={img6} alt="" />
            <p>Earn</p>
          </div>
          <div className="box-2">
            <img src={img7} alt="" />
            <p>Airdrop</p>
          </div>
         </div>
        

        </div>
      </div>

    </>
  )
}

export default App
