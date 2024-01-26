import { useMainStore } from "../store";

// const baseUrl = import.meta.env.VITE_BASE_URL


const mainStore = useMainStore();

export async function fetchDate(params: string): Promise<any> {
    try {
        const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params}`)
        const response: any = await request.json();
        mainStore.updatedList(response);
    } catch (error) {
        if(error instanceof Error)
        console.error("Произошла ошибка при выполнении запроса: ", error.message);
    }
}
