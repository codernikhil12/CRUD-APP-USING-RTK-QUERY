import { useForm } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../services/api";
import {  useNavigate } from "react-router-dom";

const PostForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/userList");
    },
  });

  const onSubmit = (data) => mutate(data);
  return (
   
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">FirstName</label>
        <br />
        <input {...register("firstName")} />
        {errors.firstName && <span>This field is required</span>}
        <br />
        <label htmlFor="">LastName</label>
        <br />
        <input {...register("lastName")} />
        <br />
        {errors.lastName && <span>This field is required</span>}
        <label htmlFor="">Email</label>
        <br />
        <input {...register("email")} />
        {errors.email && <span>This field is required</span>}
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
   
  );
};

export default PostForm;
