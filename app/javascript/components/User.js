import React from "react";

const User = ({ user }) => {

  const { id, created_at, first_name, last_name, phone_number, email, password }
  return (
    <h3>{first_name} {last_name}</h3>
  )
}

export default User