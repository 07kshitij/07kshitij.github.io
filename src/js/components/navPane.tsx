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

  const [aboutRef, blogRef, resumeRef, contactRef] = props.refProps;

  const aboutScroll = () => { scrollToView(aboutRef); }
  const blogScroll = () => { scrollToView(blogRef); }
  const resumeScroll = () => { scrollToView(resumeRef); }
  const contactScroll = () => { scrollToView(contactRef); }

  return (
    <Stack horizontal horizontalAlign="space-between" styles={navHeaderStyle}>
      <Link styles={nameStyles} href="https://github.com/07kshitij/07kshitij.github.io">
        @07kshitij
      </Link>
      <Stack horizontal gap="1vw">
        <DefaultButton onClick={aboutScroll} styles={buttonStyles}>About</DefaultButton>
        <DefaultButton onClick={blogScroll} styles={buttonStyles}>Blog</DefaultButton>
        <DefaultButton onClick={resumeScroll} styles={buttonStyles}>Resume</DefaultButton>
        <DefaultButton onClick={contactScroll} styles={buttonStyles}>Contact</DefaultButton>
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
    paddingTop: '2vh'
  }
}

const buttonStyles: Partial<IButtonStyles> = {
  root: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRight: '0.5vw',
    fontSize: '20px ',
    width: '2vw',
  }
}

const nameStyles: Partial<ILinkStyles> = {
  root: {
    fontSize: '20px',
  }
}
