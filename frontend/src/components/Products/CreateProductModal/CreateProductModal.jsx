import Modal from "../../Modal/Modal";
import CreateProduct from './CreateProduct.jsx';

function CreateProductModal ({onClose, onCreate, categories}){
    return(<>
        <Modal 
            onClose={onClose}
            title={"Create Product"}>

            <CreateProduct 
                onCreate={onCreate}
                categories={categories}
                onClose={onClose}
                />

        </Modal>
    
    </>)
}

export default CreateProductModal;