import useFetch from '../utils/useFetch.ts';

interface User {
  id: number;
  title: string;
  body: string;
}

function Body() {
  const {
    data: users,
    loading,
    error,
  } = useFetch<User[]>('https://jsonplaceholder.typicode.com/posts');

  console.log({ error });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={'bg-fuchsia-400'}>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.id} - {user.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;
