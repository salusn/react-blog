import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import Blogdetails from './Blogdetails';
import feed from '../feed.json';

//const Hashcode = require('hashcode')


class Blog extends Component {

constructor(props) {
    super(props);
    this.state = {
    	blog: feed.items

    } 
console.log(this.state.blog[0].content)
}
titleClick(event) {

  }

  render() {

    return (
      <div>
        {this.state.blog.map((elements, key) =>

        <List divided relaxed key={key}>
        <List.Item >
          <List.Icon name='github' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a' onClick={this.titleClick(key)}>{elements.title}</List.Header>
            <List.Description as='a'></List.Description>
          </List.Content>
        </List.Item>
         <Blogdetails description={elements.content}/> 
      </List>

        )}
             

      </div>

    );

  }
}


export default Blog;

