import React from 'react';

const Users = ({ users }) => {
  return (
    <>
      <h1 style={{ fontSize: '36px', color: 'blue' }}>Users Page</h1>
      <h1 style={headerStyles.headers}>Users Page</h1>
      <p style={headerStyles.para}>this is a paragraph</p>
      <p className="my-para">this is another paragraph</p>
      
      <a href="/subs/new">
        <button className="btn btn-dark">Add User</button>
      </a>

      { users.map( (user) => (
        <>
          <h3>{user.name}</h3>
          <a href={`/subs/${user.id}`}>Show</a>
          <a href={`/subs/${user.id}/edit`}>Edit</a>
          <a href={`/subs/${user.id}`} data-method='delete'>
            Delete
          </a>
        </>
      )) }
    </>
  )
}

export default Users;