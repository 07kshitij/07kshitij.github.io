import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Home } from "./components/home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { NavPane } from "./components/navPane";
import { Blog } from "./components/blog";
import { Switch, Route } from "react-router-dom";

export const App: React.FC = () => {
  const aboutRef: React.RefObject<HTMLDivElement> = React.createRef();
  const contactRef: React.RefObject<HTMLDivElement> = React.createRef();
  const experienceRef: React.RefObject<HTMLDivElement> = React.createRef();

  const refProps = [aboutRef, contactRef, experienceRef];

  return (
    <Stack verticalAlign="space-between" horizontalAlign="center" styles={appStyles}>
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/">
          <NavPane refProps={refProps} />
          <Header />
          <Home refProps={refProps} />
        </Route>
      </Switch>

      <Footer />
    </Stack>
  );
};

const appStyles: Partial<IStackStyles> = {
  root: {
    backgroundColor: "#F3F2F1",
    width: "100%",
  },
};
