import { ActionIcon, Button, Modal, NumberInput, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { PlusIcon } from '@radix-ui/react-icons'
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

function Create() {
  const [opened, setOpened] = useState(false);

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState(0)
    const [sets, setSets] = useState(0)
    const [reps, setReps] = useState(0)


  async function addWorkout(){
    setOpened(false);
    await addDoc(collection(db, 'workouts'), {
      title: title, 
      load: load, 
      sets: sets, 
      reps: reps
    })
  }
    
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add a new workout!"
      >
        {/* Modal content */}  
        <form>
            <TextInput required label="Workout Title:" onChange={(e) => setTitle(e.target.value)} />
            <NumberInput label="Load (kg):" onChange={(e:any) => setLoad(e)} />
            <NumberInput label="Sets:" onChange={(e:any) => setSets(e)} />
            <NumberInput label="Reps:" onChange={(e:any) => setReps(e)} />
            <Button size="sm" variant="light" color="cyan" fullWidth mt="md" radius="md" style={{ transition: "0.3s" }} onClick={addWorkout}>Add Workout</Button>
        </form>
      </Modal>

      <ActionIcon
        size="lg"
        radius="sm"
        variant="filled"
        color={"pink"}
        style={{ transition: "0.3s" }}
        onClick={() => setOpened(true)}>
        <PlusIcon />
      </ActionIcon>
    </>
  );
}

export default Create;
