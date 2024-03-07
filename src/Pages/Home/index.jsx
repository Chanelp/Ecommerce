import { useState, useEffect } from "react";
import Card from "../../Components/Card";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetch('https://api.escuelajs.co/api/v1/products')
        const jsonData = await data.json()
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
      </>
    )
  }
  
  export default Home
  