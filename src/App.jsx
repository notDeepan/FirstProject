import { Hero, Features, Solutions, Subscribe, Testimonials, Footer} from './sections'
import Nav from './components/Nav'

const App = () => (
    <main className="relative bg-black">

      <Nav />

      <section className="padding">
        <Hero />
      </section>

      <section className='padding-x py-10'>
        <Features  />
      </section>

      <section className='padding'>
        <Solutions />
      </section>

      <section className='padding'>
        <Testimonials />
      </section>

      <section className='padding sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
        
      <section className='padding-x padding-t pb-8'>
        <Footer />
      </section> 

    </main>
);

export default App;