
import React from 'react'

const  ListPage = ({searchParams}:{searchParams:{name:Promise<string>}}) => {
     const name = searchParams.name

  return (
    <div className='h-screen'>ListPage {name}</div>
  )
}

export default ListPage