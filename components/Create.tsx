import { ActionIcon, Button, Modal, NumberInput, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { PlusIcon } from '@radix-ui/react-icons'

function Create() {
  const [opened, setOpened] = useState(false);

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState(0)
    const [sets, setSets] = useState(0)
    const [reps, setReps] = useState(0)


    
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add a new workout!"
      >
        {/* Modal content */}  
        <form>
            <TextInput required label="Workout Title:" value={title} />
            <NumberInput  label="Load (kg):" value={load}  />
            <NumberInput  label="Sets:" value={sets}  />
            <NumberInput  label="Reps:" value={reps} />
            <Button size="sm" variant="light" color="cyan" fullWidth mt="md" radius="md" style={{ transition: "0.3s" }}>Add Workout</Button>
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
