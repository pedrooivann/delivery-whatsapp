import Modal from "../../Modal/Modal";
import ProductInfo from '../ProductInfoModal/ProductInfo.jsx'
import './ProductInfo.css'

function ProductInfoModal ({onClose, product}) {
    return (<>
        <Modal onClose={onClose}>
            <ProductInfo
                product={product}
            />

        </Modal>
    
    </>)

}

export default ProductInfoModal;