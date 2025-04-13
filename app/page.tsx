import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
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
        <div className="flex gap-[60px]">

          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters/>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard id={1} 
                imageUrl="https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.avif"
                name="Пицца"
                price={100} />
            </div>
          </div>
        </div>
      </Container>

    </>
  );
}
