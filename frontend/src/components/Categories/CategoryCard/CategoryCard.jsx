import './CategoryCard.css'
import { SquarePen } from 'lucide-react'

function CategoryCard ({category}) {
    return(<>

        <div className='category-card'>

            <div className='category-left-container'><h3>{category.name}</h3></div>
            
            <div className='category-right-container'>

                <button className='category-card-button'><SquarePen className='category-card-button-icon'/></button>
            
            </div>

        </div>
    
    </>)

}

export default CategoryCard;