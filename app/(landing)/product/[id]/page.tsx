import Image from 'next/image'
import { getProductById } from '@/app/services/product.service'
import ProductAction from '@/app/(landing)/components/product-details/product-action'
import { getImageUrl } from '@/app/lib/api'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductDetail({ params }: PageProps) {
  const {id} = await params
  const product = await getProductById(id)

  console.log(product)

  return (
    <main className="container mx-auto py-40 flex flex-row gap-12">
      <div className='bg-primary-light aspect-square min-w-140 flex items-center justify-center'>
        <Image
          src={getImageUrl(product.imageUrl)}
          alt={product.name}
          width={500}
          height={500}
          className='aspect-square object-contain w-full h-full'
        />
      </div>
      <div className='flex flex-col gap-6 pr-40 align-center justify-center'>
        <h1 className='font-bold text-5xl'>{product.name}</h1>
        <div className='bg-primary-light text-primary text-m font-medium rounded-full py-2 px-4 inline-flex w-fit'>
          {product.category.name}
        </div>
        <p className='text-medium font-medium leading-loose'>
          {product.description}
        </p>
        <h2 className='font-bold text-primary text-3xl'>
          IDR {product.price.toLocaleString('id-ID')}
        </h2>
        <ProductAction stock={product.stock} />
      </div>
    </main>
  )
}
