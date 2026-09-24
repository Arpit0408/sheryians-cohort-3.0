import React , {useState} from 'react'

function App() {
  // const [name, setName] = useState("");

  // better approach to handle a form
  const [form, setFormData] = useState({name : "", email : "" , password : ""})

  const handleChange=(e)=>{
    setFormData((prev) => ({...prev , [e.target.name] : e.target.value}));
  }

  return (
    <>
      {/* <input
        type="text"
        name="name"
        value={form.name}
        onChange={(e) => setName(e.target.value)}
      /> */}
      {/* <h1>{name}</h1> */}

    {/*  better approach to handle a form */}
<input type="text" onChange={handleChange} value={form.name} name="name" placeholder='Enter name' />
<input type="email" onChange={handleChange} value={form.email} name="email" placeholder='Enter email' />
<input type="password" onChange={handleChange} value={form.password} name="password" placeholder='Enter password' />
<button>Submit</button>
    </>
  );
}

export default App
