import React from "react";
import { Link } from "react-router-dom";

function Body() {
  return (
    <>
      <div className="h-auto w-full">
        <div className="p-20 text-3xl text-center">
        Speak up, write down, and be heard. Share your unique perspective, connect with others, and make a lasting impact.        
        </div>

        <div className="pr-5 pl-5  border-transparent shadow-md hover:scale-110">
          {/* <hr /> */}
          <h1 className="text-center font-bold text-3xl">Your Blog 1</h1>
          
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quod odio illum voluptas adipisci modi nulla maxime sed numquam laudantium? Voluptatibus ea minima aut dicta rem, tempore fuga eos, voluptatem, maiores molestias alias velit et vitae laboriosam minus optio neque quod accusantium. Excepturi nisi earum, ea voluptatum architecto aperiam, tempore odio officia accusamus nihil aut ab quia! Quod, laborum ratione...

          <Link className="hover:underline text-blue-600 text-right"> click here to read more </Link>
          </p>
        </div>
        <hr className="mb-5 ml-5 mr-5"/>

        <div className="pr-5 pl-5">
          <hr />
          <h1 className="text-center font-bold text-3xl">Your Blog 2</h1>
          
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quod odio illum voluptas adipisci modi nulla maxime sed numquam laudantium? Voluptatibus ea minima aut dicta rem, tempore fuga eos, voluptatem, maiores molestias alias velit et vitae laboriosam minus optio neque quod accusantium. Excepturi nisi earum, ea voluptatum architecto aperiam, tempore odio officia accusamus nihil aut ab quia! Quod, laborum ratione...

          <Link className="hover:underline text-blue-600 text-right"> click here to read more </Link>
          </p>
        </div>
        <hr className="mb-5 ml-5 mr-5"/>

        <div className="pr-5 pl-5">
          <hr />
          <h1 className="text-center font-bold text-3xl">Your Blog 3</h1>
          
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quod odio illum voluptas adipisci modi nulla maxime sed numquam laudantium? Voluptatibus ea minima aut dicta rem, tempore fuga eos, voluptatem, maiores molestias alias velit et vitae laboriosam minus optio neque quod accusantium. Excepturi nisi earum, ea voluptatum architecto aperiam, tempore odio officia accusamus nihil aut ab quia! Quod, laborum ratione...

          <Link className="hover:underline text-blue-600 text-right"> click here to read more </Link>
          </p>
        </div>
        <hr className="mb-5 ml-5 mr-5"/>

        <div className="pr-5 pl-5">
          <hr />
          <h1 className="text-center font-bold text-3xl">Your Blog 4</h1>
          
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quod odio illum voluptas adipisci modi nulla maxime sed numquam laudantium? Voluptatibus ea minima aut dicta rem, tempore fuga eos, voluptatem, maiores molestias alias velit et vitae laboriosam minus optio neque quod accusantium. Excepturi nisi earum, ea voluptatum architecto aperiam, tempore odio officia accusamus nihil aut ab quia! Quod, laborum ratione...

          <Link className="hover:underline text-blue-600 text-right"> click here to read more </Link>
          </p>
        </div>
        <hr className="mb-5 ml-5 mr-5"/>

      </div>

      <h1 className="text-center m-10 text-2xl">And many more awaits you!</h1>

      <div className="flex justify-center">
          <button className="inline rounded-md bg-orange-700 text-white p-3 text-xl mb-10">
            Create your own now!
          </button>
        </div>
      
    </>
  );
}

export default Body;
