import React, { Component } from 'react'

class App extends Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                <h2>Hello World</h2>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }
}

export default App