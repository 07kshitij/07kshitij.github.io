import * as React from "react";
import { Text } from "@fluentui/react/lib/Text";
import { Stack, IStackStyles } from "@fluentui/react/lib/Stack";
import { Link, ILinkStyles } from "@fluentui/react/lib/Link";
import { Button, IButtonStyles } from "@fluentui/react/lib/Button"

export interface INavPaneProps {
  refProps: Array<React.RefObject<unknown>>
}

const scrollToView = (ref: any) => { ref.current.scrollIntoView() };

export const NavPane: React.FC<INavPaneProps> = (props) => {

  const [homeRef, aboutRef, blogRef, resumeRef, contactRef] = props.refProps;

  const homeScroll = () => { scrollToView(homeRef); }
  const aboutScroll = () => { scrollToView(aboutRef); }
  const blogScroll = () => { scrollToView(blogRef); }
  const resumeScroll = () => { scrollToView(resumeRef); }
  const contactScroll = () => { scrollToView(contactRef); }

  return (
    <Stack horizontal horizontalAlign="space-between" styles={navHeaderStyle}>
      <Stack>
        <Link styles={nameStyles} href="https://github.com/07kshitij/07kshitij.github.io">
          <Text variant="xLarge">@07kshitij</Text>
        </Link>
      </Stack>
      <Stack horizontal gap="1vw">
        <Button onClick={homeScroll} styles={buttonStyles}>Home</Button>
        <Button onClick={aboutScroll} styles={buttonStyles}>About</Button>
        <Button onClick={blogScroll} styles={buttonStyles}>Blog</Button>
        <Button onClick={resumeScroll} styles={buttonStyles}>Resume</Button>
        <Button onClick={contactScroll} styles={buttonStyles}>Contact</Button>
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
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    paddingTop: 15
  }
}

const buttonStyles: IButtonStyles = {
  root: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    fontSize: '20px',
    width: '5vw',
    height: '5vh'
  }
}

const nameStyles: Partial<ILinkStyles> = {
  root: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30
  }
}
