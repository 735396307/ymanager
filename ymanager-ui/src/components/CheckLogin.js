import {Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class CheckLogin extends Component {
    componentDidMount() {
         // 在这里请求相关接口判断用户是否完成登录
        axios.get('/get', {
            params: {
                username: 12345
            }
        }).then(res => {
            if(res.status === 200) {
                if(res.data.code === 0) {
                    this.props.history.push('/register')
                }else {
                    this.props.history.push('/login')
                }
            } else {
                this.props.history.push('/login')
            }
        })
    }
    render() {
        return null;
    }
}

export default withRouter(CheckLogin);