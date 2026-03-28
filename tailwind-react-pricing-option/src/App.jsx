
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ReasultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios.get('marksData.json');

function App() {

  return (
    <>
    
    <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
    </header>

    <main className='w-11/12 mx-auto'>
    <Suspense fallback={
      <span className="loading loading-spinner loading-lg"></span>}>
      <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
    </Suspense>

      <Suspense fallback={
        <span className="loading loading-spinner loading-lg"></span>}>
      <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>

    <ResultsChart></ResultsChart>
    </main>

    <footer>

    </footer>

    </>
  )
}

export default App
