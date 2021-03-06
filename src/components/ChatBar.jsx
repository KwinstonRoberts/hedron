import React, {
    Component
} from 'react';

import ReactDOM from 'react-dom'

class ChatBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            value: '',
            messages: this.props.messages
        }
        this.addMessage = this.addMessage.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    addMessage(event) {
        if (event.key === 'Enter') {
            this.setState({
                value: ''
            })
            this.props.addMessage(this.state.value);
       
        }
    }
    
    onChange(event){
        this.setState({
            value: event.target.value
        });
    }
    
    changeUser(event) {
        if (event.key === 'Enter') {
            var oldUser = this.props.currentUser;
            this.props.changeUser({
                oldUser: oldUser,
                newUser: this.state.user
            });
        } else {
            this.setState({
                user: event.target.value
            });
        }
    }

    render() {
        return ( <footer className = "chatbar" >
            <input className = "chatbar-username" placeholder = {this.props.currentUser}
            onKeyUp = {this.changeUser}
            /> <input className = "chatbar-message" 
            value={this.state.value}
            placeholder = "Type a message and hit ENTER"
            onChange={this.onChange.bind(this)}
            onKeyUp = {this.addMessage.bind(this)}/> 
            </footer>
        );
    }
}
ChatBar.propTypes = {
    currentUser: React.PropTypes.string,
    messages: React.PropTypes.array,
    user: React.PropTypes.string,
    addMessage: React.PropTypes.func,
    changeUser: React.PropTypes.func
};
export default ChatBar;
