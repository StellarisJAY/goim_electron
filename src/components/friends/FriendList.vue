<template>
    <a-list item-layout="horizontal" size="large" id="friend-list">
        <div v-for="friend in friends" :key="friend.userID">
            <InfoItem :avatar-url="friend.avatar" :display-name="friend.nickName" :id="friend.userID" :info-type="1"></InfoItem>
        </div>
    </a-list>
</template>

<script>
import {List} from 'ant-design-vue'
import InfoItem from '../info/InfoItem.vue'
export default {
    name: 'FriendList',
    components: {
        AList: List,
        InfoItem
    },
    props: {

    },
    data() {
        return {
            friends: [
                {userID: 1001, account: "xxjay", nickName: "jay", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1002, account: "xxhjxxj", nickName: "xxj", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1003, account: "cad", nickName: "cadwell", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1001, account: "xxjay", nickName: "jay", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1002, account: "xxhjxxj", nickName: "xxj", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1003, account: "cad", nickName: "cadwell", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1001, account: "xxjay", nickName: "jay", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1002, account: "xxhjxxj", nickName: "xxj", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1003, account: "cad", nickName: "cadwell", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1001, account: "xxjay", nickName: "jay", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1002, account: "xxhjxxj", nickName: "xxj", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1003, account: "cad", nickName: "cadwell", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1001, account: "xxjay", nickName: "jay", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1002, account: "xxhjxxj", nickName: "xxj", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1003, account: "cad", nickName: "cadwell", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1001, account: "xxjay", nickName: "jay", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1002, account: "xxhjxxj", nickName: "xxj", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1003, account: "cad", nickName: "cadwell", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1001, account: "xxjay", nickName: "jay", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1002, account: "xxhjxxj", nickName: "xxj", avatar: "https://joeschmoe.io/api/v1/random"},
                {userID: 1003, account: "cad", nickName: "cadwell", avatar: "https://joeschmoe.io/api/v1/random"},
                
            ]
        }
    },
    methods: {

    },
    mounted() {
        console.log("friend list mounted")
    }
}
</script>

<style scoped>
</style>