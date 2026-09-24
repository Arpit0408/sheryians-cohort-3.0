import React from "react";
import { useForm } from "react-hook-form";
const Rhf = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        <input type="text" placeholder="Name" {...register("name")} />
        <input type="email" placeholder="Email" {...register("email")} />
        <input type="number" placeholder="Age" {...register("age")} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Rhf;
