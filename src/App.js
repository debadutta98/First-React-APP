import { useState } from "react";

import FormCard from "./Components/FormCard";
import Card from "./Components/UI/Cards/Card";
import ListCard from "./Components/UI/Cards/ListCard";
function App() {
  let [listView, setListView] = useState([]);
  console.log("listView",listView);
  const formOnsumitHandler = ({ name, age }) => {
    setListView((prev) => {return [{name,age},...prev]});
  };
  return (
    <div>
      <Card>
        <FormCard onSubmitHandler={formOnsumitHandler} />
      </Card>
      {listView.length !== 0 ? (
        <Card className="smallpad">
          <ul>
            {listView.map((value) => {
              return (
                <ListCard>
                  <p>{`${value.name}(${value.age} years old)`}</p>
                </ListCard>
              );
            })}
          </ul>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
