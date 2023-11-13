import Image from 'next/image';

export default function LoginPage() {
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
        <h2 className='text-center font-extrabold text-2xl'>Inicia Sesión</h2>
        <form
          className='flex flex-col align-center content-center justify-center gap-3'
          action=''
        >
          <div className='flex flex-col'>
            <label className='font-semibold text-lg' htmlFor='email'>
              Correo:
            </label>
            <input
              className='rounded-xl p-3'
              type='email'
              name='email'
              id='email'
              placeholder='example@example.com'
            />
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
          <button
            className='bg-indigo-900 rounded-xl p-3 font-semibold text-lg text-white'
            type='submit'
          >
            Iniciar Sesión
          </button>
        </form>
      </section>
    </main>
  );
}
