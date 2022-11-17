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
                <MessageBox :messages="messages" :group-members="groupMembers" :other-user="userInfo" id="message-box"/>
                <a-divider></a-divider>
                <a-textarea placeholder="input message..." id="text-area"></a-textarea>
                <a-button type="primary" id="send-button">发送</a-button>
            </a-card>
        </a-col>
        <a-col :span="6">
            <a-card id="info-card" hoverable="true">
                {{groupInfo}}
                {{groupMembers}}
            </a-card>
        </a-col>
    </a-row>
</template>

<script>
import {Card, Col, Row, Textarea, Button, Divider} from 'ant-design-vue'
import { PhoneOutlined } from '@ant-design/icons-vue';
import {get} from '../../api/request.js'
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
            groupInfo: null,
            userInfo: null,
            groupMembers: new Map,
            messages: [
                {id: 1, content: 'hello world', from: 1001, to: 58241228567105540},
                {id: 1, content: 'hello world', from: 1001, to: 58241228567105540},
                {id: 1, content: 'hello world', from: 58241228567105540, to: 1001},
                {id: 1, content: 'hello world', from: 58241228567105540, to: 1001},
                {id: 1, content: 'hello world', from: 1001, to: 58241228567105540},
                {id: 1, content: 'hello world', from: 1001, to: 58241228567105540},
                {id: 1, content: 'hello world', from: 58241228567105540, to: 1001},
                {id: 1, content: 'hello world', from: 1001, to: 58241228567105540},
                {id: 1, content: 'hello world', from: 58241228567105540, to: 1001},
                {id: 1, content: 'hello world', from: 1001, to: 58241228567105540},
            ]
        }
    },
    methods: {
        getUserInfo: async function(id) {
            try {
                let response = await get('/user/' + id)
                let resp = response.data
                if (resp.code == 404) {
                    console.error("unexpected error user not found")
                    return null
                }else {
                    return resp.userInfo
                }
            }catch(error) {
                console.error(error)
                return null
            }
        },
        listGroupMembers: async function(groupID) {
            try {
                let response = await get('/group/members/' + groupID)
                let resp = response.data
                if (resp.code != 200) {
                    console.error(resp.message)
                    return null
                }else {
                    let members = resp.members
                    let result = new Map
                    for (let member in members) {
                        result.set(member.id, member)
                    }
                    return result
                }
            }catch(error) {
                console.error(error)
                return null
            }
        },
        getGroupInfo: async function(groupID) {
            try {
                let response = await get('/group/' + groupID)
                let resp = response.data
                if (resp.code != 200) {
                    console.error(resp.message)
                    return null
                }else {
                    return resp.groupInfo
                }
            }catch(error) {
                console.error(error)
                return null
            }
        }
    },
    created() {
        let that = this
        if (!this.isGroup) {
            this.getUserInfo(this.target)
            .then(userInfo=>{
                that.userInfo = userInfo
            })
        }else {
            this.getGroupInfo(this.target)
            .then(group=>{
                that.groupInfo = group
            })
            this.listGroupMembers(this.target)
            .then(members=>{
                that.groupMembers = members
            })
        }
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