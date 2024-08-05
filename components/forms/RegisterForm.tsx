"use client";
import Link from "next/link";
import { Key, Mail, User } from "../ui/icons";
import { useState } from "react";
import { fetchRegister } from "@/libs/api/api";
import { userStore } from "@/store";
import { useRouter } from "next/navigation";
const labels = [
  { name: "email", icon: Mail, type: "email", placeholder: "Email" },
  { name: "username", icon: User, type: "text", placeholder: "Username" },
  { name: "password", icon: Key, type: "password", placeholder: "Password" },
  {
    name: "confirmPassword",
    icon: Key,
    type: "password",
    placeholder: "Confirm Password",
  },
];
const LoginForm = () => {
  const router = useRouter();
  const { updateUser } = userStore((state: any) => state);
  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetchRegister(formData);
    if (response.data) {
      updateUser(response.data);
      router.push("/");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex bg-white dark:bg-dark-md p-8 lg:p-10 rounded-lg flex-col gap-4"
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className=" text-primary font-bold text-2xl ">Sign Up</h1>
        <div className="flex flex-col gap-3 ">
          {labels.map((label, index) => (
            <label
              key={index}
              className="bg-white dark:bg-dark-sm input input-bordered flex items-center gap-2"
            >
              <label.icon />
              <input
                name={label.name}
                type={label.type}
                onChange={handleChange}
                className="bg-transparent"
                placeholder={label.placeholder}
              />
            </label>
          ))}
        </div>
      </div>
      <div className="text-sm gap-2 flex justify-center items-center">
        <p>Have an account?</p>
        <Link className="text-primary font-semibold" href={"/login"}>
          {" "}
          Sign In
        </Link>
      </div>
      <button
        type="submit"
        className="text-white dark:text-dark-sm btn btn-primary normal-case"
      >
        Sign Up
      </button>
    </form>
  );
};

export default LoginForm;
