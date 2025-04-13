import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Пицца" size="lg" className="font-extrabold"/>
        
      </Container>
      <TopBar/>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">

          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters/>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
                title="Пиццы"
                items={[
                  {
                  id: 1,
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.avif",
                  name: "Пицца",
                  items: [{
                    price: 100,
                    }]
                  },
                  {
                    id: 2,
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.avif",
                    name: "Пицца",
                    items: [{
                      price: 100,
                  }]},
                  {
                    id: 3,
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.avif",
                    name: "Пицца",
                    items: [{
                      price: 100,
                  }]},
                  {
                    id: 4,
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.avif",
                    name: "Пицца",
                    items: [{
                      price: 100,
                  }]},
                ]}
                categoryId={1}
              />
              <ProductsGroupList 
                title="Завтрак"
                items={[
                  {
                  id: 1,
                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.avif",
                  name: "Пицца",
                  items: [{
                    price: 100,
                    }]
                  },
                  {
                    id: 2,
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.avif",
                    name: "Пицца",
                    items: [{
                      price: 100,
                  }]},
                  {
                    id: 3,
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.avif",
                    name: "Пицца",
                    items: [{
                      price: 100,
                  }]},
                  {
                    id: 4,
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.avif",
                    name: "Пицца",
                    items: [{
                      price: 100,
                  }]},
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>

    </>
  );
}
