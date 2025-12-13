import BestSeller from '@/component/BestSeller/BestSeller.component'
import HeroCarousel from '@/component/HeroCarousel/HeroCarousel.component'
import InstagramSection from '@/component/InstagramSection/InstagramSection.component'
import LatestArrivals from '@/component/LatestArrivals/LatestArrivals.component'
import ShopByCategory from '@/component/ShopByCategory/ShopByCategory.component'
import Testimonials from '@/component/Testimonials/Testimonials.component'
import TopBanner from '@/component/TopBanner/TopBanner.component'
import WhyChooseUs from '@/component/WhyChooseUs/WhyChooseUs.component'
import WhyTrustUs from '@/component/WhyTrustUs/WhyTrustUs.component'

export default function Home(): React.JSX.Element {
    return (
        <div className="main">
            <TopBanner />
            <HeroCarousel />
            <LatestArrivals />
            <BestSeller />
            <ShopByCategory />
            <WhyChooseUs />
            <WhyTrustUs />
            <Testimonials />
            <InstagramSection />
        </div>
    )
}
