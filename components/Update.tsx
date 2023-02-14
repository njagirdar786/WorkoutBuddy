import { Button, Modal, NumberInput, TextInput } from '@mantine/core'
import React, { useState } from 'react'

function Update({workout}:any) {
    const [opened, setOpened] = useState(false);

  return (
    <>
        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Update Workout!"
      >
        {/* Modal content */}  
        <form>
            <TextInput required label="Workout Title:" value={workout.title} />
            <NumberInput  label="Load (kg):" value={workout.load} />
            <NumberInput  label="Sets:" value={workout.sets} />
            <NumberInput  label="Reps:" value={workout.reps} />
            <Button size="sm" variant="light" color="cyan" fullWidth mt="md" radius="md" style={{ transition: "0.3s" }}>Update Workout</Button>
        </form>
      </Modal>

        <Button size="sm" variant="outline" color="cyan" fullWidth mt="md" radius="lg" style={{ transition: "0.3s" }} onClick={() => setOpened(true)}>Update</Button>
    </>
  )
}

export default Update