const Header = ({ kurssi }) => {
  return (
    <div>
      <h1>{kurssi.name}</h1>
    </div>
  );
};

const Content = ({ kontentti }) => {
  return (
    <div>
      {kontentti.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <h4>Number of exercises {total}</h4>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header kurssi={course} />
      <Content kontentti={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
