import * as React from "react";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { About } from "./about";
import { Contact } from "./contact";
import { Resume } from "./resume";
import { Experience } from "./experience";

export interface IHomeProps {
  refProps: Array<React.RefObject<HTMLDivElement>>
}

export const Home: React.FC<IHomeProps> = (props) => {

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    })
  }, []);
  
  const [aboutRef, resumeRef, contactRef, experienceRef] = props.refProps;  
  return (
    <Stack horizontalAlign="space-between" styles={homeStyles} gap="0.5vw">
      <About aboutRef={aboutRef}/>
      <Experience experienceRef={experienceRef}/>
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