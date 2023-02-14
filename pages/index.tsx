import { Grid, Paper, Space, Title } from "@mantine/core";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Create from "../components/Create";
import WorkoutCard from "../components/WorkoutCard";
import { db } from "../firebase/firebase";

export default function IndexPage() {
  const [workouts, loading, error] = useCollection(collection(db, "workouts"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

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
          <Create />
        </div>
        <Space h="lg" />
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}

        <Grid justify="center">
          {workouts &&
            workouts.docs.map((doc) => (
              <Grid.Col
                key={doc.id}
                style={{ maxWidth: 425, minWidth: 250 }}
                sm={3}
                xs={4}
              >
                <WorkoutCard key={doc.id} workout={doc.data()} id={doc.id} />
              </Grid.Col>
            ))}
        </Grid>
      </Paper>
    </>
  );
}
