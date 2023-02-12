import React from "react";
import { Button, Card, Space, Text, Title } from "@mantine/core";

function WorkoutCard({ workout }: any) {

  const handleDelete = () => {
    
  }

  const handleUpdate = () => {
    
  }

  console.log(workout)

  return (
    <Card shadow="md" p="lg" radius="lg" withBorder={true}>
      <Title order={3}>{workout.title}</Title>
      <Space h={"xs"} />
      <Text color="cyan" weight={700}>Load (kg): {workout.reps}</Text>
      <Text color="pink" weight={700}>Reps: {workout.sets}</Text>
      <Text color="purple" weight={700}>Reps: {workout.load}</Text>
      <Button.Group>
        <Button size="sm" variant="outline" color="cyan" fullWidth mt="md" radius="lg" style={{ transition: "0.3s" }} onClick={handleUpdate}>Update</Button>
        <Space w={"xs"}/>
        <Button size="sm" variant="outline" color="red" fullWidth mt="md" radius="lg" style={{ transition: "0.3s" }} onClick={handleDelete}>Delete</Button>
      </Button.Group>
    </Card>
  );
}

export default WorkoutCard;