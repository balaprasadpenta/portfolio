import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const AboutSection = () => {
  const contactInfo = {
    email: "balaprasadpentawar@gmail.com",
    phone: "+91 9182656743",
    address: "Hyderabad, Telangana, India",
  };

  const handleResumeDownload = () => {
    try {
      // The resume should be placed in the public folder
      const resumePath = '/resume.docx';
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Balaprasad_Pentawar_Resume.docx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('Resume download started!');
    } catch (error) {
      toast.error('Failed to download resume. Please try again.');
    }
  };
  
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="inline-block border-b-4 border-primary pb-2">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate frontend developer with a strong foundation in web technologies. 
              I enjoy creating responsive and user-friendly web applications that provide 
              excellent user experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              With expertise in React and modern JavaScript, I build scalable web applications 
              that are both functional and aesthetically pleasing. I'm committed to writing clean, 
              maintainable code and constantly learning new technologies.
            </p>
            <Button 
              onClick={handleResumeDownload}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <div className="space-y-4">
              <Card className="border-none shadow-md">
                <CardContent className="p-4 flex items-center">
                  <Mail className="h-5 w-5 mr-4 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-4 flex items-center">
                  <Phone className="h-5 w-5 mr-4 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-4 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{contactInfo.address}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
