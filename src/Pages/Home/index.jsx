import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import { API_URL } from '../../api';

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetch(API_URL)
        const jsonData = await data.json()
        console.log(jsonData.products);
        setItems(jsonData.products)
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
      </>
    )
  }
  
  export default Home
  