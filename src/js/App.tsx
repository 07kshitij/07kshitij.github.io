import * as React from "react";
import { Stack, IStackItemStyles } from "@fluentui/react/lib/Stack";
import { Home } from "./components/Home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const App: React.FC = () => {
  return (
      <Stack verticalAlign="space-between" verticalFill horizontalAlign="center" gap="20">
        <Header/>
        <Home/>
        <Footer/>
      </Stack>
  )
}
