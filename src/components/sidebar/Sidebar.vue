<template>
  <div id="sidebar">
    <a-tabs tab-position="left" v-model:active-key="menuOptions.activeKey" style="height:100vh">
      <a-tab-pane key="conversations">
        <template #tab>
          <span>
            <message-outlined />
          </span>
        </template>
      </a-tab-pane>
      <a-tab-pane key="friends">
        <template #tab>
          <span>
            <user-outlined />
          </span>
        </template>
        <FriendList/>
      </a-tab-pane>
      <a-tab-pane key="groups">
        <template #tab>
          <span>
            <team-outlined />
          </span>
        </template>
      </a-tab-pane>
      <a-tab-pane key="settings">
        <template #tab>
          <span>
            <setting-outlined />
          </span>
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
  
<script>
import { Tabs, TabPane } from 'ant-design-vue'
import { UserOutlined, MessageOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons-vue'
import FriendList from '../friends/FriendList.vue'
export default {
  name: 'SideBar',
  components: {
    ATabs: Tabs,
    ATabPane: TabPane,
    UserOutlined,
    MessageOutlined,
    TeamOutlined,
    SettingOutlined,
    FriendList
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
#sidebar {
border-right: 1px solid rgb(218, 216, 216);
}
</style>
  