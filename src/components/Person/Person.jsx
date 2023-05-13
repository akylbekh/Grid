import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";



const Person=(props)=> {
    const {people,remove,change,increase}=props;

    return (
        <div className="cards">
            {people.map((person) => {
                return (
                    <Card name={person.name} remove={() => remove(person.id)} age={person.age} change={(event) => change(person.id, event)}>
                        <Button increase={() => increase(person.id)} text="Read more..." />
                    </Card>
                );
            })}
        </div>
    )
}
export default Person;