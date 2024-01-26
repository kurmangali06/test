<template>
    <div v-for="(item) in drinks" :key="item.idDrink">
      <Card :drink="item"/>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import  { fetchDate} from '../service/fetchDate'
import { useMainStore } from '../store';
import Card from '../components/Card.vue';

const route = useRoute()
const currenItem = ref('margarita')
const mainStore = useMainStore();

const drinks = computed(() => {
    return mainStore.list
})
watch(() => route.params, () => {
    if(route.params.cocktail) {
        currenItem.value = String(route.params.cocktail)
        fetchDate(currenItem.value)        
    }
})

   
onMounted(() => {
    fetchDate(currenItem.value)  
})
</script>
<style lang="scss" scoped>
    
</style>