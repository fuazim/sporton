'use client'

import { useState, useEffect } from 'react'
import Button from '@/app/(landing)/components/ui/button'
import { FiPlus } from 'react-icons/fi'
import ProductTable from '@/app/(dashboard)/components/products/product-table'
import ProductModal from '@/app/(dashboard)/components/products/product-modal'
import { getAllProducts, deleteProduct } from '@/app/services/product.service'
import { Product } from '@/app/types'

export default function ProductManagement() {
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const data = await getAllProducts();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteProduct(id);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    }

    const handleEdit = (product: Product) => {
        setSelectedProduct(product);
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
        setSelectedProduct(null);
    }

    const handleOpen = () => setIsOpen(true);

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col gap-1s">
                    <h1 className="text-3xl font-semibold">Product Management</h1>
                    <p className="text-lg text-gray-400">Manage your inventory, prices and stock.</p>
                </div>
                <Button variant="primary" className='rounded-lg px-2 py-4 hover:bg-primary/80' onClick={handleOpen}> <FiPlus size={24} /> Add Product</Button>
            </div>
            <ProductTable
                products={products}
                isLoading={isLoading}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
            <ProductModal
                isModalOpen={isOpen}
                onClose={handleClose}
                onSuccess={fetchProducts}
                initialData={selectedProduct}
            />
        </div>
    )
}
