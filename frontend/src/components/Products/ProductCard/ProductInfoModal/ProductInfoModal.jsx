import Modal from "../../../Modal/Modal.jsx";
import ProductInfo from './ProductInfo.jsx'
import './ProductInfo.css'

function ProductInfoModal ({onClose, onUpdate, onDelete, product, categories}) {
    return (<>
        <Modal 
            onClose={onClose}
            title={"Product"}>

            <ProductInfo
                categories={categories}
                product={product}
                onClose={onClose}
                onUpdate={onUpdate}
                onDelete={onDelete}
            />

        </Modal>
    
    </>)

}

export default ProductInfoModal;