import { 
    getCategory,
    getCategories,
    createCategory,
    deleteCategory,
    updateCategory} from '../services/category.service.js';

export async function getCategoryController (req, res){
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});

    try {
        const category = await getCategory(id);

        if(!category) return res.status(404).json({message: "Category not found"})

        return res.status(200).json(category);
    }catch(error){
        return res.status(500).json({
            error: "Error on getting Categories",
            details: error.message})
    };
};

export async function getCategoriesController (req, res){

    try {
        const categories = await getCategories();

        return res.status(200).json(categories);
    }catch(error){
        return res.status(500).json({
            error: "Error on getting Categories",
            details: error.message})
    };
};

export async function createCategoryController (req, res){
    const name = req.body.name;
    

    if (typeof name !== "string" || !name.trim()) return res.status(400).json({message: "A valid name is required!"});

    try {
        const category = await createCategory(name.trim());

        return res.status(201).json(category);
    }catch(error){
        return res.status(500).json({
            error: "Error on creating Category",
            details: error.message});
    };
};

export async function deleteCategoryController (req, res){
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});

    try {
        const category = await deleteCategory(id);

        if(!category) return res.status(404).json({message: "Category not found!"})

        return res.status(204).send();
    }catch(error){
        return res.status(500).json({
            error: "Error on deleting Category",
            details: error.message});
    };
};

export async function updateCategoryController (req, res){
    const id = Number(req.params.id);
    const name = req.body.name;

    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({message:"The ID must be a valid value!"});
    if (typeof name !== "string" || !name.trim()) return res.status(400).json({message: "A valid name is required!"});

    try {
        const updated = await updateCategory(id, name.trim());
    
        if (!updated) return res.status(404).json({ message: "Categoria não encontrada" });
        
        return res.status(200).json(updated);
    }catch(error){
        return res.status(500).json({
            error: "Error on updating Category",
            details: error.message
        });
    };
};
