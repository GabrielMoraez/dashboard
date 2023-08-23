'use client'

import Image from 'next/image'
import styles from './page.module.css'
import makeServer from './server'
import { useEffect, useState } from 'react'

export default function Home() {
  let [orders, setOrders] = useState([]);

  makeServer()

  useEffect(() => {
    let isCurrent = true;
    setOrders([]);
    let url = `/api/orders`

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        data = data.slice(0, 20)
        setOrders(data)
      })
      .catch((e) => {
        console.log(e)
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {orders ? orders.map(order => {
          return (
            <div key={order.id}>
              <h2>
                {order.customer_name}
              </h2>
              <p>{order.total_amount}</p>
            </div>
          )
        }) : null}
      </div>
    </main>
  )
}
