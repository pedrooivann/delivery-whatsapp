import { useState } from 'react';
import './CategoryCard.css'
import { SquarePen } from 'lucide-react'
import CategoryInfoModal from './CategoryInfoModal/CategoryInfoModal';

function CategoryCard ({category, onDelete, onUpdate}) {

    const [isModalOpen, setIsModalOpen] =  useState(false);

    return(<>


        {isModalOpen && 
            <CategoryInfoModal
                onClose={()=>setIsModalOpen(false)}
                onDelete={onDelete}
                onUpdate={onUpdate}
            />}

        <div className='category-card'>

            <div className='category-left-container'><h3>{category.name}</h3></div>
            
            <div className='category-right-container'>

                <button 
                    className='category-card-button'
                    onClick={()=>setIsModalOpen(true)}><SquarePen className='category-card-button-icon'/></button>
            
            </div>

        </div>
    
    </>)

}

export default CategoryCard;