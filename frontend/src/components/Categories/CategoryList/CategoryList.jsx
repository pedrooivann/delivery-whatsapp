
import { useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';


import './CategoryList.css';
import CategoryInfo from '../CategoryCard/CategoryInfoModal/CategoryInfo';



function CategoryList({categories, onDelete, onUpdate, searchCategory}){

    const formatedSearch = searchCategory.toLowerCase().trim();

    const filteredCategories = categories.filter(
        (category)=>category.name.
        toLowerCase().
        includes(formatedSearch)
    );

    const sortedCategories = [...filteredCategories].sort(
        (a, b)=> a.name.localeCompare(b.name))

    return (<>

        {sortedCategories.map((category)=>(
            <CategoryCard
                category={category}
                key={category.id}
                name={category.name}
                onDelete = {onDelete}
                onUpdate = {onUpdate}
            />
        ))}
    
    
    </>)
}

export default CategoryList;