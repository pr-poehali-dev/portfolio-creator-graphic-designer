import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  const portfolioWorks = [
    {
      id: 1,
      title: 'Абстрактная композиция',
      category: 'Дизайн',
      image: 'https://cdn.poehali.dev/projects/d861054e-a39d-405e-8874-cc93cd8e3749/files/31f833dc-cdd7-41fc-be54-d487780407aa.jpg',
      description: 'Современная геометрическая композиция с яркими градиентами'
    },
    {
      id: 2,
      title: 'Креативный постер',
      category: 'Графика',
      image: 'https://cdn.poehali.dev/projects/d861054e-a39d-405e-8874-cc93cd8e3749/files/36baabd9-ab13-4e8d-9880-a404d819e22e.jpg',
      description: 'Типографический постер с геометрическими паттернами'
    },
    {
      id: 3,
      title: 'Бренд-идентичность',
      category: 'Брендинг',
      image: 'https://cdn.poehali.dev/projects/d861054e-a39d-405e-8874-cc93cd8e3749/files/31f833dc-cdd7-41fc-be54-d487780407aa.jpg',
      description: 'Комплексная айдентика с уникальным визуальным языком'
    }
  ];

  const skills = [
    'Adobe Illustrator',
    'Figma',
    'Photoshop',
    'After Effects',
    'Typography',
    'Branding',
    'UI/UX Design',
    'Motion Graphics'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Портфолио
          </h1>
          <div className="flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Работы</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <Badge className="text-sm px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white border-0">
                  Графический дизайнер
                </Badge>
              </div>
              <h2 className="text-6xl font-bold leading-tight">
                Создаю
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  визуальные
                </span>
                истории
              </h2>
              <p className="text-xl text-muted-foreground">
                Превращаю идеи в яркие визуальные решения, которые запоминаются и вдохновляют
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <a href="#portfolio">Смотреть работы</a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Связаться
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full animate-float"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl"></div>
                  <div className="aspect-square bg-gradient-to-br from-secondary to-accent rounded-2xl"></div>
                  <div className="aspect-square bg-gradient-to-br from-accent to-primary rounded-2xl"></div>
                  <div className="aspect-square bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4">Мои работы</h2>
            <p className="text-xl text-muted-foreground">Избранные проекты из портфолио</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioWorks.map((work, index) => (
              <Dialog key={work.id}>
                <DialogTrigger asChild>
                  <Card 
                    className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={() => setSelectedWork(work.id)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={work.image} 
                        alt={work.title}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                        <div className="p-6 text-white">
                          <Badge className="mb-2 bg-white/20 backdrop-blur-sm border-0">{work.category}</Badge>
                          <h3 className="text-2xl font-bold">{work.title}</h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">{work.category}</Badge>
                      <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                      <p className="text-muted-foreground">{work.description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full rounded-lg"
                  />
                  <div className="space-y-4">
                    <Badge>{work.category}</Badge>
                    <h3 className="text-3xl font-bold">{work.title}</h3>
                    <p className="text-lg text-muted-foreground">{work.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl rounded-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/d861054e-a39d-405e-8874-cc93cd8e3749/files/6000f454-a27c-4f99-a38b-b26bf35acee9.jpg"
                alt="О дизайнере"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-5xl font-bold">Обо мне</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Я — графический дизайнер с 5+ годами опыта в создании визуальных решений для брендов и компаний. 
                Специализируюсь на создании айдентики, типографике и motion-дизайне.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <p className="font-semibold">Опыт</p>
                    <p className="text-sm text-muted-foreground">В графическом дизайне</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-white font-bold text-xl">
                    50+
                  </div>
                  <div>
                    <p className="font-semibold">Проектов</p>
                    <p className="text-sm text-muted-foreground">Успешно реализовано</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white font-bold text-xl">
                    30+
                  </div>
                  <div>
                    <p className="font-semibold">Клиентов</p>
                    <p className="text-sm text-muted-foreground">Доверяют мне</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Навыки</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="text-sm px-4 py-2 bg-gradient-to-r from-purple-100 to-orange-100 hover:from-primary hover:to-secondary hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto text-center space-y-4">
          <h3 className="text-3xl font-bold">Готовы начать проект?</h3>
          <p className="text-lg opacity-90">Свяжитесь со мной, и мы создадим что-то удивительное вместе</p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            <Icon name="Mail" size={20} className="mr-2" />
            Написать мне
          </Button>
          <div className="pt-8 flex justify-center gap-6">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Icon name="Linkedin" size={24} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;