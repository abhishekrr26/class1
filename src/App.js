import img from './img/benz.jpg'
import img1 from './img/bnw.webp'

import './App.css';

function App() {
 let name='Abhishek'
  return (
  <div className='main row shadow' style={{borderRadius:'10px'}}>
    <h3 className='he'>Welcome to React Learning {name}</h3>

    <div className='col-12 first'>
<img src={img} className='left'></img>
    <p>BMW (Bayerische Motoren Werke AG) is a globally recognized German automobile manufacturer known for producing luxury vehicles, motorcycles, and innovative mobility solutions. The company is acclaimed for its focus on performance, advanced technology, and premium design, making it one of the world's leading luxury automotive brands.</p>
    </div>

 <div className="line"></div>

    <div className='col-12 second'>
<img src={img1} className='right'></img>
<p >Mercedes-Benz is a prestigious German automotive company renowned for manufacturing luxury cars, SUVs, buses, and commercial vehicles. Known for its commitment to quality, safety, innovation, and comfort, Mercedes-Benz has established itself as a symbol of excellence and sophistication in the global automobile industry.</p>
    </div>   
  </div>
  );
}

export default App;
