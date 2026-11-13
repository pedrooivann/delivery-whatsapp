import Modal from "../../Modal/Modal.jsx";
import ClientInfo from "./ClientInfo.jsx";

function ClientInfoModal ({onClose, client, onDelete, onUpdate}){
    return (
        <>
            <Modal 
            onClose={onClose}
            title={"Client Information"}>

                <ClientInfo 
                client={client}
                onDelete={onDelete}
                onUpdate={onUpdate}
                />
            </Modal>
        </>
    )
}

export default ClientInfoModal;