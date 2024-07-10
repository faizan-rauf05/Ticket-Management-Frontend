import React from 'react'
import PurchasedTicketCard from './PurchasedTicketCard'

const PurchasedTickets = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 gap-6 justify-center ">
          <PurchasedTicketCard/>
          <PurchasedTicketCard/>
          <PurchasedTicketCard/>
          <PurchasedTicketCard/>
        </div>
      </div>
    </section>
  )
}

export default PurchasedTickets