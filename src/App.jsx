import './App.css';
import QrCode from './components/QR-card';
import TextMain from './components/text'
import SubText from './components/subtext';
  
function App(){
  return(
    <>
      <div className='container'>
        <div className='container__sub'>
          <QrCode />
          <TextMain/>
          <SubText />
        </div>
      </div>
    </>
  )
}

export default App;