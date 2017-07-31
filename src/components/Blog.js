import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
//import axios from 'axios';
//var XMLParser = require('react-xml-parser');
import feed from '../feed.json';
//var data = require('../feed.json');
//var data = require('../feed.json');

class Blog extends Component {

constructor(props) {
    super(props);
    this.state = {
    	blog: feed.items

    } 
console.log(this.state.blog)

}

// componentDidMount() {
//       axios({
//         method:'get',
//         url:'https://lightrains.com/feed.xml',
//         responseType:'json',
//         headers: {'X-Requested-With': 'XMLHttpRequest'}
//       })
//       .then(function(response) {

//       var xml = new XMLParser().parseFromString(response.data);
//            console.log(xml)
//     });
// }

  render() {

    return (
      <div>
        {this.state.blog.map((elements, key) =>

        <List divided relaxed key={key}>
        <List.Item >
          <List.Icon name='github' size='large' verticalAlign='middle' />
          <List.Content >
            <List.Header as='a'>{elements.title}</List.Header>
            <List.Description as='a'></List.Description>
          </List.Content>
        </List.Item>
      </List>  
        )}      	
      </div>

    );

  }
}


export default Blog;

