import Nav from './components/Nav'
import {SuperQuality, Services, SpecialOffers, CustomerReviews, Subscribe, Footer, Hero, PopularProducts} from './sections'

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffers />        
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />        
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />        
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />        
      </section>
    </main>
  )
}

export default App