import { defineStore } from 'pinia'
import { IDate, IDrink } from '../interface';


const STORE_ID = 'main'

export const useMainStore = defineStore(STORE_ID, {
    state: () => ( {
        main: [] as IDrink[]
    }
    ),
    getters:{
        list: (state) => state.main
    },
    actions: {
        updatedList(list: IDate){       
            console.log(list);
                 
            this.main = list.drinks
        }
    }
})