import Link from 'next/link';
import React from 'react';
import {Title} from './title';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

interface ProductCardProps {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ id, imageUrl, name, price, className }) => {
  return (
    <div className={className}>
      <Link href="/products/${id}">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
            <img className="w-[215px] h-[215px]" src={imageUrl} alt="name" />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold"/>
       
        <p className="text-sm text-gray-500">
            Цыпленок 1 кг моцарелла
        </p>

        <div className="flex items-center justify-between mt-4">
            <span className="text-[20px]">
                от <b>{price} ₽</b>
            </span>

            <Button variant="secondary" className="text-base font-bold">
                <Plus className="w-5 h-5 mr-1" />
                Добавить
            </Button>
            
        </div>
      </Link>
    </div>
  );
};
