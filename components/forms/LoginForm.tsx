import { Key, Mail } from '../ui/icons';

const LoginForm = () => {
  const labels = [
    { icon: Mail, type: 'email', placeholder: 'Email' },
    { icon: Key, type: 'password', placeholder: 'Password' },
  ];

  return (
    <div className="flex flex-col gap-4 ">
      {labels.map((label, index) => (
        <label
          key={index}
          className="bg-white dark:bg-dark-lg input input-bordered flex items-center gap-2"
        >
          <label.icon />
          <input
            type={label.type}
            className="bg-transparent"
            placeholder={label.placeholder}
          />
        </label>
      ))}
    </div>
  );
};

export default LoginForm;
