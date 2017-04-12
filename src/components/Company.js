import React from 'react'
import { Link } from 'react-router'

const Company = ({ name, _id, address, revenue, phone }) => (
  <li className='companyItem'>
    <section className='companyHeader'>
      <Link to={`/companies/${_id}`} className='companyLink'>{name}</Link>
    </section>
    <section className='companyDetails'>
      <div className='companyInfo'>
        <strong>{'Address: '}</strong>
        <span>{address}</span>
      </div>
      <div className='companyInfo'>
        <strong>{'Revenue: '}</strong>
        <span>{`$${revenue.toLocaleString()}`}</span>
      </div>
      <div className='companyInfo'>
        <strong>{'Phone: '}</strong>
        <span>{phone}</span>
      </div>
    </section>
  </li>
)

export default Company
