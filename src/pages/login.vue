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
                        <a-form-item label="账号" :rules="[{required:true, message:'请输入账号'}]" class="form-item">
                            <a-input v-model:value="loginForm.account"></a-input>
                        </a-form-item>
                        <a-form-item label="密码" :rules="[{required: true, message: '请输入密码'}]" aria-autocomplete="off" class="form-item">
                            <a-input-password v-model:value="loginForm.password"></a-input-password>
                        </a-form-item>
                        <a-form-item class="form-item">
                            <a-button type="primary" id="submit-button" htmp-type="submit">登录</a-button>
                        </a-form-item>
                    </a-form>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import {Card, Row, Col, Form, FormItem, Input, InputPassword, Button} from 'ant-design-vue'
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
                account: "",
                password: ""
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