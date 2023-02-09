import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
//import { IconCheck } from "@tabler/icons";
//import { Dots } from "../Dots";

const useStyles = createStyles((theme) => ({

  root: {
    // backgroundColor: '#4158D0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(180deg, #129EF0 0%, #80D0C7 50%, #ffffff 100%)',
      //'linear-gradient(180deg, #0093E9 0%, #80D0C7 50%, #ffffff 100%)',
    // paddingTop: theme.spacing.xl * 3,
    // paddingBottom: theme.spacing.xl * 3,


  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  dots: {
    position: "fixed",
    zIndex: -1,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    "@media (max-width: 755px)": {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    // color: theme.colorScheme === "dark" ? theme.white : theme.black,
    color: "white",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",

  },
}));

export function Hero() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container  >
        {/* <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
        <Dots className={classes.dots} style={{ left: 80, bottom: 60 }} />
        <Dots className={classes.dots} style={{ right: 20, bottom: 160 }} />
        <Dots className={classes.dots} style={{ right: 60, bottom: 60 }} /> */}

        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Donate to an{" "}
              <span className={classes.highlight}>Islamic fundraiser</span>{" "}
              today!
            </Title>
            <Text weight={400} color="white" mt="md">
              "Worship none but Allah. treat with kindness your parents and
              kindred, and orphans and those in need; speak fair to the people;
              be steadfast in prayer; and practice regular charity"{" "}
              <b>(2:83).</b>
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  {/* <IconCheck size={12} stroke={1.5} /> */}
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>0% Commissions 👌</b> – UmmahFunnding has a 0% platform fee, we are sustained by your generosity.
              </List.Item>
              <List.Item>
                <b>It's Easy 😮‍💨</b> – Making an impact has never been easier,
                just a tap away. 
              </List.Item>
              <List.Item>
                <b>Secure 💪</b> – Every campaign vetted with industry-leading
                due diligence.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Donate to a Campaign
              </Button>
              <Button
                component={NextLink}
                href="/campaigns"
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Explore Campaigns
              </Button>
            </Group>
          </div>
          <Image mt={70} src={"./image.svg"} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
