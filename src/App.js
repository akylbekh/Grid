import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Person from "./components/Person/Person";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState([
    { name: "Mike Peterson", age: 0, prof: "engineer", id: 1 },
    { name: "Joel Mc.Gilligan", age: 0, prof: "mechanic", id: 2 },
    { name: "Sam Frink", age: 0, prof: "vietnam solider", id: 3 },
    { name: "George Jovanni", age: 0, prof: "Тунеядец", id: 4 },
    { name: "Carl Johnson", age: 0, prof: "Водитель", id: 5 },
    { name: "Carl Johnson", age: 0, prof: "Водитель", id: 6},
  ]);

  const increaseAge = (id) => {
    const index = people.findIndex((person) => person.id === id);
    const person = { ...people[index] };
    person.age++;
    const copyPeople = [...people];
    copyPeople[index] = person;

    setPeople(copyPeople);
  };

  const changeName = (id, event) => {
    setPeople(() => {
      return people.map((person) => {
        if (person.id === id) {
          person.name = event.target.value;
        }
        return person;
      });
    });
  };

  const [show, setShow] = useState(true);
  const togglePeople = () => {
    setShow((show) => !show);
  };

  const removePerson = id => {
    setPeople((people) => {
      return people.filter(person => person.id !== id);
    })
  }

  let list = null;

  if (show) {
    list = (
      <div className="cards">
        {people.map((person) => {
          return (
            <Card name={person.name} remove={() => removePerson(person.id)} age={person.age} change={(event) => changeName(person.id, event)}>
              <Button increase={() => increaseAge(person.id)} text="Read more..." />
            </Card>
          );
        })}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="buttons">
        <button className="btn" onClick={increaseAge}>
          Увеличить Возраст
        </button>
        <button className="btn" onClick={togglePeople}>
          Toggle people
        </button>
      </div>
      {list}
    </div>
  );









const btnClasses = ("btn")
if(show){
    btnClasses.push("btn.danger")
}
 
 return (
    <div className="container">
        <div className="buttons">
            <button className="btn" onClick={increaseAge}>
            Toggle people
            </button>
            <button className={btnClasses.join(" ")} onClick={togglePeople}>
                Toggle people
            </button>
        </div>
        {
            show && <Person people={people} change={changeName} increase={increaseAge} remove={removePerson}></Person>
        }
    </div>
);

}



export default App;
