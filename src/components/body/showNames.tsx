export const ShowName = (name: any) => {
  return (
    <div className="name">
      <h1>{name.name[0]}</h1>
      <h4>{name.name[1]}</h4>
    </div>
  );
};
