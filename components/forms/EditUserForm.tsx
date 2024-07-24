import { Key, Mail, User } from '../ui/icons';

const EditUserForm = () => {
  const labels = [
    { icon: Mail, type: 'email', placeholder: 'Email' },
    { icon: User, type: 'text', placeholder: 'Username' },
    { icon: Key, type: 'password', placeholder: 'Password' },
    { icon: Key, type: 'password', placeholder: 'New Password' },
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

export default EditUserForm;
