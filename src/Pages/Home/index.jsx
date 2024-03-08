import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import { apiUrlPlatzi } from '../../api';
import ProductDetail from '../../Components/ProductDetail';

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetch(apiUrlPlatzi)
        const jsonData = await data.json()
        console.log(jsonData);
        setItems(jsonData)
      } 
      catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])

    return (
      <>
        Home
        <section className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            items?.map(item => (
              <Card key={item.id} data={item} />
              ))
          }
        </section>
        <ProductDetail />
      </>
    )
  }
  
  export default Home
  