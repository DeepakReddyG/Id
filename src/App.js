import logo from './logo.svg';
import me from './me.png'
import honors from './honors.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
     <div className='ID'>
      <div className='first'>
        <h1>K L University</h1>
      </div>
      <div className='second'> 
        <img src={me} className="App-logo" alt="logo"/>
      </div>
      <div className='third'>
          <h4><b>Student Details</b></h4>
          <p><b>Name:</b> Deepak Reddy Gathpa</p>
          <p><b>ID Number:</b> 2100031817</p>
          <p><b>Branch:</b> CSE - Hons</p> 
      </div>
      <div className='fourth'>
          <h3>2021 - 2025</h3>
          {/* <img src={honors} className="App-logo-hons" alt="logo" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
     </div>
    </div>
    <div class="flip-card-back">
    <div className='back'>
       <div className='firstb'>
          <h1>KL University</h1>
        </div>
        
        <div className='unique'>
          <div className='inner'>
          <h4><b>Address</b></h4>
          <p>Address: MYTHRNAGAR, RDNO: 1, HNO: 4-149 Near Balaji Nagar, Mahabubnagar,Telangana, 509001</p>
          <p>Emergency Conact No: 1234567890</p>
          <p>Blood Group: B+</p>
          <p>Email: 2100031817@kluniversity.in</p>
          <p>If found please return to:</p>
          <p>KL Deemed to be University, Vaddeswaram, Guntur DIstrict - 522203</p>
          <p>Phone Number: 1234567890</p>
          <p><b>www.kluniversity.in</b></p>
          
          </div>
        </div>
        
        <div className='fourthb'>
          <h3>2021 - 2025</h3>
          <img src={honors} className="App-logo-hons" alt="logo" />
          
        </div>

       </div>
       
        
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
