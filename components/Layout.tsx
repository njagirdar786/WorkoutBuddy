import { AppShell, createStyles } from "@mantine/core";
import React from "react";
//import { Dots } from "../Dots";
//import { FooterResponsive } from "./FooterResponsive";
//import { NavbarHeader } from "./NavbarHeader";

const useStyles = createStyles((theme) => ({
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

}));

function Layout({ children }: any) {
  const { classes } = useStyles();
  return (
    <>
      <AppShell 
        //header={<NavbarHeader />} 
        //footer={<FooterResponsive />} 
        styles={{
        main:{
          padding: 0,
          minHeight: "80vh",
        }
      }}>
      {/* <Dots className={classes.dots} style={{ left: 260, top: 300 }} />
      <Dots className={classes.dots} style={{ right: 260, top: 200 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <Dots className={classes.dots} style={{ left: 80, bottom: 60 }} />
      <Dots className={classes.dots} style={{ right: 220, top: 300 }} />
      <Dots className={classes.dots} style={{ right: 60, bottom: 60 }} /> */}
        {/* <NavbarHeader /> */}
        {children}
      </AppShell>
      {/* <FooterResponsive /> */}
    </>
  );
}

export default Layout;
