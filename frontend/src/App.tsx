import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useEffect, useState } from "react";
//import { Tutor } from "./interfaces";
//import axios, { AxiosResponse } from "axios"


function App() {
  const [tutors, setTutors] = useState([] as string[]) //as Tutor[]);
  const heading = "Tutors";

  const handleSelectedItem = (item: string) => console.log(item);

  const handleButtonClicked = () => setAlertVisible(true);

  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    setTutors(["tutor 1", "tutor 2", "tutor 3"])
  }, [])

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>Look Out</Alert>}
      <Button color="primary" onClick={handleButtonClicked}>Click Me</Button>
      <ListGroup
        items={tutors}//.map((tutor:Tutor) => tutor.username)}
        heading={heading}
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
