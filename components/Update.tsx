import { Button, Modal, NumberInput, TextInput } from "@mantine/core";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/firebase";

function Update({ workout, id }: any) {
  const [opened, setOpened] = useState(false);

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState(0);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  async function updateWorkout(id: any) {
    setOpened(false);
    const workout = doc(db, "workouts", id);
    await updateDoc(workout, {
      title: title,
      load: load,
      sets: sets,
      reps: reps,
    });
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Update Workout!"
      >
        {/* Modal content */}
        <form>
          <TextInput
            required
            label="Workout Title:"
            defaultValue={workout.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <NumberInput
            label="Load (kg):"
            defaultValue={workout.load}
            onChange={(e: any) => setLoad(e)}
          />
          <NumberInput
            label="Sets:"
            defaultValue={workout.sets}
            onChange={(e: any) => setSets(e)}
          />
          <NumberInput
            label="Reps:"
            defaultValue={workout.reps}
            onChange={(e: any) => setReps(e)}
          />
          <Button
            size="sm"
            variant="light"
            color="cyan"
            fullWidth
            mt="md"
            radius="md"
            style={{ transition: "0.3s" }}
            onClick={() => updateWorkout(id)}
          >
            Update Workout
          </Button>
        </form>
      </Modal>

      <Button
        size="sm"
        variant="outline"
        color="cyan"
        fullWidth
        mt="md"
        radius="lg"
        style={{ transition: "0.3s" }}
        onClick={() => setOpened(true)}
      >
        Update
      </Button>
    </>
  );
}

export default Update;
