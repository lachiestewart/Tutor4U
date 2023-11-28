import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import { Tutor } from "./interfaces";
import { apiRequest } from "./api";

function App() {
    const [tutors, setTutors] = useState<Tutor[]>([]);

    const [alertVisible, setAlertVisible] = useState(false);

    const [selectedTutor, setSelectedTutor] = useState<Tutor>();

    const handleSelectedItem = (item: string, index:number) => {
      console.log(item);
      setSelectedTutor(tutors[index]);
    };

    const handleButtonClicked = () => setAlertVisible(true);

    const noTutorSelected = () => selectedTutor && <img src={selectedTutor.profile_photo} className="img-thumbnail" alt="Tutor profile photo" width="500"/>;

    const fetchTutorsData = async () => {
      const tutor_list:Tutor[] = await apiRequest<Tutor[]>("api/tutor/");
      console.log(tutor_list);
      setTutors(tutor_list);
    };

    useEffect(() => {
      fetchTutorsData();
      if (tutors.length > 0) {
        setSelectedTutor(tutors[0]);
      }
      
    }, []);

    return (
      <div>
        {alertVisible && <Alert onClose={() => setAlertVisible(false)}>Look Out</Alert>}
        <Button color="primary" onClick={handleButtonClicked}>Click Me</Button>
        <ListGroup
          items={tutors.map((tutor:Tutor) => tutor.username)}
          heading={"Tutors"}
          onSelectItem={handleSelectedItem}
        />
        {noTutorSelected()}
      </div>
    );
  }

export default App;
