
import CategoryCard from '../CategoryCard/CategoryCard';


import './CategoryList.css';



function CategoryList({categories, onDelete, onUpdate}){

    return (<>

        {categories.map((category)=>(
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