import '@styles/globals.css'

import Nav from '@components/Nav'

export const metadata = {
    title: 'Wimpy Kid $GREG',
    description: ' "$GREG" is a unique crypto project inspired by the spirit of Greg Heffley from "Diary of a Wimpy Kid." The project aims to motivate buyers to hold their tokens while offering exciting NFT rewards. ',
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Nav />
                {children}
            </body>
        </html>
    )
}

export default RootLayout
