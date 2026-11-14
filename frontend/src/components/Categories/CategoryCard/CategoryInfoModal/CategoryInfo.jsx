import { useState } from 'react';
import './CategoryInfoModal.css';
import { Trash } from 'lucide-react';

function CategoryInfo ({onClose, onUpdate, onDelete, category}){
    
    const [name, setName] = useState(category.name);
    const [isEditing, setIsEditing] = useState(false);

    return(<>
        <form 
            className="cat-info-container"
            onSubmit={ async (e)=>{
                e.preventDefault(); 
                await onUpdate(category.id, name); 
                setIsEditing(false); 
                onClose();
                }}>
            
            
            <input 
                className={isEditing? "cat-info-input general-input":"cat-info-input general-info-input" }
                onChange={(e)=>setName(e.target.value)}
                value={name}
                disabled={!isEditing}/>
            
            
            
            <div className='cat-buttons-container'>
                {isEditing && 
                    <button className='
                    cat-cancel-button
                    general-button
                    general-grey-button'
                    onClick={()=> {
                        setName(category.name); 
                        setIsEditing(false)}}
                    >Cancel</button>}

                {isEditing &&
                    
                    <button 
                    
                    type='submit' 
                    className='
                        general-button
                        general-save-button 
                        cat-save-button'
                    
                    >Save</button>}

                {!isEditing &&
                <button 

                type='button'
                className="
                    general-button
                    general-grey-button 
                    cat-edit-button"
                onClick={()=>setIsEditing(true)}
                    >Edit</button>}
            </div>
            
            

            <button 
            
                onClick={()=>onDelete(category.id)}
                type='button'
                className='
                    general-trash-button
                    category-trash-button
                    cat-trash-button'
                
                    ><Trash className='
                        general-trash-button
                        trash-icon
                        cat-trash-icon'
                        /></button>
        </form>
    </>)
}

export default CategoryInfo;
