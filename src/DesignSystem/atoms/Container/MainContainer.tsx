import React from 'react'
import Container from './Container.styled'

interface ContainerProps {
    children: React.ReactNode
}

const MainContainer : React.FC<ContainerProps> = ({children}) => {
  return (
    <Container> 
        {children}
    </Container>
  )
}

export default MainContainer