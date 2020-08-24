import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

class ChatScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] }
    this.onSend = this.onSend.bind(this)
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'User',
            avatar:
              'https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png',
          },
        },
      ],
    })
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      }
    })
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

export default ChatScreen
