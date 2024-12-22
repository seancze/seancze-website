const skills = [
  "AngularJS",
  "Java",
  "Javascript",
  "MongoDB",
  "NodeJS",
  "OpenAI",
  "Python",
  "ReactJS",
  "Scala",
  "Swift",
  "TailwindCSS",
];

export default function Skills() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-center font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
