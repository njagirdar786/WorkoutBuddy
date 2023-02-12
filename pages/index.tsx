import { Card, Paper, Space, Title, } from "@mantine/core";
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "../firebase/firebase"

export default function IndexPage() {

  const [value, loading, error] = useCollection(
    collection(db, 'workouts'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

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
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
            Collection:{' '}
            {value.docs.map((doc) => (
              <Card key={doc.id}>
                {JSON.stringify(doc.data())},{' '}
              </Card>
            ))}
          </span>
        )}
    </Paper>
    </>
  );
}
