<template>
    <div class="sidebar">
        <a-tabs tab-position="left" v-model:active-key="menuOptions.activeKey" style="height:100vh">
          <a-tab-pane key="conversations">
            <template #tab>
              <span>
                <message-outlined/>
              </span>
            </template>
          </a-tab-pane>
          <a-tab-pane key="friends">
            <template #tab>
              <span>
                <user-outlined/>
              </span>
            </template>
          </a-tab-pane>
          <a-tab-pane key="groups">
            <template #tab>
              <span>
                <team-outlined/>
              </span>
            </template>
          </a-tab-pane>
          <a-tab-pane key="settings">
            <template #tab>
              <span>
                <setting-outlined/>
              </span>
            </template>
          </a-tab-pane>
        </a-tabs>
    </div>
  </template>
  
  <script>
  import {Tabs, TabPane} from 'ant-design-vue'
  import {UserOutlined, MessageOutlined, TeamOutlined, SettingOutlined} from '@ant-design/icons-vue'
  export default {
    name: 'SideBar',
    components: {
        ATabs: Tabs,
        ATabPane: TabPane,
        UserOutlined,
        MessageOutlined,
        TeamOutlined,
        SettingOutlined
    },
    props: {
      
    },
    data() {
      return {
        menuOptions: {
            activeKey: "",
        }
      }
    },
    methods: {
      
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  