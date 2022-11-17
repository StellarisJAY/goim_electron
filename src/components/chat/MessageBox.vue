<template>
    <div>
        <a-list id="message-list" :bordered="false">
            <a-list-item v-for="m in messages" :key="m.id" class="message-item">
                <SingleMessage :from="otherUser" :is-self="isSelfUser(m.from)" :message="m"></SingleMessage>
            </a-list-item>
        </a-list>
        <a-divider :plain="true"><span class="timestamp">13:00</span></a-divider>
    </div>
</template>

<script>
import {List, ListItem} from 'ant-design-vue'
import SingleMessage from './Message.vue'
import { getStoredJson } from '@/utils/storage'
import { Divider } from 'ant-design-vue'
export default {
    name: 'MessageBox',
    components: {
        AList: List,
        AListItem: ListItem,
        SingleMessage,
        ADivider: Divider
    },
    props: {
        messages: Array,
        groupMembers: Map,
        otherUser: Object,
    },
    data() {
        return {
            selfUser: Object
        }
    },
    methods: {
        isSelfUser: function(id) {
            return id == this.selfUser.id
        },
        getFromUserInfo: function(id) {
            if (this.selfUser.id == id) {
                return this.selfUser
            }
            if (this.otherUser != undefined && this.otherUser.id == id) {
                return this.otherUser
            }
            return this.groupMembers.get(id)
        }
    },
    mounted() {
        console.log("mounted: ", this.otherUser)
        let user = getStoredJson("goim_self_user")
        this.selfUser = user
    },
    created() {
        console.log("created: ", this.otherUser)
    }
}
</script>

<style scoped>
.message-item {
    width: 100%;
}
.timestamp {
    color: rgb(152, 152, 152);
}
#message-list {
    overflow-y: scroll;
    height: 100%;
}
</style>