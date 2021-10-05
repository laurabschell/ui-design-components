import React from 'react'
import Link from 'next/link'
import { Button, Container, Menu, Segment } from 'semantic-ui-react'
import styles from '../styles/Home.module.scss'

function Navbar() {
    return (
        // <Segment padded>
        //     <h2>Fit Tool</h2>
        //     <Container className={styles.button_container}>
        //         <Button>
        //             <Link href="/">Home</Link>
        //         </Button>
        //         <Button>
        //             <Link href="/about">About</Link>
        //         </Button>
        //         <Button>
        //             <Link href="/contact">Contact</Link>
        //         </Button>
        //     </Container>
        // </Segment>
        <Menu>
        <Menu.Item>
          <Link href="/">Home</Link>
        </Menu.Item>

        <Menu.Item>
          <Link href="/about">About</Link>
        </Menu.Item>

        <Menu.Item>
          <Link href="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    )
}

export default Navbar
