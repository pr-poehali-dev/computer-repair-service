import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Index = () => {
  const [activeSection, setActiveSection] = useState("main");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadPricePDF = () => {
    const doc = new jsPDF();
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Прайс-лист EvKomp", 105, 20, { align: "center" });
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Зеленоград | +7 (925) 654-32-13", 105, 28, { align: "center" });
    
    const tableData = pricing.map(item => [item.service, item.price]);
    
    autoTable(doc, {
      startY: 35,
      head: [["Услуга", "Цена"]],
      body: tableData,
      theme: "grid",
      headStyles: { fillColor: [59, 130, 246], fontSize: 11, fontStyle: "bold" },
      bodyStyles: { fontSize: 10 },
      columnStyles: {
        0: { cellWidth: 140 },
        1: { cellWidth: 40, halign: "right" }
      }
    });
    
    doc.save("evkomp-price.pdf");
  };



  const pricing = [
    { service: "Вызов мастера", price: "Бесплатно" },
    { service: "Диагностика", price: "500 ₽" },
    { service: "Установка Windows, Linux, MacOS", price: "1000 ₽" },
    { service: "Настройка Windows", price: "400 ₽" },
    { service: "Восстановление Windows", price: "от 1000 ₽" },
    { service: "Установка и настройка программ (за 1 шт.)", price: "300 ₽" },
    { service: "Настройка WiFi роутера с подключением устройств", price: "от 500 ₽" },
    { service: "Чистка", price: "от 400 ₽" },
    { service: "Установка Антивируса", price: "400 ₽" },
    { service: "Удаление вирусов", price: "от 500 ₽" },
    { service: "Замена процессора", price: "1000 ₽" },
    { service: "Замена HDD/SSD", price: "500 ₽" },
    { service: "Замена видеокарты", price: "500 ₽" },
    { service: "Замена оперативной памяти", price: "500 ₽" },
    { service: "Замена блока питания", price: "500 ₽" },
    { service: "Подключения устройств к Wi-Fi", price: "200 ₽" },
    { service: "Помощь с компьютером удаленно", price: "от 500 ₽" },
    { service: "Установка драйверов", price: "200 ₽" },
    { service: "Прошивка Android", price: "1000 ₽" },
    { service: "Прошивка IOS", price: "1000 ₽" }
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
    { icon: "Clock", title: "Удобно", text: "Договоримся на удобное вам время" },
    { icon: "BadgeCheck", title: "Качественно", text: "Недельная гарантия на все работы" },
    { icon: "Wallet", title: "Недорого", text: "Честные цены без накруток" }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Monitor" className="text-primary" size={28} />
              <span className="font-bold text-xl">EvKomp</span>
            </div>
            <div className="hidden md:flex gap-6">
              {["main", "pricing", "about", "reviews", "aboutme", "contacts"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {section === "main" && "Главная"}
                  {section === "pricing" && "Прайс"}
                  {section === "about" && "Преимущества"}
                  {section === "reviews" && "Отзывы"}
                  {section === "aboutme" && "Обо мне"}
                  {section === "contacts" && "Контакты"}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+79256543213" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <Icon name="Phone" size={18} />
                +7 (925) 654-32-13
              </a>
              <a href="https://wa.me/79256543213" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="https://t.me/itmaster_zelenograd" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {["main", "pricing", "about", "reviews", "aboutme", "contacts"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {section === "main" && "Главная"}
                  {section === "pricing" && "Прайс"}
                  {section === "about" && "Преимущества"}
                  {section === "reviews" && "Отзывы"}
                  {section === "aboutme" && "Обо мне"}
                  {section === "contacts" && "Контакты"}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-2 border-t">
                <a href="tel:+79256543213" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                  <Icon name="Phone" size={18} />
                  +7 (925) 654-32-13
                </a>
                <a href="https://wa.me/79256543213" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp
                </a>
                <a href="https://t.me/itmaster_zelenograd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                  <Icon name="Send" size={18} />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <section id="main" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">Евгений Кранин — ваш компьютерный мастер</h1>
            <p className="text-lg text-muted-foreground mb-4">Выезд по Зеленограду и ближайшим населенным пунктам.
 Удаленная компьютерная помощь по всей России.</p>

            <p className="text-lg text-muted-foreground mb-8">Установка Windows • Удаление вирусов • Установка программ • Замена и подключение устройств • Прошивка планшетов и телефонов и многое другое</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("pricing")} className="group">
                Стоимость услуг
                <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contacts")}>
                Связаться со мной
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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



      <section id="pricing" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">
              Приблизительная стоимость обговаривается по телефону
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
          <div className="text-center mt-8">
            <Button onClick={downloadPricePDF} size="lg" className="gap-2">
              <Icon name="Download" size={20} />
              Скачать прайс-лист (PDF)
            </Button>
          </div>
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

      <section id="aboutme" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Обо мне</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://cdn.poehali.dev/projects/08b56f8f-a671-4ad4-a473-6fc8868e8282/files/d78fe828-0ce0-40b8-a0cb-9db1f398036b.jpg"
                      alt="Евгений Кранин"
                      className="w-40 h-40 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Меня зовут Евгений Кранин. Я мастер компьютерной техники, специалист по орг техники, программист, веб дизайнер. 
                      Осуществляю полный спектр услуг в IT сфере. Долгое время работал в известных компаниях, а сейчас решил поработать на себя. 
                      Более 20 лет опыта в ремонте компьютерной техники и IT-услугах.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-xl text-muted-foreground">
                Свяжитесь со мной любым удобным способом
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-muted-foreground">+7 (925) 654-32-13</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-muted-foreground">+7 (925) 654-32-13</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Send" className="text-primary" size={24} />
                    <div>
                      <div className="font-medium">Telegram</div>
                      <div className="text-muted-foreground">@itmaster_zelenograd</div>
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
            <Icon name="Monitor" size={28} />
            <span className="font-bold text-xl">EvKomp</span>
          </div>
          <p className="text-background/70">© 2025 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;