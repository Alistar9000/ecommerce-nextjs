
import React from 'react'

const  ListPage = ({searchParams}:{searchParams:{name?:string}}) => {
     const name = searchParams.name

  return (
    <div className='h-screen'>ListPage {name}</div>
  )
}

export default ListPage