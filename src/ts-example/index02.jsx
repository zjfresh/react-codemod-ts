import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange() {
        console.log('onChange happen!')
    }
}