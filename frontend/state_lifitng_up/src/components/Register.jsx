import React , {useState} from 'react';

const Register = ({setToggle , setUsers}) => {
  const [formData , setFormData] = useState({})
  
  const handleChange =(e)=>{
    let {name, value} = e.target 
    setFormData({...formData , [name]: value})
  }


const handleSubmit = (e) => {
  e.preventDefault()
  setUsers(prev => [...prev, formData])
  setFormData({
    name:'',
    email:'',
    pass:'',
  })
  
}
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <input type="text" name='name' onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="Enter your name"  value={formData.name}  required/>
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input type="email" name='email' onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="Enter your email" value={formData.email} required/>
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input type="password" name='pass' onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="Create a password" value={formData.pass} required/>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Sign Up
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-center">
          Already have an account? <span className="text-blue-500 hover:underline cursor-pointer" onClick={() => setToggle(prev => !prev)}>Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
