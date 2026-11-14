import Modal from '../../Modal/Modal.jsx';
import CreateClient from './CreateClient.jsx';

function CreateClientModal ({onClose, onCreate}){
    return(
        <>
            <Modal onClose={onClose} title={"Create Client"}>
                <CreateClient 
                    onCreate={onCreate}
                    onClose={onClose}/>
            </Modal>
        </>
    )

}

export default CreateClientModal;