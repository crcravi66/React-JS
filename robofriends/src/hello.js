import { Component } from 'react';
import './hello.css';


class Hello extends Component {
    render() {
        return (
            <div>
                <h1 className="tc fw9 f-headline measure ">Hello world </h1>
                <p className="tc b f1 measure">{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello