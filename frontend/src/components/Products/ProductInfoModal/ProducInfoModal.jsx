import Modal from "../../Modal/Modal";
import ProductInfo from './ProductInfo.jsx'
import './ProductInfo.css'

function ProductInfoModal () {
    return (<>
        <Modal onClose={onClose}>
            <ProductInfo>
                
            </ProductInfo>

        </Modal>
    
    </>)

}