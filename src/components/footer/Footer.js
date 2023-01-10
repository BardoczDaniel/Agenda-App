import React from 'react';
import './Footer.css';


class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: "",
            number: ""
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
    }

    handleChangeName(event) {
        this.setState({ content: event.target.value });
    }

    handleChangeNumber(event) {
        this.setState({ number: event.target.value });
    }

    render() {
        return (<footer>
            <input value={this.state.content} onChange={this.handleChangeName} id="content" type="text" placeholder="Name" />
            <input value={this.state.number} onChange={this.handleChangeNumber} id="number" type="number" placeholder="Number" />
            <span id="add-btn" onClick={() => this.props.createItem(this.state.content, this.state.number)}>Add</span>
        </footer>)

    }
}

export default Footer;
