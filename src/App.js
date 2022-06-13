import {useState} from 'react'
import Header from './components/Header'
import TextElement from './components/TextElement'

function App() {
  const [text, setText] = useState('');

  const onClick = () => {
    setText('test text')
  }

  return (
    <div className="container">
      <Header onClick={onClick}/>
      <TextElement text={text}/>
    </div>
  );
}

export default App;
