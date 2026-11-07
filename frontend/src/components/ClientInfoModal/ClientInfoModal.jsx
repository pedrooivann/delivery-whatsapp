import Modal from "../Modal/Modal.jsx"
import ClientInfo from "./ClientInfo.jsx";

function ClientInfoModal ({onClose, client, onDelete}){
    return (
        <>
            <Modal 
            onClose={onClose}
            modalTitle={"Client Information"}>
                <ClientInfo 
                client={client}
                onDelete={onDelete}
                />
            </Modal>
        </>
    )
}

export default ClientInfoModal;