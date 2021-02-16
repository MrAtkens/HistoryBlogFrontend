import {makeAutoObservable} from "mobx";

import { categoriesService } from 'API'
export interface ISystem {
    categories: Array<Object>;
    error: string;
    id: string;
}



class Categories implements ISystem{
    categories = [];
    error = "";
    id = "";

    constructor() {
        makeAutoObservable(this)
    }

    async getCategories(){
        const response = await categoriesService.getCategoriesApi()
        console.log(response)
        this.setCategories(response.data)
    }

    get getCategoryById(){
        let findCategory = {name: "", description: "", sortIndex: "", image: { imageName: "", webImagePath: "" }, alt: ""}
        this.categories.map(category => {
            if(category.id === this.id){
                findCategory = category
                findCategory.alt = category.image.alt
            }
        })
        console.log(findCategory)
        return findCategory;
    }


    get getCategoriesTable(){
        return this.categories;
    }

    get getCategoriesForForm(){
        let option = []
        this.categories.forEach(element => {
            option.push({name: element.name, value: element.id, id: element.id})
        })
        console.log(option)
        return option;
    }

    setCategories(categories){
        this.categories = categories
    }
}

export default new Categories();