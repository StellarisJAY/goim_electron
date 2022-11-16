<template>
    <a-row>
        <a-col :span="18">
            <a-card id="message-card">
                <template #title>
                    <h3>name</h3>
                </template>
                <template #extra>
                    <a><PhoneOutlined/></a>
                </template>
                <MessageBox :messages="messages" id="message-box"/>
                <a-divider></a-divider>
                <a-textarea placeholder="input message..." id="text-area"></a-textarea>
                <a-button type="primary" id="send-button">发送</a-button>
            </a-card>
        </a-col>
        <a-col :span="6">
            <a-card id="info-card" hoverable="true">
            </a-card>
        </a-col>
    </a-row>
</template>

<script>
import {Card, Col, Row, Textarea, Button, Divider} from 'ant-design-vue'
import { PhoneOutlined } from '@ant-design/icons-vue';
import MessageBox from './MessageBox.vue';
export default {
    name: 'ChatCard',
    components: {
       ACard: Card,
       ACol: Col,
       ARow: Row,
       PhoneOutlined,
       MessageBox,
       ATextarea: Textarea,
       AButton: Button,
       ADivider: Divider
    },
    props: {
        target: Number,
        isGroup: Boolean
    },
    data() {
        return {
            messages: []
        }
    },
    methods: {
        
    },
    mounted() {
    }
}
</script>

<style scoped>
#message-card {
background-color: white;
margin-top: 2.5vh;
height: 95vh;
margin-left: 20px;
}
#info-card {
    background-color: white;
    height: 95vh;
    margin-top: 2.5vh;
    margin-left: 20px;
}
#message-box {
    height: 60vh;
}
#text-area {
    margin-left: 2%;
    width: 96%;
}
#send-button {
    margin-top: 1%;
    margin-left: 90%;
}
</style>