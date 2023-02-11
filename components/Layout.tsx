import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Space,
  Title,
  Button,
} from "@mantine/core";
import { useState } from "react";

function Layout({ children }: any) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <AppShell
        styles={{
          main: {
            transition: "0.4s",
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[9]
                : theme.colors.violet[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar
            style={{
              borderRadius: 0,
            }}
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 180, lg: 280 }}
          >
            <Navbar.Section grow mt="md">
              nav links
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={70} p="md">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
              }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Title order={2}>Workout Buddy 🏋️‍♀️</Title>
              </div>
            </div>
          </Header>
        }
      >
        {children}
      </AppShell>
    </>
  );
}

export default Layout;
