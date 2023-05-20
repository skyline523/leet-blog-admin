<template>
  <v-sheet class="bg-background pb-6">
    <v-card class="rounded-lg">
      <v-layout>
        <v-navigation-drawer
          color="surface"
          width="260"
        >
          <div class="pa-5 d-flex justify-center">
            <v-btn
              prepend-icon="mdi-lead-pencil"
              color="text"
              class="w-100"
            >Create Task</v-btn>
          </div>
          <v-divider></v-divider>
          <v-list class="menu elevation-0" @click:select="getTasks">
            <TaskTypeItem
              v-for="item in taskClassify"
              :key="item.value"
              :item="item"
              :active="item.value === activeItem"
            />
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: calc(100vh - 194px)">
          <TaskBar />
          <template v-for="task in tasks" :key="task.title.trim()">
            <TaskItem :item="task"/>
            <v-divider></v-divider>
          </template>
        </v-main>
      </v-layout>
    </v-card>
  </v-sheet>
</template>

<script setup name="ToDo">
import { ref } from 'vue'

import TaskTypeItem from './components/TaskTypeItem.vue'
import TaskBar from './components/TaskBar.vue'
import TaskItem from './components/TaskItem.vue'

const activeItem = ref('tasks')
const taskClassify = ref([
  {
    name: 'Tasks',
    value: 'tasks',
    icon: 'mdi-calendar-check',
    badge: 12
  },
  {
    name: 'Completed',
    value: 'completed',
    icon: 'mdi-check-circle',
    badge: 3
  },
  {
    name: 'Starred',
    value: 'starred',
    icon: 'mdi-star'
  },
  {
    name: 'Important',
    value: 'important',
    icon: 'mdi-label-variant'
  },
  {
    name: 'Admin',
    value: 'admin',
    icon: 'mdi-label',
    color: 'success',
  },
  {
    name: 'Website',
    value: 'website',
    icon: 'mdi-label',
    color: 'accent',
  },
  {
    name: 'Server',
    value: 'server',
    icon: 'mdi-label',
    color: 'primary',
  }
])
const tasks = ref([
  {
    title: 'Write a report',
    desc: 'Draft the quarterly update for the team',
    isCompleted: false,
    starred: true,
    important: false,
    labels: ['Website']
  },
  {
    title: 'Attend a meeting',
    desc: 'Join the conference call with the client',
    isCompleted: false,
    starred: false,
    important: false,
    labels: ['Server', 'Admin']
  },
  {
    title: 'Complete a project',
    desc: 'Finish the coding task before the deadline',
    isCompleted: false,
    starred: true,
    important: true,
    labels: ['Website', 'Server']
  },
])

const getTasks = (e) => {
  activeItem.value = e.id
}
</script>

<style lang="scss" scoped>
.menu {
  max-height: calc(100% - 77px);
  height: 100%;
  overflow: overlay;
}
</style>
