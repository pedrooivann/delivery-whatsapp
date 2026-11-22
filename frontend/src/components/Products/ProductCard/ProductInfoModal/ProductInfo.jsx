import { useState } from 'react';
import { Trash } from 'lucide-react';

function ProductInfo ({product, categories, onClose, onUpdate, onDelete}) {

    const [isEditing, setIsEditing] = useState(false)
    const [idCategory, setIdCategory] = useState(product.id_category)
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

    return(<>
        <div className="info-container">

            <form 
                id='prod-update-from'
                className='prod-container'
                onSubmit={async (e)=>{
                    e.preventDefault();
                    await onUpdate(
                        product.id, 
                        Number(idCategory), 
                        name, 
                        description, 
                        price);
                    console.log(product.id, idCategory, name, description, price)
                    onClose();
                }
                }>

                <h3>Name</h3>
                <input
                    required
                    type='text'
                    className={isEditing? 
                        "prod-name-input general-input"
                        :
                        "prod-name-input general-info-input"}
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    disabled={!isEditing}
                />

                <h3>Description</h3>
                <textarea
                
                type='text'
                className={isEditing? 
                    'prod-description-input general-input' 
                    : 
                    'prod-description-input general-info-input'
                }
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
                disabled={!isEditing}
                />

                <h3>Price</h3>
                <input
                
                className={isEditing? 
                    'prod-price-input general-input'
                    :
                    'prod-price-input general-info-input'
                }
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
                disabled={!isEditing}
                
                />

                <h3>Category</h3>
                <select
                
                required
                className={isEditing? 'general-select':'general-info-input'}
                onChange={(e)=>setIdCategory(e.target.value)}
                value={idCategory}
                disabled={!isEditing}
                >
        
                    <option value="" disabled>
                        Select a category
                    </option>
                    
                    {categories.map((category)=>(
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                        ))
                    }

                </select>

            </form>

            <div className='prod-buttons-container'>
                
                {!isEditing && 
                <button
                type='button'
                className='
                general-trash-button
                category-trash-button
                cat-trash-button'

                onClick={()=>onDelete(product.id)}
                ><Trash className='
                    trash-icon
                    prod-trash-icon'/></button>}
                
                {!isEditing && 
                <button 
                type='button'
                onClick={()=>setIsEditing(true)}
                className='
                general-grey-button 
                general-button
                edit-product-button'>Edit</button>}

                {isEditing && 
                <button 
                type='button'
                className='
                general-button 
                general-grey-button
                cancel-product-button'
                onClick={()=>{
                    setIdCategory(product.id_category);
                    setName(product.name);
                    setDescription(product.description);
                    setPrice(product.price);
                    setIsEditing(false);
                }}>Cancel</button>}

                {isEditing && 
                <button
                form='prod-update-from'
                type='submit'
                className='
                general-save-button 
                general-button
                save-product-button'
                >Save</button>}
            </div>

        </div>
    
    
    </>)
}


export default ProductInfo;