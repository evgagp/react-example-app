import { Link } from 'react-router-dom';

export const RootPage: React.FC = () => {
  return (
    <div className="container">
      <h1>Hi!</h1>

      <p>
        This app is written in <Link to={'https://reactjs.org'}>React</Link>.
      </p>
      <p>
        <Link to={'https://vitejs.dev'}>Vite</Link> is used as a bundler, and{' '}
        <Link to={'https://redux-toolkit.js.org'}>Redux</Link> as a state manager.
      </p>

      <p>
        The menu is also managed using the <Link to={'https://reactrouter.com/home'}> React Router</Link> library. The
        project follows the <Link to={'https://feature-sliced.design'}>Feature-Sliced Design</Link> methodology.
      </p>
    </div>
  );
};

export default RootPage;
