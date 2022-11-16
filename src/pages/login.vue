<template>
    <div id="bg">
        <a-row>
            <a-col :span="8"></a-col>
            <a-col :span="8">
                <a-card :bordered="false" id="login-card">
                    <a-form 
                    autocomplete="off" 
                    layout="vertical"
                    :on-finish="onFinish"
                    :on-finish-failed="onFinishFailed">
                        <a-form-item label="账号" class="form-item" name="account">
                            <a-input v-model:value="loginForm.account"></a-input>
                        </a-form-item>
                        <a-form-item label="密码" class="form-item" name="account">
                            <a-input-password v-model:value="loginForm.password"></a-input-password>
                        </a-form-item>
                        <a-form-item class="form-item">
                            <a-button type="primary" id="submit-button" @click="login">登录</a-button>
                        </a-form-item>
                    </a-form>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import {Card, Row, Col, Form, FormItem, Input, InputPassword, Button} from 'ant-design-vue'
import {message} from 'ant-design-vue'
import {post} from '../api/request.js'
import {saveToken} from '../api/token.js'
export default {
    name: 'LoginPage',
    components: {
        ACard: Card,
        ACol: Col,
        ARow: Row,
        AForm: Form,
        AFormItem: FormItem,
        AInput: Input,
        AInputPassword: InputPassword,
        AButton: Button
    },
    props: {
        
    },
    data() {
        return {
            loginForm: {
                account: '',
                password: '',
                deviceId: 'undefined'
            }
        }
    },
    methods: {
        onFinish: function() {
            console.log("success")
        },
        onFinishFailed: function(err) {
            console.log("finish failed")
            console.log(err)
        },
        login() {
            post('/auth/login', this.loginForm)
            .then(response=>{
                let resp = response.data
                if (resp.code == 200) {
                    saveToken(resp.token)
                    message.success("登录成功")
                    this.$router.push({path: '/chat'})
                }else if (resp.code == 404) {
                    message.warn("用户不存在")
                }else if (resp.code == 403) {
                    message.warn("密码错误")
                }
            })
            .catch(error=>{
                message.error("request error")
                console.error(error)
            })
        }
    },
    setup() {
        
    }
}
</script>

<style scoped>
#login-card {
    height: 50vh;
    margin-top: 20vh;
    border-radius: 10px 10px 10px 10px;
}
#bg {
    background-color: cadetblue;
    height: 100vh;
}
#submit-button {
    width: 100%;
}
.form-item {
    margin-left: 10%;
    width: 80%;
}
</style>