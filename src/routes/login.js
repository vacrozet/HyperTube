import React, { Component } from 'react'
import { Button, Input, Icon } from 'semantic-ui-react'
import axios from 'axios'

class Login extends Component {
  componentWillMount () {
    // if (global.localStorage.getItem('token')) {
    //   this.props.history.push('/')
    // }

    this.state = {
      mail: '',
      password: '',
      loadingBtn: false
    }
  }

  handleChange (evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit (evt, data) {
    if (evt.key === 'Enter' || data.name === 'submit') {
      this.setState({loadingBtn: true})
      axios.post('http://localhost:3005/user/signin')
      .then(res => {
        this.setState({loadingBtn: false})
      })
      .catch(err => {
        this.setState({loadingBtn: false})
        console.log(err.response)
        this.props.toast.warning(
          err.response.data.error,
          'An error occurred', {
            showAnimation: 'animated zoomIn',
            hideAnimation: 'animated zoomOut',
            closeButton: true,
            timeOut: 1500,
            extendedTimeOut: 1000
          }
        )
      })
    }
  }

  render () {
    return (
      <div id='login'>
        <Input
          type='text'
          placeholder='Mail'
          name='mail'
          label={{content: 'Mail', className: 'label-login-btn', color: 'grey'}}
          className='input-login'
          value={this.state.mail}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleSubmit.bind(this)}
        />
        <Input
          type='password'
          placeholder='Password'
          name='password'
          label={{content: 'Password', className: 'label-login-btn', color: 'grey'}}
          className='input-login'
          value={this.state.password}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleSubmit.bind(this)}
        />
        <Button
          animated='fade'
          loading={this.state.loadingBtn}
          className='btn-login'
          color='instagram'
          name='submit'
          onClick={this.handleSubmit.bind(this)}>
          <Button.Content visible>Submit</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </div>
    )
  }
}

export default Login
