
import { Card, CardContent } from '@/components/ui/card';

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'TailwindCSS', icon: '💨' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'React', icon: '⚛️' },
  { name: 'NodeJS', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="inline-block border-b-4 border-primary pb-2">My Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="transition-all duration-300 hover:shadow-lg border-none shadow-md">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-medium text-primary">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
