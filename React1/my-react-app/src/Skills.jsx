const Skills = ({ skill }) => {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skill.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
