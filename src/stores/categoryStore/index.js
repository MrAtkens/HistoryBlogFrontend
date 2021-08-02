import {makeAutoObservable} from "mobx";

import { categoriesService } from '~/API'

class Categories{
    categories = [];
    error = "";
    id = "";

    constructor() {
        makeAutoObservable(this)
    }

    async getCategories(){
        const response = await categoriesService.getCategoriesApi()
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
        return option;
    }

    setCategories(categories){
        this.categories = categories
    }
}

export default new Categories();
