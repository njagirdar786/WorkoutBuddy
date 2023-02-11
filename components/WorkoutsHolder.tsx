import { Grid, Paper, Space, Title, } from "@mantine/core";

import React from 'react'

function WorkoutsHolder() {
  return (
    <>
    <Paper shadow="sm" p="lg" radius="lg" withBorder={true}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Title order={3}>Your Workouts 💪</Title>
        +
      </div>
      <Space h="lg" />
      
    </Paper>
    </>
  )
}

export default WorkoutsHolder