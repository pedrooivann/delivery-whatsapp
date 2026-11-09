import Modal from "../../Modal/Modal.jsx";
import ClientInfo from "./ClientInfo.jsx";

function ClientInfoModal ({onClose, client, onDelete, onCreate}){
    return (
        <>
            <Modal 
            onClose={onClose}
            title={"Client Information"}>

                <ClientInfo 
                client={client}
                />
            </Modal>
        </>
    )
}

export default ClientInfoModal;