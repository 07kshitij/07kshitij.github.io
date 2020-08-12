import * as React from "react";
import { Stack, IStackItemStyles, IStackStyles } from "@fluentui/react/lib/Stack";
import { Home } from "./components/home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { NavPane } from "./components/navPane";

export const App: React.FC = () => {
  return (
    <Stack
      verticalAlign="space-between"
      horizontalAlign="center" 
      gap="0"
      styles={appStyles}>
      <NavPane/>
      <Header/>
      <Home/>
      <Footer/>
    </Stack>
  )
}

const appStyles: Partial<IStackStyles> = {
  root: {
    backgroundColor: "#F3F2F1",
    width: "100%"
  }
}