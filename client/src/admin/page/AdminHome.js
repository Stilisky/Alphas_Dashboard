import React from 'react'
import AdminNav from '../components/adminNav'
import Mainadmin from '../components/mainadmin'
import Stat from '../components/stat'
import Userslist from '../components/userslist'

const AdminHome = () => {
  return (
    <div>
      <AdminNav/>
      <Mainadmin/>
      <Stat/>
      <Userslist/>
    </div>
  )
}

export default AdminHome