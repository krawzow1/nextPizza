'use client';
import React from 'react';
import {useRef, useEffect} from 'react';
import {useIntersection} from 'react-use';
import { Title } from './title';
import {cn} from '@/lib/utils';
import { ProductCard } from './product-card';

interface ProductsGroupListProps {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName?: string;
    
}

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({ title, items, categoryId, className, listClassName }) => {
    
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.7
      });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            console.log(title, categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);
    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />

            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
                {items.map((product, i) => (
                    <ProductCard 
                    key={i}
                    id={product.id}
                    imageUrl={product.imageUrl}
                    name={product.name}
                    price={product.items[0].price}
                    />
                ))}
            </div>
        </div>
    );
};
