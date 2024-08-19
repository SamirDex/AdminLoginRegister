import React from 'react';
import { Input, Button } from '@chakra-ui/react';

const EditProductForm = ({ editName, setEditName, editPrice, setEditPrice, handleSave }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <h3>Edit Product</h3>
            <Input
                type="text"
                placeholder="Edit Name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                style={{ marginBottom: '10px', display: 'block' }}
            />
            <Input
                type="number"
                placeholder="Edit Price"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                style={{ marginBottom: '10px', display: 'block' }}
            />
            <Button colorScheme="green" onClick={handleSave}>Save Changes</Button>
        </div>
    );
};

export default EditProductForm;
