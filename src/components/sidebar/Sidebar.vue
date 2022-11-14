<template>
    <div class="sidebar">
        <a-menu 
        v-model:open-keys="menuOptions.openKeys" 
        v-model:selected-keys="menuOptions.selectedKeys" mode="inline">
            <a-sub-menu key="conversations">
                <template #title>会话列表</template>
                <a-menu-item v-for="conv in conversations" :key="conv.to">{{conv.name}}</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="friends">
                <template #title>好友</template>
                <a-menu-item v-for="friend in friends" :key="friend.id">{{friend}}</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="groups">
                <template #title>群聊</template>
                <a-menu-item v-for="group in groups" :key="group.groupID">{{group.name}}</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
  </template>
  
  <script>
  import { Menu, MenuItem, SubMenu } from 'ant-design-vue';
  const CONV_TYPE_GROUP = 1
  const CONV_TYPE_SINGLE = 2
  export default {
    name: 'SideBar',
    components: {
        AMenu: Menu,
        AMenuItem: MenuItem,
        ASubMenu: SubMenu
    },
    props: {
      
    },
    data() {
      return {
        menuOptions: {
            openKeys: ["conversations"],
            selectedKeys: []
        },
        groups: [
            {groupID: 1001, name: "test-group1", avatarURL: ""}
        ],
        friends: [],
        conversations: [
            {to: 1001, name: "test-group1", avatarURL: "", type: CONV_TYPE_GROUP},
            {to: 1002, name: "jay", avatarURL: "", type: CONV_TYPE_SINGLE},
            {to: 1003, name: "cadwell", avatarURL: "", type: CONV_TYPE_SINGLE},
        ],
      }
    },
    methods: {
      
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .col {
    background-color: blue;
  }
  </style>
  