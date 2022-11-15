<template>
    <a-list-item>
        <a-list-item-meta>
            <template #title>
                <a href="#">{{ displayName }}</a>
            </template>
            <template #avatar>
                <a-avatar :src="avatarUrl"></a-avatar>
            </template>
        </a-list-item-meta>
        <template #actions v-if="infoType==InfoTypeFriend">
            <a key="sendMsg"><MessageOutlined/></a>
            <a key="voiceChat"><PhoneOutlined/></a>
        </template>
    </a-list-item>
</template>

<script>
import { ListItem, Avatar, ListItemMeta } from 'ant-design-vue'
import { MessageOutlined, PhoneOutlined } from '@ant-design/icons-vue'

export default {
    name: 'InfoItem',
    components: {
        AListItem: ListItem,
        AAvatar: Avatar,
        AListItemMeta: ListItemMeta,
        MessageOutlined,
        PhoneOutlined
    },
    props: {
        id: Number,
        displayName: String,
        avatarUrl: String,
        infoType: Number
    },
    data() {
        return {

        }
    },
    methods: {

    },
    setup() {
        const InfoTypeConv = 0
        const InfoTypeFriend = 1
        const InfoTypeGroup = 2
        const InfoTypeNotification = 3
        return { InfoTypeConv, InfoTypeFriend, InfoTypeGroup, InfoTypeNotification }
    }
}
</script>

<style scoped>

</style>