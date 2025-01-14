import { Link } from 'react-router-dom';
import './footer.scss';

const currentYear = new Date().getFullYear();

export function Footer(): React.ReactNode {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>{currentYear}</div>
        <div className='footer-link'>
          <Link target='_blank' to="https://github.com/evgagp">Github</Link>
        </div>
      </div>
    </footer>
  );
}
