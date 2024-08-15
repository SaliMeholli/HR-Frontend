import { Footer } from '../components/Footer';
import LoginForm from '../components/login';
import { Menu } from '../components/Menu';

export default function Home() {
  return (
    <div>
      <Menu /> 
      <LoginForm />
      <Footer />
      
    </div>
  );
}
