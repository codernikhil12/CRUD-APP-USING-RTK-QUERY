import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { getUserById, updateUser } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Edituser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { isLoading, isPending, isError, data, error } = useQuery({
    queryKey: ["userList", id],
    queryFn: () => getUserById(id),
  });

  const { mutate } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userList"] });
      navigate("/userList");
    },
  });

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
  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;
  const onSubmit = (data) => mutate({ id, ...data });
  console.log(data);
  console.log(id);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">FirstName</label>
        <br />
        <input
          name="firstName"
          {...register("firstName", { required: true })}
          placeholder={data.data.firstName}
        />
        {errors.firstName && <span>This field is required</span>}
        <br />
        <label htmlFor="">LastName</label>
        <br />
        <input
          name="lastName"
          {...register("lastName", { required: true })}
          placeholder={data.data.lastName}
        />
        <br />
        {errors.lastName && <span>This field is required</span>}
        <label htmlFor="">Email</label>
        <br />
        <input
          name="email"
          {...register("email", { required: true })}
          placeholder={data.data.email}
        />
        {errors.email && <span>This field is required</span>}
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Edituser;
