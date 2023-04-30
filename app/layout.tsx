import './globals.css'
import style from './layout.module.css'

import NavContainer__NavBar from './components/NavContainer/components/NavContainer__NavBar/NavContainer__NavBar'
import ContentContainer from './components/ContentContainer/ContentContainer'

import NavContainer from './components/NavContainer/NavContainer'
import NavContainer__ProfileBar from './components/NavContainer/components/NavContainer__ProfileBar/NavContainer__ProfileBar'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout( {children,}: {children: React.ReactNode} ) {
  return (
    <html lang="en">
      <body className={style.app__body}>
          <NavContainer>
            <NavContainer__ProfileBar/>
            <NavContainer__NavBar/>
          </NavContainer>
          
          <ContentContainer>
            {children}
          </ContentContainer>
      </body>
    </html>
  )
} 