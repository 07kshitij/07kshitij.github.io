import * as React from "react";
import { Text } from "@fluentui/react/lib/Text";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Link, ILinkStyles } from "@fluentui/react/lib/Link";
import { DefaultButton, IButtonStyles } from "@fluentui/react/lib/Button"

export interface INavPaneProps {
  refProps: Array<React.RefObject<unknown>>
}

const scrollToView = (ref: any) => { ref.current.scrollIntoView() };

export const NavPane: React.FC<INavPaneProps> = (props) => {

  const [aboutRef, resumeRef, contactRef, experienceRef] = props.refProps;

  const aboutScroll = () => { scrollToView(aboutRef); }
  const resumeScroll = () => { scrollToView(resumeRef); }
  const contactScroll = () => { scrollToView(contactRef); }
  const experienceScroll = () => { scrollToView(experienceRef); }

  return (
    <Stack horizontal horizontalAlign="space-between" styles={navHeaderStyle}>
      <Link styles={nameStyles} href="https://github.com/07kshitij/07kshitij.github.io">
        @07kshitij
      </Link>
      <Stack horizontal gap="1vw">
        <DefaultButton onClick={aboutScroll} styles={buttonStyles}>About</DefaultButton>
        <DefaultButton onClick={experienceScroll} styles={buttonStyles}>Experience</DefaultButton>
        <DefaultButton styles={buttonStyles} href="#/blog">Blog</DefaultButton>
        <DefaultButton onClick={contactScroll} styles={buttonStyles}>Contact</DefaultButton>
        <DefaultButton onClick={resumeScroll} styles={buttonStyles}>Resume</DefaultButton>
      </Stack>
    </Stack>
  )
}


const navHeaderStyle: Partial<IStackStyles> = {
  root: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'black',
    width: "100%",
    paddingLeft: '2vw',
    paddingRight: '2vw',
    paddingBottom: '2vh',
    paddingTop: '2vh',
    overflowX: 'auto'
  }
}

const buttonStyles: Partial<IButtonStyles> = {
  root: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    fontSize: '20px',
  }
}

const nameStyles: Partial<ILinkStyles> = {
  root: {
    fontSize: '20px',
  }
}
