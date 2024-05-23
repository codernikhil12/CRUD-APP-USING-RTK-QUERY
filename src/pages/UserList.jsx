import React from 'react'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers, deleteUser } from "../services/api";
import { Link, useNavigate } from "react-router-dom";


const UserList = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
 console.log(data);
  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleDelete = (id) => {
    console.log("delete User");
    deleteMutation.mutate(id);
  };

  if (isPending) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2 ">
            <Link to="/postForm">
              <button className="btn btn-primary">Create new Data</button>
            </Link>
          </div>
          <table className=" table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => {
                console.log(user);
                return (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>
                    <Link className='btn btn-primary' to={`/update/${user._id}`}>
                    Edit
                  </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
