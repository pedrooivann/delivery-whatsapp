import './CreateCategory.jsx';
import Modal from '../../Modal/Modal.jsx';
import CreateCategory from './CreateCategory.jsx'


function CreateCategoryModal ({onClose, onCreate}){
    return(<>
        <Modal 
            title={"Create category"}
            onClose={onClose}>
            
            <CreateCategory 
            onCreate={onCreate}
            onClose={onClose}/>
        
        </Modal>

    </>)
}

export default CreateCategoryModal;