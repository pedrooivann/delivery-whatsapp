import './CreateCategory.css'
import { useState } from 'react';

function CreateCategory ({onCreate, onClose}){

    const [name, setName] = useState("")

    return(<>
        <div >
            <form className="cat-create-container"
                onSubmit={async (e)=>{
                    e.preventDefault();
                    await onCreate(name);
                    onClose()
                    }
                }>
                <input 
                    required
                    placeholder='Category name...'
                    type="text"
                    className='
                        general-input
                        cat-input-create'
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    maxLength={40}
                    />

                <button 
                    className='
                    general-button
                    general-commit-button 
                    create-cat-button'
                    type='submit'>Create category</button>
            </form>
        </div>
    
    </>);
}

export default CreateCategory;