<template>
  <div class="main">
    <h2>
      <button @click="isShow = !isShow" class="detail">
        <!-- <span>Hello {{ getUser.name }} </span> -->
        <span>Hello {{ getUser.name }} </span>
      </button>
    </h2>
   <!-- Details -->
    <div v-if="isShow" class="detail-infor">
      <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Username</th>
      </tr>
      <tr v-for="(data, index) in getData" :key="index" v-show="data.id == getUser.id">
          <td>{{ data.id }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.phone }}</td>
          <td>{{ data.username }}</td>
      </tr>
    </table>
    </div>
    <!-- List User  -->
    <h1>List user from API</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Username</th>
      </tr>
      <tr v-for="(data, index) in getData" :key="index" v-show="data.id != getUser.id">
          <td>{{ data.id }}</td>
          <td>{{ data.username }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.phone }}</td>
          <td>{{ data.username }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("handle_GetData", "users");
  },
  data() {
    return {
      name: this.$route.params.id.name,
      isShow: false,
    };
  },
  computed: {
    // ...mapGetters(["getData", "getUser"]),
    ...mapGetters(["getData","getUser"]),
  },
};
</script>
<style>
.detail {
  padding: 5px 20px;
  border-radius: 5px;
  background-color: #ad9b9b;
  color: firebrick;
  cursor: pointer;
}
.detail:hover {
  background-color: rgb(123, 245, 23);
  transform: scale(1.2);
}
table {
  text-align: left;
  width: 100%;
  margin: 0;
}
table th {
  background-color: rgb(173, 155, 155);
}
table td {
  background-color: lavender;
}
</style>