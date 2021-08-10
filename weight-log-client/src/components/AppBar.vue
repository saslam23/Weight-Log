<template>
    <div>
    <v-app-bar
      color="amber darken-1"
      dense
      dark
    >
      <v-app-bar-nav-icon @click.stop="viewDrawer()"></v-app-bar-nav-icon>

      <v-toolbar-title>Weight Log</v-toolbar-title>
      <v-menu
        left
        bottom
      >
      </v-menu>
    </v-app-bar>
    <Drawer
    :show="show"
    @noShow="changeShow"
    />
    </div>
</template>


<script>
import Drawer from './Drawer.vue';
export default {
    components:{
        Drawer
    },
    data(){
        return{
            show:false
        }
    },
    methods:{
        viewDrawer(){
            this.show =!this.show;
        },
        changeShow(){
            this.show=false;
        }
    }
}
</script>

<style>

</style>