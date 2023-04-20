<template>
  <v-card>
    <v-card-title class="d-flex justify-space-between px-6 pt-8 pb-4">
      <span>Posts Manage</span>
      <div>
        <v-text-field label="Search" hide-details></v-text-field>
      </div>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <v-table
        fixed-header
        height="300px"
      >
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Calories
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
