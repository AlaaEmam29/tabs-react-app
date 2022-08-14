import React from 'react'
import { useGlobalContext } from '../Context/Context';
import Jobs from '../Jobs/Jobs';
import Loading from '../Loading/Loading';

export default function App() {
  const {loading} = useGlobalContext();
  return (
    <>
    <div className="container py-5 text-center">
    {
      loading ? <Loading /> : <Jobs/>
    }
    </div>
    </>
  )
}
