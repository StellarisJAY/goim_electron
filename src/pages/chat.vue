<template>
    <div>
      <a-row>
        <a-col :span="6">
          <SideBar/>
        </a-col>
        <a-col :span="18">
          <ChatCard :is-group="false" :target="0"/>
        </a-col>
      </a-row>
    </div>
  </template>
  
  <script>
  import {Row, Col} from 'ant-design-vue'
  import SideBar from '../components/sidebar/Sidebar.vue'
  import ChatCard from '../components/chat/Chat.vue'
  export default {
    name: 'ChatPage',
    components: {
      SideBar,
      ARow: Row,
      ACol: Col,
      ChatCard
    },
    props: {
      msg: String
    },
    data() {
      return {
      }
    },
    methods: {
      
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  