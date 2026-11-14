import Modal from "../../../Modal/Modal";
import CategoryInfo from "./CategoryInfo";

function CategoryInfoModal ({onDelete, onUpdate, onClose, category}){
    return(<>
        <Modal 
            onClose={onClose}
            title={"Category"}>

            <CategoryInfo 
                category={category}
                onUpdate={onUpdate}
                onDelete={onDelete}
                onClose={onClose}/>

        </Modal>
    </>)

}

export default CategoryInfoModal;