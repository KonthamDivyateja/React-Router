import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      gap: '20px', 
      padding: '1rem', 
      backgroundColor: '#f4f4f4',
      borderBottom: '1px solid #ccc' 
    }}>
      <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Home</NavLink>
      <NavLink to="/aboutus" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>About Us</NavLink>
      <NavLink to="/todos" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>Todos</NavLink>
    </nav>
  );
};

export default Navbar;
