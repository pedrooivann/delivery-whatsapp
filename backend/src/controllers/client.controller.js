import {
    getClient,
    getClients,
    getClientByTelephone,
    createClient,
    deleteClient,
    updateClient
} from "../services/client.service.js";

export async function getClientController (req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});
    
    try {
        const client = await getClient(id);

        if(!client) 
            return res.status(404).json({message: "Client not found"});
    
        return res.status(200).json({
        client: client
    });
    
    }catch(e){
        console.log(e);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    };
};

export async function getClientsController(req, res) {

    const { telephone } = req.query;

    try {
        if (telephone !== undefined) {
            if (typeof telephone !== "string" || !telephone.trim()) {
                return res.status(400).json({
                    message: "The telephone must be valid"
                });
            }

            const client = await getClientByTelephone(telephone.trim());



            if (!client) {
                return res.status(404).json({
                    message: ""
                });
            }

            return res.status(200).json({ client });
        }

        const clients = await getClients();

        return res.status(200).json({ clients });

    } catch (e) {
        console.error(e);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}



export async function createClientController (req, res) {
    const {name, telephone, address_line1, address_line2, neighborhood} = req.body;

    if (typeof name !== "string" || !name.trim()) 
        return res.status(400).json({message: "A valid name is required"});
    
    if (typeof address_line1 !== "string" || !address_line1.trim()) 
        return res.status(400).json({message: "The first address information must be valid"});

    if (typeof address_line2 !== "string" || !address_line2.trim()) 
        return res.status(400).json({message: "The second address information must be valid"});

    if (typeof neighborhood !== "string" || !neighborhood.trim()) 
        return res.status(400).json({message: "The neighborhood must be valid"});
    
    if (typeof telephone !== "string" || !telephone.trim()) 
        return res.status(400).json({message: "The telephone must be valid"});


    try{
        const client = await createClient(
            name.trim(), 
            telephone.trim(), 
            address_line1.trim(), 
            address_line2.trim(), 
            neighborhood.trim());
        return res.status(201).json(client);
    }catch(e){
        console.log(e);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    };
};

export async function deleteClientController (req, res) {
    const id = Number(req.params.id);

    
    if(!Number.isInteger(id) || id<=0) return res.status(400).json({message: "The ID must be a valid value"});

    try{
        const client = await deleteClient(id);
        if(!client) return res.status(404).json({message: "Client not found"})

        return res.status(204).send();
    }catch(e){
        console.log(e);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
};


export async function updateClientController (req, res){
    const id = Number(req.params.id);
    const {name, telephone, address_line1, address_line2, neighborhood} = req.body;

    if (!Number.isInteger(id) || id <= 0) 
        return res.status(400).json({message:"The ID must be a valid value"});
    
    if (typeof name !== "string" || !name.trim()) 
        return res.status(400).json({message: "A valid name is required"});
    
    if (typeof address_line1 !== "string" || !address_line1.trim()) 
        return res.status(400).json({message: "The first address information must be valid"});
    
    if (typeof address_line2 !== "string" || !address_line2.trim()) 
        return res.status(400).json({message: "The second address information must be valid"});
    
    if (typeof neighborhood !== "string" || !neighborhood.trim()) 
        return res.status(400).json({message: "The neighborhood must be valid"});
    
    if (typeof telephone !== "string" || !telephone.trim()) 
        return res.status(400).json({message: "The telephone must be valid"});

    try{

        const client = await updateClient(
            id, 
            name.trim(), 
            telephone.trim(), 
            address_line1.trim(), 
            address_line2.trim(),
            neighborhood.trim()
        );

        if(!client) 
            return res.status(404).json({message: "Client not found"});

        return res.status(200).json(client);
    }catch(e){
        console.log(e);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    };
};