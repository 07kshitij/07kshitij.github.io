import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Home } from "./components/home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { NavPane } from "./components/navPane";

export const App: React.FC = () => {

  const aboutRef: React.RefObject<HTMLDivElement> = React.createRef();
  const blogRef: React.RefObject<HTMLDivElement> = React.createRef();
  const resumeRef: React.RefObject<HTMLDivElement> = React.createRef();
  const contactRef: React.RefObject<HTMLDivElement> = React.createRef();

  const refProps = [aboutRef, blogRef, resumeRef, contactRef];

  return (
      <Stack
        verticalAlign="space-between"
        horizontalAlign="center" 
        styles={appStyles}>
        <NavPane refProps={refProps}/>
        <Header/>
        <Home refProps={refProps}/>
        <Footer/>
      </Stack>
  )
}

const appStyles: Partial<IStackStyles> = {
  root: {
    backgroundColor: "#F3F2F1",
    width: "100%",
  }
}