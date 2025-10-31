import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("main");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: "Laptop",
      title: "Установка Windows",
      description: "Установка и настройка операционной системы Windows любой версии",
      price: "от 1500 ₽"
    },
    {
      icon: "Smartphone",
      title: "Прошивка телефонов",
      description: "Обновление и перепрошивка смартфонов всех марок",
      price: "от 1000 ₽"
    },
    {
      icon: "Shield",
      title: "Лечение от вирусов",
      description: "Удаление вирусов и вредоносного ПО, защита системы",
      price: "от 800 ₽"
    },
    {
      icon: "Download",
      title: "Установка программ",
      description: "Установка и настройка любого программного обеспечения",
      price: "от 500 ₽"
    },
    {
      icon: "HardDrive",
      title: "Ремонт компьютеров",
      description: "Диагностика и ремонт компьютерной техники",
      price: "от 1200 ₽"
    },
    {
      icon: "Settings",
      title: "Настройка систем",
      description: "Оптимизация и настройка работы компьютера",
      price: "от 700 ₽"
    }
  ];

  const pricing = [
    { service: "Вызов мастера и диагностика", price: "500 ₽" },
    { service: "Установка Windows", price: "1500 ₽" },
    { service: "Установка драйверов", price: "500 ₽" },
    { service: "Прошивка Android", price: "1000 ₽" },
    { service: "Прошивка iOS", price: "1500 ₽" },
    { service: "Удаление вирусов", price: "800 ₽" },
    { service: "Установка антивируса", price: "600 ₽" },
    { service: "Установка программ (за ед.)", price: "500 ₽" },
    { service: "Настройка интернета", price: "700 ₽" },
    { service: "Замена комплектующих", price: "от 1200 ₽" }
  ];

  const reviews = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Быстро установили Windows 11 и все необходимые программы. Очень доволен результатом!",
      photo: "https://cdn.poehali.dev/projects/08b56f8f-a671-4ad4-a473-6fc8868e8282/files/ff55f116-3d2f-4252-ad91-06312504743e.jpg"
    },
    {
      name: "Мария С.",
      rating: 5,
      text: "Спасли мой телефон после неудачного обновления. Профессионалы своего дела!",
      photo: "https://cdn.poehali.dev/projects/08b56f8f-a671-4ad4-a473-6fc8868e8282/files/96fd1abb-efb8-4374-b27f-a212f5763344.jpg"
    },
    {
      name: "Дмитрий К.",
      rating: 5,
      text: "Удалили все вирусы и настроили защиту. Компьютер работает как новый. Рекомендую!",
      photo: "https://cdn.poehali.dev/projects/08b56f8f-a671-4ad4-a473-6fc8868e8282/files/ddbbc050-a9ff-4b06-985c-8ad38b025c25.jpg"
    }
  ];

  const benefits = [
    { icon: "Clock", title: "Быстро", text: "Выезд в день обращения" },
    { icon: "BadgeCheck", title: "Качественно", text: "Гарантия на все работы" },
    { icon: "Wallet", title: "Недорого", text: "Честные цены без накруток" },
    { icon: "MapPin", title: "Зеленоград", text: "Работаем по всему городу" }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Monitor" className="text-primary" size={28} />
              <span className="font-bold text-xl">Зел ремонт</span>
            </div>
            <div className="hidden md:flex gap-6">
              {["main", "services", "pricing", "about", "reviews", "contacts"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {section === "main" && "Главная"}
                  {section === "services" && "Услуги"}
                  {section === "pricing" && "Прайс"}
                  {section === "about" && "Преимущества"}
                  {section === "reviews" && "Отзывы"}
                  {section === "contacts" && "Контакты"}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+79256543213" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <Icon name="Phone" size={18} />
                +7 (925) 654-32-13
              </a>
              <Button onClick={() => scrollToSection("contacts")} size="sm">
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="main" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Евгений — ваш компьютерный мастер
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Более 10 лет опыта в ремонте компьютеров и IT-услугах в Зеленограде
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Установка Windows • Прошивка телефонов • Удаление вирусов • Установка программ
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("pricing")} className="group">
                Стоимость услуг
                <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contacts")}>
                <Icon name="Phone" className="mr-2" size={20} />
                Онлайн заявка
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground">
              Качественный ремонт и настройка вашей техники от Евгения
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm" onClick={() => scrollToSection("contacts")}>
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">
              Цена без лишних накруток. Приблизительная стоимость обговаривается по телефону.
            </p>
          </div>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-0">
              <div className="divide-y">
                {pricing.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors">
                    <span className="font-medium">{item.service}</span>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={review.photo} 
                      alt={review.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg mb-2">{review.name}</CardTitle>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Оставить заявку</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку и я свяжусь с вами в ближайшее время
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Услуга</label>
                    <Input placeholder="Например: Установка Windows" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <Textarea placeholder="Опишите вашу проблему..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-muted-foreground">+7 (925) 654-32-13</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" size={24} />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">info@it-service-zelenograd.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-muted-foreground">г. Зеленоград</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Wrench" size={24} />
            <span className="font-bold text-lg">IT-Сервис Зеленоград</span>
          </div>
          <p className="text-background/70">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;