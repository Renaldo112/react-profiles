import logo from './download.png';
import like from './unnamed.png'
import './App.css';
import { useState } from 'react';
import Display from './Component/Display'



function App() {
  
  const [skills, setSkills] = useState('');
  const handleName = () => {
    setSkills('My Name is Renaldo Menelas')
  }
  const handleSkills = () => {
    setSkills('I am a Frontend Developer')
  }

  const [count, likeCount] = useState(0)

  return (
    <>
      
    <div className="App">
        <img src={logo} alt="logo" />
        
      <p> <b>hi!</b></p>
      <Display info={skills}/><br/>
      <button onClick={handleName}>name</button>
        <button onClick={handleSkills}>Skills</button><br />
        <div className="count">
        <p className="number">{count}</p>
        <input type="image" className="like" src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321ca743d4a.jpg" alt="like" onClick={() => likeCount(count + 1)}/>
        </div>
        <div>
        <a href="https://github.com/Renaldo112"><img class="github" src="https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" alt="github" /></a>
      </div>
   </div>
    </>
  );
}

export default App;
    
