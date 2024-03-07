import  Nav from "./components/Nav";
import { 
  Hero,
  Footer
} from "./sections"
export default function App() {
  return (
    <main>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      {/* <section className='bg-black padding-x padding-t pb-8 text-white'>
        <Footer />
      </section> */}
      
    </main>
  )
}