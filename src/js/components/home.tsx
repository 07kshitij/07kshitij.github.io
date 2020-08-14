import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { About } from "./about";
import { Blog } from "./blog";
import { Contact } from "./contact";
import { Resume } from "./resume";

export interface IHomeProps {
  refProps: Array<React.RefObject<HTMLDivElement>>
}

export const Home: React.FC<IHomeProps> = (props) => {
  
  const [homeRef, aboutRef, blogRef, resumeRef, contactRef] = props.refProps;  
  return (
    <Stack horizontalAlign="space-between" styles={homeStyles} gap="2vw">
      <About aboutRef={aboutRef}/>
      <Blog blogRef={blogRef}/>
      <Contact contactRef={contactRef}/>
      <Resume resumeRef={resumeRef}/>
    </Stack>
  )
}

const homeStyles : Partial<IStackStyles> = {
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "white"
  }
}
