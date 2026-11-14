import './CreateCategory.css'
import { useState } from 'react';

function CreateCategory ({onCreate, onClose}){

    const [name, setName] = useState("")

    return(<>
        <div >
            <form className="cat-info-container"
                onSubmit={async (e)=>{
                    e.preventDefault();
                    await onCreate(name);
                    onClose()
                    }
                }>
                <input 
                    placeholder='Category name...'
                    type="text"
                    className='
                        general-input
                        cat-input-create'
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    />

                <button 
                    className='
                    general-commit-button 
                    create-cat-button'
                    type='submit'>Create category</button>
            </form>
        </div>
    
    </>);
}

export default CreateCategory;