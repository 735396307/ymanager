import React , {Component} from 'react';

  class Name extends Component {
    render() {
      return (
        <h1>{this.props.name}</h1>
      );
    }
  }
   
  class Link extends Component {
    render() {
      return (
        <a href={this.props.site}>
          {this.props.site}
        </a>
      );
    }
  }
  class WebSite extends Component {
    constructor() {
        super();

        this.state = {
          name: "百度一下，你就知道",
          site: "comment.html"
        }
      }
    render() {
      return (
        <div>
          <Name name={this.state.name} />
          <Link site={this.state.site} />
        </div>
      );
    }
  }
export default WebSite;