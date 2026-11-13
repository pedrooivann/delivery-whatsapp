import { getCategories } from '../../../services/categoriesService';

import { useEffect, useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';


import './CategoryList.css';



function CategoryList(){

    const [categories, setCategories] = useState([]);

    console.log(categories)

    useEffect(()=>{
        async function loadCategories (){
            try{
                const data = await getCategories();   
                setCategories(data);
            }catch(e){
                console.error(e);
            }   
        } 
        loadCategories(); 
    }, [])

    ;

    return (<>

        {categories.map((category)=>(
            <CategoryCard
                category={category}
                key={category.id}
                name={category.name}
            />
        ))}
    
    
    </>)
}

export default CategoryList;