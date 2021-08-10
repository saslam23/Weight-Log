<template>
           <v-navigation-drawer
           color="amber lighten-1"
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="white--text text--darken-3"
          class="mt-10 ml-5"
        >
        <h1 style="color:#FFFFFF">Weight Log</h1>
          <v-list-item>
         <v-list-item-title>Progress</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <router-link color="#FFFFFF" class="text-decoration-none" to="/edit"><v-list-item-title>Edit Goals</v-list-item-title></router-link>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Set Notification</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props:['show'],
        data(){
        return{
            drawer:false,
            group:false
        }
    },
    watch:{
        group(){
            this.drawer = false;
        },
        show(){
             this.drawer = !this.drawer;
            this.$emit('notShow')
        }
    },
    methods:{
    }
}

</script>

<style>
.v-list-item{
    color: #f1f0f0 !important;
}
.v-application a{
    color:#f1f0f0 !important;
}
</style>