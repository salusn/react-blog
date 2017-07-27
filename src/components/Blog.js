import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

var XMLParser = require('react-xml-parser');


class Blog extends Component {

constructor(props) {
    super(props);
    this.state = {
    	blog: [
    	{
    		title: "lightrains1",
    		body : "Why do the template files containing JSX have .js extensions?",
    		date : "July 6th"
    	},
    	{
    		title: "lightrains2",
    		body : "Why do the template files containing JSX have .js extensions?",
    		date : "July 7th"
    	},
    	{
    		title: "lightrains3",
    		body : "Why do the template files containing JSX have .js extensions?",
    		date : "July 8th"
    	}
    	]
    }

    //console.log(parser)
    
}


// getXHR(url) {
//   return new Promise(function(resolve, reject) {
//     var req = new XMLHttpRequest();
//     req.open('GET', url);
//     req.onload = function() {
//       if (req.status === 200) {
//         resolve(req.response);
//       } else {
//         reject(Error(req.statusText));
//       }
//     };
//     req.onerror = function() {
//       reject(Error("Network Error"));
//     };
//     req.send();
//   });
// };



// getJson () {
//     this.getXHR('https://lightrains.com/feed.xml').then(function(response) {
//       var xml = new XMLParser().parseFromString(response);
//     console.log(xml)
    
//     }, function(error) {
//       console.error(error);
//     });
// }

  render() {

    //const result = this.getJson()

    return (
      <div>

      	{this.state.blog.map((elements, key) =>
      	<List divided relaxed key={key}>
		    <List.Item >
		      <List.Icon name='github' size='large' verticalAlign='middle' />
		      <List.Content >
		        <List.Header as='a'>{elements.title}</List.Header>
		        <List.Description as='a'>{elements.date}</List.Description>
		      </List.Content>
		    </List.Item>
  		</List>  
      	)}
      	 	
      </div>
    );
  }
}


export default Blog;

