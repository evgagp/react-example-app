import { useTodos } from '@/entities/todo';

const OnError: React.FC = () => {
  const { isError, errorMsg } = useTodos();

  return isError && <>{errorMsg}</>;
};

export default OnError;
