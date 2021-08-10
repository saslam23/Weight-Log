<template>
<div class="form-container">
   
   <v-card class="form-card" elevation="2">
        <h1 style="text-align:center">Edit your Goals</h1>
             <v-text-field aria-autocomplete="off"
            label="Current Weight"
             color="amber darken-1"
          ></v-text-field>
            <v-text-field
            aria-autocomplete="off"
            label="Waist Size"
            color="amber darken-1"
            ></v-text-field>
            <v-text-field
            aria-autocomplete="off"
            label="Goal Weight"
            color="amber darken-1"
            ></v-text-field>
    </v-card>

</div>
</template>

<script>
export default {
    data(){
        return{
            currentWeight:0,
            waistSize:0,
            goalWeight:0
        }
    }
}
</script>

<style>

.v-text-field{
    width:30% !important;
    margin:auto !important;
    margin-top:4rem !important;
}




.form-card{
    margin:auto;
    margin-top:12rem;
    background:white;
    height:500px;
    width:450px;
}

</style>