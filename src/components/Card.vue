<template >
    <div class="card">
        <div class="card__description">
            <h3>
                {{ drink.strDrink }}
               </h3>
               <p>
                {{ drink.dateModified }}
               </p>
               <p>
                {{ drink.strCategory }}
               </p>
               <div class="card__description__ingredient">
                    <h4>List of Ingredient</h4>
                    <ul>
                       <li v-for="(item, index) in listIngredient" :key="index">
                        {{ item }}
                       </li>
                    </ul>
               </div>
               <div class="card__description__ingredient">
                <h4>List of Measure</h4>
                <ul>
                   <li v-for="(item, index) in listMeasure" :key="index">
                    {{ item }}
                   </li>
                </ul>
           </div>
        </div>
        <img class="card__img" v-lazy="drink.strDrinkThumb" :alt="drink.idDrink">   
    </div>
</template>
<script setup lang="ts">
import { PropType, computed } from 'vue';
import { IDrink } from '../interface';

const props = defineProps({
    drink:{
        type: Object as PropType<IDrink>,
        default: () => ({})
    }
})
const listIngredient = computed(() => {
    const ingredients: string[] = [];
    for (const key in props.drink) {
    if (key.startsWith("strIngredient") && props.drink[key as string] !== null) {
      ingredients.push(props.drink[key]);
    }
  }
  return ingredients;
})
const listMeasure = computed(() => {
    const measure: string[] = [];
    for (const key in props.drink) {
    if (key.startsWith("strMeasure") && props.drink[key as string] !== null) {
        measure.push(props.drink[key]);
    }
  }
  return measure;
})
</script>
<style lang="scss" scoped>
.card {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 20px;
    border: 1px solid #e0e0e0; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: linear-gradient(to right, #f8f8f8, #fff); 

    &__description {
        display: flex;
        flex-direction: column;
        width: 200px;
        margin: 20px;

        &__ingredient {
            margin-top: 10px;

            h4 {
                font-weight: bold;
                font-size: 18px;
            }

            ul li {
                margin-top: 2px;
            }
        }
    }

    &__img {
        width: 100%;
        border-radius: 5px; 
    }

    @media (max-width: 763px) {
        flex-direction: column;

        &__description {
            width: auto;
            margin-top: 10px;
            &__ingredient {
                display: flex;
                gap: 5px;
            }
        }

        &__img {
            max-width: 400px;
            margin-bottom: 10px;
            height: 300px;
        }
    }
}
</style>

