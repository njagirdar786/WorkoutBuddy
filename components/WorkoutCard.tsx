import React from "react";
import { Button, Card, Space, Text, Title } from "@mantine/core";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from "../firebase/firebase"
import Update from "./Update";

function WorkoutCard({ workout, id }: any) {

  async function handleDelete(id:any){
     const workoutDoc = doc(db, "workouts", id)
     await deleteDoc(workoutDoc)
    //alert(id)
  }



  //console.log(workout)

  return (
    <Card shadow="md" p="lg" radius="lg" withBorder={true}>
      <Title order={3}>{workout.title}</Title>
      <Space h={"xs"} />
      <Text color="cyan" weight={700}>Load (kg): {workout.load}</Text>
      <Text color="pink" weight={700}>Sets: {workout.sets}</Text>
      <Text color="purple" weight={700}>Reps: {workout.reps}</Text>
      <Button.Group>
        <Update workout={workout}/>
        <Space w={"xs"}/>
        <Button size="sm" variant="outline" color="red" fullWidth mt="md" radius="lg" style={{ transition: "0.3s" }} onClick={() => {handleDelete(id)}}>Delete</Button>
      </Button.Group>
    </Card>
  );
}

export default WorkoutCard;