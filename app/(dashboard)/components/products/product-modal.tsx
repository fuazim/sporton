import React, { useState, useEffect } from 'react'
import Modal from '../ui/modal'
import Button from '@/app/(landing)/components/ui/button';
import ImageUploadPreview from '../ui/image-upload-preview';
import { createProduct, deleteProduct, updateProduct } from '@/app/services/product.service';
import { getAllCategories } from '@/app/services/category.service';
import { Category, Product } from '@/app/types';
import { getImageUrl } from '@/app/lib/api';

type TProductModalProps = {
    isModalOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    initialData?: Product | null;
}

export default function ProductModal({ isModalOpen, onClose, onSuccess, initialData }: TProductModalProps) {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllCategories();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
        fetchCategories();
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stock: '',
        category: '',
        description: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || '',
                price: initialData.price?.toString() || '',
                stock: initialData.stock?.toString() || '',
                category: initialData.category?._id || '',
                description: initialData.description || ''
            });
            setImagePreview(getImageUrl(initialData.imageUrl));
        } else {
            setFormData({
                name: '',
                price: '',
                stock: '',
                category: '',
                description: ''
            });
            setImagePreview(null);
            setImageFile(null);
        }
    }, [initialData, isModalOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            const data = new FormData();
            data.append('name', formData.name);
            data.append('price', formData.price);
            data.append('stock', formData.stock);
            data.append('category', formData.category);
            data.append('description', formData.description);

            if (imageFile) {
                data.append('image', imageFile);
            }

            if (initialData) {
                await updateProduct(initialData._id, data);
            } else {
                await createProduct(data);
            }

            onSuccess?.();
            onClose();
        } catch (error) {
            console.error('Error creating product:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Modal isOpen={isModalOpen} onClose={onClose} title={initialData ? "Edit Product" : "Add New Product"}>
            <div className="flex flex-col gap-6">
                <div className='flex gap-4'>
                    <div className="min-w-50">
                        <ImageUploadPreview
                            value={imagePreview}
                            onChange={(file) => {
                                setImageFile(file);
                                setImagePreview(URL.createObjectURL(file));
                            }}
                            className='w-full h-full'
                            label='Product Image'
                        />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="input-group-admin">
                            <label htmlFor="ProductName" className="input-label">Product Name</label>
                            <input
                                type="text"
                                id="ProductName"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="input-field"
                                placeholder='eg. Hyperfast Shoes V2'
                            />
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="input-group-admin w-full">
                                <label htmlFor="ProductPrice" className="input-label">Price (IDR)</label>
                                <input
                                    type="number"
                                    id="ProductPrice"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder='eg. 1200000'
                                />
                            </div>
                            <div className="input-group-admin w-full">
                                <label htmlFor="ProductStock" className="input-label">Stock</label>
                                <input
                                    type="number"
                                    id="ProductStock"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder='eg. 12'
                                />
                            </div>
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="ProductCategory" className="input-label">Category</label>
                            <select
                                id="ProductCategory"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="input-field"
                            >
                                <option value="" disabled>Select Category</option>
                                {categories.map((cat) => (
                                    <option key={cat._id} value={cat._id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="input-group-admin">
                    <label htmlFor="ProductDescription" className="input-label">Description</label>
                    <textarea
                        id="ProductDescription"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="input-field h-50"
                        placeholder='product description...'
                    />
                </div>
                <div className="flex justify-end gap-4">
                    <Button variant="ghost" className='rounded-lg px-2 py-4' onClick={onClose} disabled={isLoading}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        className='rounded-lg px-2 py-4 hover:bg-primary/80'
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Saving...' : (initialData ? 'Update Product' : 'Create Product')}
                    </Button>
                </div>
            </div>
        </Modal>
    )
}
