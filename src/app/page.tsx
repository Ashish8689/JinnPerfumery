import BestSeller from '@/component/BestSeller/BestSeller.component'
import DiscoverHero from '@/component/DiscoverHero/DiscoverHero.component'
import HeroCarousel from '@/component/HeroCarousel/HeroCarousel.component'
import LatestArrivals from '@/component/LatestArrivals/LatestArrivals.component'
import ShopByCategory from '@/component/ShopByCategory/ShopByCategory.component'
import Testimonials from '@/component/Testimonials/Testimonials.component'
import WhyChooseUs from '@/component/WhyChooseUs/WhyChooseUs.component'
// import WhyTrustUs from '@/component/WhyTrustUs/WhyTrustUs.component'

export default function Home(): React.JSX.Element {
    return (
        <div className="main">
            <HeroCarousel />
            <LatestArrivals />
            <DiscoverHero />
            <ShopByCategory />
            <WhyChooseUs />
            <BestSeller />
            {/* <WhyTrustUs /> */}
            <Testimonials />
        </div>
    )
}
