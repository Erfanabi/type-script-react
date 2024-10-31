import { FormEvent, useState } from 'react';

function ModalRegister() {
  const [name, setName] = useState<string>('');
  const [family, setFamily] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, family, age });
  };

  return (
    <form onClick={handleForm}>
      <input
        placeholder={'name'}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder={'family'}
        type="text"
        value={family}
        onChange={(e) => setFamily(e.target.value)}
      />

      <input
        placeholder={'age'}
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <button type="submit">لیک کنید</button>
    </form>
  );
}

export default ModalRegister;
