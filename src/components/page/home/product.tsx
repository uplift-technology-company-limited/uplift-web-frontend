import { Section } from "@/components/ui/section";
import { AnimateEffect } from "@/components/common/animate-effect";
import { innovationMockData } from "@/data/innovation-mock";
import { ProductCarousel } from "./product-carousel";
import { Rocket } from "lucide-react";

interface ProductHeaderData {
  badge: string;
  title: {
    normal: string;
    highlight: string;
  };
  subtitle: string;
}

interface ProductProps {
  lang?: string;
  data: ProductHeaderData;
}

export const Product = async ({ lang = 'en', data }: ProductProps) => {
  // Use the same data as innovation page for consistency
  const products = Object.values(innovationMockData).slice(0, 6).map((product) => {
    // Get image from hero - prioritize image, then video thumbnail
    const heroImage = product.hero.image || product.hero.video?.thumbnail || '';

    return {
      slug: product.slug,
      title: product.hero.title,
      subtitle: product.hero.subtitle,
      badge: product.hero.badge || 'Innovation',
      description: product.hero.description,
      image: heroImage,
      link: `/${lang}/innovation/${product.slug}`,
      gradient: 'from-blue-500 to-purple-500',
    };
  });

  return (
    <Section id="products" aria-labelledby="products-title" className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="w-full">
        {/* Modern Header */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
          <AnimateEffect index={0}>
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">{data.badge}</span>
              </div>

              {/* Title */}
              <h2 id="products-title" className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-foreground">{data.title.normal} </span>
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {data.title.highlight}
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                {data.subtitle}
              </p>
            </div>
          </AnimateEffect>
        </div>

        {/* Carousel */}
        <AnimateEffect index={1}>
          <ProductCarousel products={products} />
        </AnimateEffect>
      </div>
    </Section>
  );
};
