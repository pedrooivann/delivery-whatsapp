import { useState } from "react";
import './CreateProduct.css'

function CreateProduct ({onCreate, categories, onClose}) {

    
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [idCategory, setIdCategory] = useState("")

    return(<>

        <form 
            id="create-product-form"
            className="prod-container"
            onSubmit={async (e)=>{
                
                e.preventDefault()
                await onCreate(
                    idCategory,
                    name, 
                    description, 
                    price)
                onClose()
                
                }}>

            <h3>Name</h3>
            <input
                required
                placeholder="Product name..."
                type="text"
                className="prod-name-input general-input"
                onChange={(e)=>setName(e.target.value)}/>

            <h3>Description</h3>
            <textarea 
                placeholder="Description..."
                type="text"
                className="prod-description-input general-input"
                onChange={(e)=>setDescription(e.target.value)}/>
                
            <h3>Price</h3>
            <input
                required
                type="number"
                min="0.01"
                step="0.01"
                placeholder="Price..."
                className="prod-price-input general-input"
                onChange={(e)=>setPrice(e.target.value)}/>

            <h3>Category</h3>
            <select
                required
                value={idCategory}
                className="general-select"
                onChange={(e)=>setIdCategory(e.target.value)}>

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

        <div className="prod-buttons-container">
            <button 
                className="
                prod-create-button 
                general-button 
                general-commit-button"
                form="create-product-form"
                >
                Create Product
            </button>
        </div>
    
    </>)
}

export default CreateProduct;