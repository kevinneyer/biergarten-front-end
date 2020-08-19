import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


const LoaderComp = (props) => {
    return(
        <div>
     <Segment>
      <Dimmer active>
      <Loader />
    </Dimmer>

    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
        </div>
    )
}

export default LoaderComp