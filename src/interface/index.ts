export interface IDrink {
    dateModified:  string;
    idDrink:  string;
    strAlcoholic:   string;
    strCategory:  string;
    strCreativeCommonsConfirmed:   string;
    strDrink:       string;
    strDrinkThumb:    string
    strGlass: string
    strIBA:  string;
    strImageSource: string
    strInstructions: string
    strTags: string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: string
    strIngredient4: string
    strIngredient5: string
    strIngredient6: string
    strIngredient7: string
    strIngredient8: string
    strIngredient9: string
    strIngredient10: string
    strIngredient11: string
    strIngredient12: string
    strIngredient13: string
    [key: string]: string
}



export interface IDate {
    drinks: IDrink[]
}