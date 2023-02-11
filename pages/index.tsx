import { Paper, Space, Title, } from "@mantine/core";

export default function IndexPage() {
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
  );
}
