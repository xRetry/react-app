import {useState} from 'react'
import Header from './components/Header'
import TextElement from './components/TextElement'

function App() {
  const [text, setText] = useState('');

  const onClick = () => {
    const fetchTexts = async () => {
      const res = await fetch('http://localhost:5000/texts')
      const data = await res.json()
      setText(data[0].value)
    }
    fetchTexts()
  }

  return (
    <div className="container">
      <Header onClick={onClick}/>
      <TextElement text={text}/>
    </div>
  );
}

export default App;
