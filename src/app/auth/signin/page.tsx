import Image from 'next/image';

export default function SignIn() {
  return (
    <main className='flex justify-center items-center h-screen bg-blue-300'>
      <aside className='bg-indigo-700 self-center h-1/2 rounded-s-2xl'>
        <Image
          className='rounded-s-2xl'
          src='/login-car.png'
          width={350}
          height={500}
          style={{ objectFit: 'contain' }}
          sizes='(max-width: 768px) 100vw, 33vw'
          alt='Car image'
        />
      </aside>
      <section className='bg-white flex flex-col align-center p-10 h-1/2 rounded-e-2xl'>
        <h2 className='text-center font-extrabold text-2xl'>Registro</h2>
        <form
          className='flex flex-col align-center content-center justify-center gap-3'
          action=''
        >
          <div className='flex flex-col'>
            <label className='font-semibold text-lg' htmlFor=''>
              Sucursal
            </label>
            <select
              className='rounded-xl p-3'
              name=''
              id=''
              placeholder='Bogotá'
            >
              <option value=''>Medellin</option>
              <option value=''>Cali</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold text-lg' htmlFor=''>
              Cargo
            </label>
            <select
              className='rounded-xl p-3'
              name=''
              id=''
              placeholder='123456'
            >
              <option value=''>Gerente</option>
              <option value=''>Vendedor</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold text-lg' htmlFor=''>
              Fecha de Nacimiento
            </label>
            <input type='date' name='' id='' />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold text-lg' htmlFor='password'>
              Contraseña:
            </label>
            <input
              className='rounded-xl p-3'
              type='password'
              name='password'
              id='password'
              placeholder='********'
            />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold text-lg' htmlFor='password'>
              Repita su Contraseña:
            </label>
            <input
              className='rounded-xl p-3'
              type='password'
              name='password'
              id='password'
              placeholder='********'
            />
          </div>
          <button
            className='bg-indigo-900 rounded-xl p-3 font-semibold text-lg text-white'
            type='submit'
          >
            Regístrate
          </button>
        </form>
      </section>
    </main>
  );
}
