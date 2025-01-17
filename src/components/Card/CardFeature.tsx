const CardFeature: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = (
  props,
) => {
  return (
    <div className="flex cursor-pointer flex-col gap-4 rounded-xl bg-white p-6 shadow-1 duration-300 hover:scale-105 dark:bg-gray-dark dark:shadow-card">
      <div className="w-max rounded-full bg-orange-500 p-4 text-white">
        {props.icon}
      </div>
      <h4 className="h4">{props.title}</h4>
      <p>{props.desc}</p>
    </div>
  );
};

export default CardFeature;
