import { Group, Space, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import React from "react";
import { Home2, SettingsAutomation } from "tabler-icons-react";

function NavLinks() {
  return (
    <>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          transition: "0.4s",
          width: "95%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.blue[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color="blue" variant="light">
            <Home2 />
          </ThemeIcon>
          <Text size="sm">Home</Text>
        </Group>
      </UnstyledButton>

      <Space h="xs" />
      <Space h="xs" />

      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          transition: "0.4s",
          width: "95%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.violet[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color="violet" variant="light">
            <SettingsAutomation />
          </ThemeIcon>
          <Text size="sm">Settings</Text>
        </Group>
      </UnstyledButton>

      <Space h="xs" />
    </>
  );
}

export default NavLinks;
