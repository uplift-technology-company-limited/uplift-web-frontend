import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { BentoGridClient as BentoGrid, BentoGridItemClient as BentoGridItem } from '@/components/basic/gridcard/bento-grid-client';
import { innovationMockData } from '@/data/innovation-mock';
import { InnovationPageData } from '@/types/innovation';
import {
  FaShippingFast,
  FaWarehouse,
  FaCashRegister,
  FaHotel,
  FaTruck,
  FaDumbbell,
  FaBox,
  FaChartLine,
  FaUsers,
  FaShoppingCart,
} from 'react-icons/fa';

/**
 * Icon mapping from string to React Icon component
 * เพิ่ม icon ใหม่ได้ที่นี่
 */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaShippingFast,
  FaWarehouse,
  FaCashRegister,
  FaHotel,
  FaTruck,
  FaDumbbell,
  FaBox,
  FaChartLine,
  FaUsers,
  FaShoppingCart,
};

// Get highlight products from innovation-mock
const getHighlightProducts = (): InnovationPageData[] => {
  return Object.values(innovationMockData).filter((product) => product.highlight === true);
};

/**
 * Map gridSpan value to Tailwind CSS classes
 */
const getGridSpanClass = (gridSpan?: '2x1' | '1x1' | '1x2'): string => {
  switch (gridSpan) {
    case '2x1':
      return 'md:col-span-2'; // กว้าง 2 columns
    case '1x2':
      return 'md:row-span-2'; // สูง 2 rows
    case '1x1':
    default:
      return ''; // ปกติ 1x1
  }
};

// SSR Solution Card Component
const SolutionCardSSR = ({ product, lang }: { product: InnovationPageData; lang: string }) => {
  const IconComponent = product.icon ? iconMap[product.icon] : FaBox;
  const bgColor = product.bgColor || 'bg-gradient-to-br from-gray-500/20 to-slate-500/20';
  const gridSpanClass = getGridSpanClass(product.gridSpan);

  return (
    <Link href={`/${lang}/innovation/${product.slug}`} className={`block h-full w-full group ${gridSpanClass}`}>
      <BentoGridItem
        title={product.hero.title}
        description={product.hero.description}
        icon={IconComponent ? <IconComponent className="w-6 h-6" /> : null}
        image={product.hero.image}
        bgColor={bgColor}
      />
    </Link>
  );
};

interface SolutionSSRProps {
  lang?: string;
}

export const SolutionSSR = ({ lang = 'th' }: SolutionSSRProps) => {
  const highlightProducts = getHighlightProducts();

  if (highlightProducts.length === 0) return null;

  return (
    <Section id="solutions" aria-labelledby="solutions-title" className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-x-hidden">
      <div className="w-full max-w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full overflow-x-hidden">
          <div className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Business Solutions
            </span>
            <h2 id="solutions-title" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              โซลูชันสำหรับธุรกิจ
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ระบบซอฟต์แวร์ที่ออกแบบมาเพื่อแก้ปัญหาธุรกิจจริง พร้อมใช้งานทันที
            </p>
          </div>

          <BentoGrid className="max-w-7xl mx-auto w-full overflow-x-hidden">
            {highlightProducts.map((product) => (
              <SolutionCardSSR key={product.slug} product={product} lang={lang} />
            ))}
          </BentoGrid>

          {/* Link to see all products */}
          <div className="text-center mt-12">
            <Link
              href={`/${lang}/innovation`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
            >
              ดูผลิตภัณฑ์ทั้งหมด
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SolutionSSR;