import React, { Component } from 'react'
import { Item, Label } from 'semantic-ui-react'

class Description extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <Item.Group divided>
          <Item>
            <Item.Image src='/Users/vacrozet/Desktop/HyperTube/essai.png' />
            <Item.Content>
              <Item.Header as='a'>12 Years a Slave</Item.Header>
              <Item.Meta>
                <span className='cinema'>Union Square 14</span>
              </Item.Meta>
              <Item.Description>paragraphe</Item.Description>
              <Item.Extra>
                <Label>IMAX</Label>
                <Label icon='globe' content='Additional Languages' />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    )
  }
}

export default Description