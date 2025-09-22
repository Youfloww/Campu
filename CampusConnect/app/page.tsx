import AnimatedBackground from '../components/AnimatedBackground'
import AnimatedSearchBar from '../components/AnimatedSearchBar'
import CategoryGrid from '../components/CategoryGrid'
import ListingCarousel from '../components/ListingCarousel'
import PollsPreview from '../components/PollsPreview'
import GradientButton from '../components/GradientButton'
import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start overflow-x-hidden">
      <AnimatedBackground />
      <div className="absolute top-4 right-4 z-30">
        <ThemeToggle />
      </div>
      <section className="flex flex-col items-center justify-center pt-32 pb-12 z-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow mb-4 text-center">
          Buy, Sell, Connect – All Within Your Campus 🚀
        </h1>
        <AnimatedSearchBar />
      </section>
      <section className="w-full max-w-5xl px-4 z-20">
        <CategoryGrid />
      </section>
      <section className="w-full max-w-5xl px-4 mt-12 z-20">
        <h2 className="text-2xl font-bold text-white mb-4">🔥 Featured Listings</h2>
        <ListingCarousel />
      </section>
      <section className="w-full max-w-5xl px-4 mt-12 z-20">
        <h2 className="text-2xl font-bold text-white mb-4">🎉 Polls & Confessions</h2>
        <PollsPreview />
      </section>
      <section className="flex justify-center mt-12 mb-16 z-20">
        <GradientButton>
          Join Your Campus Community – Free Forever!
        </GradientButton>
      </section>
    </main>
  )
}