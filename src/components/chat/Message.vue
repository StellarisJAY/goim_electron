<template>
    <a-row style="width:100%" v-if="isSelf==false">
        <a-col :span="2">
            <a-avatar size="large" :src="getFrom().avatar">
                <template #icon>
                    <UserOutlined/>
                </template>
            </a-avatar>
        </a-col>
        <a-col :span="16">
            <span>{{getFrom().nickName}}</span>
            <div id="message-bubble-left">
                <p id="message-content">{{message.content}}</p>
            </div>
        </a-col>
    </a-row>
    <a-row v-else style="width:100%">
        <a-col :span="6">
        </a-col>
        <a-col :span="16">
            <span style="margin-left: 90%;text-align: right;">{{selfUser.nickName}}</span>
            <div id="message-bubble-right">
                <p id="message-content">{{message.content}}</p>
            </div>
        </a-col>
        <a-col :span="2">
            <a-avatar size="large" :src="getFrom().avatar">
                <template #icon>
                    <UserOutlined/>
                </template>
            </a-avatar>
        </a-col>
    </a-row>
</template>

<script>
import {Row, Col, Avatar} from 'ant-design-vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { getStoredJson } from '@/utils/storage'
export default {
    name: 'SingleMessage',
    components: {
        ARow: Row,
        ACol: Col,
        AAvatar: Avatar,
        UserOutlined
    },
    props: {
        message: Object,
        from: Object,
        isSelf: Boolean,
    },
    data() {
        return {
            selfUser: Object
        }
    },
    methods: {
        getFrom: function() {
            if (this.from == null || this.from == undefined) {
                return {}
            }else {
                return this.from
            }
        }
    },
    mounted() {
        this.selfUser = getStoredJson("goim_self_user")
    },
    updated() {
        
    }
}
</script>

<style scoped>
#message-bubble-left {
    width: 30%;
    background-color: green;
    padding: 0.5rem;
}
#message-bubble-right {
    width: 30%;
    background-color: green;
    padding: 0.5rem;
    margin-left: 65%;
}
#message-content {
    color: white;
    font-size: small;
}
</style>