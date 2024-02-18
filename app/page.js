import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

      <div className="relative flex place-items-top before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className = {`mb-3 text-2xl font-semibold`}>
          Halalspot
          </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
        
          <label for ="area" className={`mb-3 text-2xl font-semibold`}>Area</label>
            <select name = "area">
            <option value = "etobicoke">Etobicoke</option>
            <option value = "downtown">Downtown</option>
            <option value = "scarborough">Scarborough</option>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </select>
          
        

        
          <label for = 'cuisine' className={`mb-3 text-2xl font-semibold`}>Cuisine</label>
          <select name = 'cuisine'>
            <option value = 'burgers'>Burgers/Fries</option>
            <option value = 'pizza'> Pizza/Wings</option>
            <option value = 'shawarma'>Shawarma</option>
            <option value = 'somali'>Somali</option>
            <option value = 'dessert'>Dessert/Cafe</option>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </select>
                     

        
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Go{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
         
        
      </div>
    </main>
  );
}
