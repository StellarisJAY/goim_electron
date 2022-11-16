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
import {get} from '../../api/request.js'
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
            friends: []
        }
    },
    methods: {
        getFriends: function() {
            get('/friend/list')
            .then(response=>{
                let resp = response.data
                if (resp.code == 200) {
                    this.friends = resp.friends
                }
            })
            .catch(error=>{
                console.error(error)
            })
        }
    },
    mounted() {
        this.getFriends()
        
    }
}
</script>

<style scoped>
</style>