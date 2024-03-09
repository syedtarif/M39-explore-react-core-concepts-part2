import Counter from './1Counter'
import PracticeTeam from './2.PracticeTeam'
import Team from './2Team'
import Users from './3.Users'
import Friends from './4Friends'
import Photos from './4Photos'
import './App.css'

function App() {

  function handleClicked() {
    alert('btn is clicked')
  }

  const handleClicked2 = () => {
    alert('btn two is clicked')
  }

  const addTo = (num) => {
    alert(num + 3);
  }

  return (
    <>
      <h3>React Core Concepts Part-2</h3>

      <Photos></Photos>

      <Friends></Friends>

      <Users></Users>

      <PracticeTeam></PracticeTeam>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClicked}>Click Me</button>
      <button onClick={handleClicked2}>Click Two</button>
      <button onClick={() => alert('third clicked')}>Third Click</button>
      <button onClick={() => addTo(3)}>Fourth</button>
    </>
  )
}

export default App
