import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Network, Server, Wifi, Settings, Plus, Minus, Shield, Users, BarChart3, FileText, Calendar, Package, Tag, Layers } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import './App.css';

// Import assets
import logoImage from './assets/images/techbucketlogoblack.png';
import heroBackground from './assets/images/hero_background.jpg';

// API Configuration
const API_BASE_URL = 'https://techbucket-api.onrender.com/api';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </div>
    </Router>
  );
}

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoImage} alt="TechBucket" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/support">
              <Button variant="outline" size="sm">
                Support
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" size="sm">
                Events
              </Button>
            </Link>
            <Link to="/products">
              <Button size="sm">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              <Link to="/" className="block px-3 py-2 text-foreground hover:text-primary">
                Home
              </Link>
              <Link to="/products" className="block px-3 py-2 text-foreground hover:text-primary">
                Products
              </Link>
              <Link to="/services" className="block px-3 py-2 text-foreground hover:text-primary">
                Services
              </Link>
              <Link to="/about" className="block px-3 py-2 text-foreground hover:text-primary">
                About Us
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact
              </Link>
              <Link to="/support" className="block px-3 py-2 text-foreground hover:text-primary">
                Support
              </Link>
              <Link to="/events" className="block px-3 py-2 text-foreground hover:text-primary">
                Events
              </Link>
              <div className="px-3 py-2">
                <Link to="/products">
                  <Button size="sm" className="w-full">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your <span className="text-gradient">Technology</span> Partner
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          TechBucket enables entrepreneurs, small businesses, and enterprises with the best technological expertise, guidance, and support for achieving efficiency and growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/products">
            <Button size="lg" className="text-lg px-8 py-3">
              Get Quote
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20">
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About TechBucket</h2>
          <p className="text-lg text-muted-foreground mb-8">
            TechBucket was founded with the aim to enable entrepreneurs, small businesses, and enterprises with the best technological expertise, guidance, and support for achieving efficiency and growth. Our team is composed of energetic and qualified professionals who specialize in networking, system and security, hardware and software solutions, and web designing with the primary goal to deliver the products and technical capabilities to the customer in the best possible way.
          </p>
          <p className="text-lg text-muted-foreground">
            TechBucket's principle is to facilitate the technological needs of individuals and businesses in an integrated manner through the efficient and strategic implementation and incorporation of information technology. We believe that our perseverance and dedication along with the ability to adapt and innovate allows us to stand out from the crowd and establish ourselves as the go-to choice for integrated IT solutions and infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}

// Services Section Component
function ServicesSection() {
  const services = [
    {
      icon: <Network className="h-12 w-12 text-primary" />,
      title: "Network Infrastructure Design",
      description: "Comprehensive network planning and architecture design tailored to your business needs."
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Network Infrastructure Implementation",
      description: "Professional implementation and deployment of network infrastructure solutions."
    },
    {
      icon: <Wifi className="h-12 w-12 text-primary" />,
      title: "Wireless Deployment",
      description: "Complete wireless network setup and optimization for seamless connectivity."
    },
    {
      icon: <Server className="h-12 w-12 text-primary" />,
      title: "Server and System Administration",
      description: "Expert server management and system administration services for optimal performance."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive IT solutions to help your business thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Products Section Component
function FeaturedProductsSection() {
  const products = [
    {
      id: 1,
      name: "Cisco Catalyst 9300 Series",
      category: "Cisco",
      type: "Networking",
      description: "Enterprise-class stackable access switches with advanced security and management features.",
      specifications: ["48 x 1G ports", "4 x 10G uplinks", "StackWise-480 technology", "DNA ready"],
      image: "/assets/images/networking.jpg", 
      price: "Contact for pricing"
    },
    {
      id: 2,
      name: "Dell PowerEdge R750",
      category: "Dell",
      type: "Servers",
      description: "2U rack server designed for demanding workloads with exceptional performance.",
      specifications: ["Intel Xeon Scalable processors", "Up to 4TB memory", "NVMe SSD support", "iDRAC9 management"],
      image: "/assets/images/security.jpg", 
      price: "Contact for pricing"
    },
    {
      id: 3,
      name: "HP ProLiant DL380 Gen10",
      category: "HP",
      type: "Servers",
      description: "Industry-standard 2U rack server for diverse workloads and environments.",
      specifications: ["Intel Xeon processors", "Up to 3TB memory", "12Gb/s SAS", "iLO5 management"],
      image: "/assets/images/hero_background.jpg", 
      price: "Contact for pricing"
    },
    {
      id: 4,
      name: "Cisco Meraki MR46",
      category: "Cisco",
      type: "Wireless",
      description: "Wi-Fi 6 cloud-managed access point for high-density environments.",
      specifications: ["Wi-Fi 6 (802.11ax)", "4x4:4 MU-MIMO", "Cloud management", "Advanced security"],
      image: "/assets/images/networking.jpg", 
      price: "Contact for pricing"
    },
    {
      id: 5,
      name: "Dell Networking N3248TE-ON",
      category: "Dell",
      type: "Networking",
      description: "48-port 1GbE Top of Rack switch with 10GbE uplinks.",
      specifications: ["48 x 1GbE ports", "4 x 10GbE SFP+", "Open Networking", "ONIE support"],
      image: "/assets/images/security.jpg", 
      price: "Contact for pricing"
    },
    {
      id: 6,
      name: "HP Aruba 6300M Series",
      category: "HP",
      type: "Networking",
      description: "Modular campus core and aggregation switch with advanced features.",
      specifications: ["Modular design", "Up to 576 ports", "VSF stacking", "AOS-CX operating system"],
      image: "/assets/images/hero_background.jpg", 
      price: "Contact for pricing"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of IT hardware from leading brands like Cisco, Dell, and HP.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover-lift">
              <div className="aspect-video bg-muted rounded-t-lg"></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <span className="text-sm text-primary font-medium">{product.category}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {product.description}
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products">
            <Button size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section Component
function WhyChooseUsSection() {
  const features = [
    {
      title: "Expert Team",
      description: "Energetic and qualified professionals specializing in networking, security, and IT solutions."
    },
    {
      title: "Integrated Solutions",
      description: "Comprehensive IT services from design to implementation and ongoing support."
    },
    {
      title: "Business Focus",
      description: "Tailored solutions for entrepreneurs, small businesses, and enterprises."
    },
    {
      title: "Innovation & Adaptation",
      description: "Continuous innovation and adaptation to meet evolving technology needs."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TechBucket?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We stand out from the crowd with our dedication, expertise, and commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section className="py-16 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? Contact us today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="opacity-90">Balaju, Kathmandu, Nepal</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="opacity-90">+977-1-XXXXXXX</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="opacity-90">info@techbucket.com.np</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logoImage} alt="TechBucket" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground">
              Your trusted technology partner for comprehensive IT solutions and infrastructure.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-muted-foreground hover:text-primary">Support Center</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary">Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Balaju, Kathmandu, Nepal</p>
              <p>+977-1-XXXXXXX</p>
              <p>info@techbucket.com.np</p>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 TechBucket Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// HomePage Component
function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProductsSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

// Placeholder components for other pages
function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Cisco', 'Dell', 'HP', 'Networking', 'Servers', 'Wireless'];

  const products = [
    {
      id: 1,
      name: "Cisco Catalyst 9300 Series",
      category: "Cisco",
      type: "Networking",
      description: "Enterprise-class stackable access switches with advanced security and management features.",
      specifications: ["48 x 1G ports", "4 x 10G uplinks", "StackWise-480 technology", "DNA ready"],
      image: "/assets/images/networking.jpg",
      price: "Contact for pricing"
    },
    {
      id: 2,
      name: "Dell PowerEdge R750",
      category: "Dell",
      type: "Servers",
      description: "2U rack server designed for demanding workloads with exceptional performance.",
      specifications: ["Intel Xeon Scalable processors", "Up to 4TB memory", "NVMe SSD support", "iDRAC9 management"],
      image: "/assets/images/security.jpg",
      price: "Contact for pricing"
    },
    {
      id: 3,
      name: "HP ProLiant DL380 Gen10",
      category: "HP",
      type: "Servers",
      description: "Industry-standard 2U rack server for diverse workloads and environments.",
      specifications: ["Intel Xeon processors", "Up to 3TB memory", "12Gb/s SAS", "iLO5 management"],
      image: "/assets/images/hero_background.jpg",
      price: "Contact for pricing"
    },
    {
      id: 4,
      name: "Cisco Meraki MR46",
      category: "Cisco",
      type: "Wireless",
      description: "Wi-Fi 6 cloud-managed access point for high-density environments.",
      specifications: ["Wi-Fi 6 (802.11ax)", "4x4:4 MU-MIMO", "Cloud management", "Advanced security"],
      image: "/assets/images/networking.jpg",
      price: "Contact for pricing"
    },
    {
      id: 5,
      name: "Dell Networking N3248TE-ON",
      category: "Dell",
      type: "Networking",
      description: "48-port 1GbE Top of Rack switch with 10GbE uplinks.",
      specifications: ["48 x 1GbE ports", "4 x 10GbE SFP+", "Open Networking", "ONIE support"],
      image: "/assets/images/security.jpg",
      price: "Contact for pricing"
    },
    {
      id: 6,
      name: "HP Aruba 6300M Series",
      category: "HP",
      type: "Networking",
      description: "Modular campus core and aggregation switch with advanced features.",
      specifications: ["Modular design", "Up to 576 ports", "VSF stacking", "AOS-CX operating system"],
      image: "/assets/images/networking.jpg",
      price: "Contact for pricing"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || 
                           product.category === selectedCategory || 
                           product.type === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Discover our comprehensive range of IT hardware from leading brands like Cisco, Dell, and HP. 
                Get quotes for enterprise-grade networking, server, and wireless solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background border border-border hover:bg-muted'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

// Product Card Component
function ProductCard({ product }) {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  return (
    <>
      <Card className="hover-lift h-full flex flex-col">
        {/* UPDATED IMAGE SECTION START */}
        <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = logoImage; 
            }}
          />
        </div>
        {/* UPDATED IMAGE SECTION END */}
        
        <CardHeader className="flex-grow">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
              {product.category}
            </span>
            <span className="text-sm text-muted-foreground">{product.type}</span>
          </div>
          <CardTitle className="text-xl">{product.name}</CardTitle>
          <CardDescription className="text-base">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {product.specifications.map((spec, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quantity Selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Quantity:</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={decreaseQuantity}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">{product.price}</span>
            <Button onClick={() => setShowQuoteForm(true)}>
              Get Quote
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <QuoteFormModal 
          product={product} 
          quantity={quantity}
          onClose={() => setShowQuoteForm(false)} 
        />
      )}
    </>
  );
}

// Quote Form Modal Component
function QuoteFormModal({ product, quantity, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/quote-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          officeEmail: formData.email,
          company: formData.company,
          productName: product.name,
          quantity: quantity,
          requirements: formData.message
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        alert(`Quote request submitted successfully! Quote ID: ${result.quote_id}. Our sales team will contact you soon.`);
        onClose();
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting quote request:', error);
      alert('Error submitting quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Request Quote</h3>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="mb-4 p-3 bg-muted rounded-lg">
            <h4 className="font-medium">{product.name}</h4>
            <p className="text-sm text-muted-foreground">{product.category} - {product.type}</p>
            <p className="text-sm font-medium text-primary">Quantity: {quantity}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Contact Number *</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                pattern="[0-9]*"
                inputMode="numeric"
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Office Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Company/Organization</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Additional Requirements</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Specifications, timeline, etc."
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Submit Quote Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Network Infrastructure Design",
      icon: <Network className="h-16 w-16 text-primary" />,
      description: "Comprehensive network planning and architecture design tailored to your business needs.",
      fullDescription: "Our network infrastructure design service provides end-to-end planning and architecture solutions for businesses of all sizes. We analyze your current infrastructure, understand your business requirements, and design scalable, secure, and efficient network solutions that grow with your organization.",
      features: [
        "Network topology design and planning",
        "Scalability and future-proofing analysis",
        "Security architecture integration",
        "Performance optimization strategies",
        "Vendor-neutral recommendations",
        "Detailed documentation and blueprints"
      ],
      benefits: [
        "Reduced network downtime",
        "Improved performance and reliability",
        "Cost-effective infrastructure",
        "Enhanced security posture",
        "Simplified management and maintenance"
      ],
      process: [
        "Current infrastructure assessment",
        "Business requirements analysis",
        "Network design and architecture",
        "Documentation and presentation",
        "Implementation planning"
      ]
    },
    {
      id: 2,
      title: "Network Infrastructure Implementation",
      icon: <Settings className="h-16 w-16 text-primary" />,
      description: "Professional implementation and deployment of network infrastructure solutions.",
      fullDescription: "Our experienced team handles the complete implementation of your network infrastructure, ensuring seamless deployment with minimal disruption to your business operations. We follow industry best practices and provide comprehensive testing and validation.",
      features: [
        "Professional installation and configuration",
        "Minimal business disruption",
        "Comprehensive testing and validation",
        "Quality assurance and compliance",
        "Project management and coordination",
        "Post-implementation support"
      ],
      benefits: [
        "Faster deployment timelines",
        "Reduced implementation risks",
        "Professional installation quality",
        "Comprehensive testing coverage",
        "Ongoing support and maintenance"
      ],
      process: [
        "Pre-implementation planning",
        "Equipment procurement and staging",
        "Installation and configuration",
        "Testing and validation",
        "Go-live and handover"
      ]
    },
    {
      id: 3,
      title: "Wireless Deployment",
      icon: <Wifi className="h-16 w-16 text-primary" />,
      description: "Complete wireless network setup and optimization for seamless connectivity.",
      fullDescription: "We provide comprehensive wireless networking solutions, from site surveys to deployment and optimization. Our wireless experts ensure optimal coverage, performance, and security for your wireless infrastructure.",
      features: [
        "Site surveys and RF planning",
        "Access point placement optimization",
        "Wireless security implementation",
        "Performance monitoring and optimization",
        "Guest network configuration",
        "Mobile device management integration"
      ],
      benefits: [
        "Optimal wireless coverage",
        "Enhanced user experience",
        "Secure wireless access",
        "Scalable wireless infrastructure",
        "Reduced interference issues"
      ],
      process: [
        "Site survey and RF analysis",
        "Wireless design and planning",
        "Equipment installation",
        "Configuration and optimization",
        "Testing and validation"
      ]
    },
    {
      id: 4,
      title: "Server and System Administration",
      icon: <Server className="h-16 w-16 text-primary" />,
      description: "Expert server management and system administration services for optimal performance.",
      fullDescription: "Our server and system administration services ensure your critical systems run smoothly and efficiently. We provide proactive monitoring, maintenance, and optimization to maximize uptime and performance.",
      features: [
        "24/7 server monitoring and maintenance",
        "Performance optimization and tuning",
        "Security updates and patch management",
        "Backup and disaster recovery",
        "Capacity planning and scaling",
        "Troubleshooting and issue resolution"
      ],
      benefits: [
        "Maximum system uptime",
        "Improved performance and reliability",
        "Enhanced security and compliance",
        "Reduced operational costs",
        "Peace of mind with expert support"
      ],
      process: [
        "System assessment and audit",
        "Monitoring setup and configuration",
        "Maintenance schedule planning",
        "Ongoing monitoring and support",
        "Regular reporting and optimization"
      ]
    },
    {
      id: 5,
      title: "Annual Maintenance Contract",
      icon: <Settings className="h-16 w-16 text-primary" />,
      description: "Comprehensive annual maintenance contracts for all your IT infrastructure and equipment.",
      fullDescription: "Our Annual Maintenance Contract (AMC) provides comprehensive coverage for your IT infrastructure, ensuring optimal performance, minimal downtime, and cost-effective maintenance throughout the year. We offer flexible AMC packages tailored to your specific needs and budget.",
      features: [
        "Preventive maintenance scheduling",
        "Priority technical support",
        "Hardware replacement coverage",
        "Software updates and patches",
        "Performance monitoring and reporting",
        "Emergency response services"
      ],
      benefits: [
        "Predictable maintenance costs",
        "Reduced unexpected downtime",
        "Extended equipment lifespan",
        "Priority support access",
        "Cost savings on repairs"
      ],
      process: [
        "Infrastructure assessment and audit",
        "AMC package customization",
        "Contract agreement and setup",
        "Scheduled maintenance execution",
        "Ongoing monitoring and reporting"
      ]
    },
    {
      id: 6,
      title: "Service Maintenance Contract",
      icon: <Settings className="h-16 w-16 text-primary" />,
      description: "Dedicated service maintenance contracts for ongoing support and optimization.",
      fullDescription: "Our Service Maintenance Contract ensures continuous support for your IT services and applications. We provide proactive monitoring, regular maintenance, and rapid issue resolution to keep your business operations running smoothly.",
      features: [
        "Proactive service monitoring",
        "Regular health checks and optimization",
        "Incident response and resolution",
        "Performance tuning and optimization",
        "Documentation and reporting",
        "Service level agreement (SLA) compliance"
      ],
      benefits: [
        "Improved service reliability",
        "Faster issue resolution",
        "Optimized performance",
        "Reduced operational overhead",
        "Guaranteed service levels"
      ],
      process: [
        "Service assessment and baseline",
        "SLA definition and agreement",
        "Monitoring setup and configuration",
        "Regular maintenance and optimization",
        "Continuous monitoring and reporting"
      ]
    },
    {
      id: 7,
      title: "Backup and Monitoring",
      icon: <Server className="h-16 w-16 text-primary" />,
      description: "Comprehensive backup solutions and 24/7 monitoring services for data protection.",
      fullDescription: "Our backup and monitoring services provide comprehensive data protection and real-time system monitoring. We ensure your critical data is safely backed up and your systems are continuously monitored for optimal performance and security.",
      features: [
        "Automated backup scheduling",
        "Real-time system monitoring",
        "Data encryption and security",
        "Disaster recovery planning",
        "Alert and notification systems",
        "Backup verification and testing"
      ],
      benefits: [
        "Complete data protection",
        "Rapid disaster recovery",
        "Proactive issue detection",
        "Compliance with data regulations",
        "Peace of mind with 24/7 monitoring"
      ],
      process: [
        "Backup strategy assessment",
        "Monitoring infrastructure setup",
        "Automated backup configuration",
        "Testing and validation",
        "Ongoing monitoring and maintenance"
      ]
    },
    {
      id: 8,
      title: "IT Infrastructure Audit",
      icon: <Settings className="h-16 w-16 text-primary" />,
      description: "Comprehensive IT infrastructure assessment and security audit services.",
      fullDescription: "Our IT Infrastructure Audit service provides thorough assessment of your current IT environment, identifying vulnerabilities, inefficiencies, and opportunities for improvement. We deliver detailed reports with actionable recommendations to enhance security, performance, and compliance.",
      features: [
        "Comprehensive infrastructure assessment",
        "Security vulnerability analysis",
        "Performance and efficiency evaluation",
        "Compliance and regulatory review",
        "Risk assessment and mitigation",
        "Detailed reporting and recommendations"
      ],
      benefits: [
        "Enhanced security posture",
        "Improved operational efficiency",
        "Regulatory compliance assurance",
        "Risk mitigation and prevention",
        "Cost optimization opportunities"
      ],
      process: [
        "Initial infrastructure discovery",
        "Detailed assessment and analysis",
        "Security and compliance review",
        "Report generation and presentation",
        "Recommendations and action planning"
      ]
    }
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                We provide comprehensive IT solutions to help your business thrive in the digital age. 
                Our expert team delivers professional services from design to implementation and ongoing support.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {services.map((service) => (
                <Card 
                  key={service.id} 
                  className={`hover-lift cursor-pointer transition-all ${
                    selectedService.id === service.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <CardHeader className="text-center p-4">
                    <div className="flex justify-center mb-3">
                      {React.cloneElement(service.icon, { className: "h-12 w-12 text-primary" })}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Detailed Service View */}
            <div className="bg-muted/50 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    {selectedService.icon}
                    <h2 className="text-3xl font-bold ml-4">{selectedService.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8">
                    {selectedService.fullDescription}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                    <ol className="space-y-3">
                      {selectedService.process.map((step, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="flex gap-4">
                    <Button size="lg">
                      Get Consultation
                    </Button>
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine technical expertise with business understanding to deliver solutions that drive results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
                <p className="text-muted-foreground">Custom solutions designed specifically for your business needs and requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Implementation</h3>
                <p className="text-muted-foreground">Efficient project delivery with minimal disruption to your business operations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">Comprehensive support and maintenance to ensure optimal performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let our experts help you design, implement, and maintain a robust IT infrastructure that supports your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    organizationName: '',
    contact: '',
    organizationEmail: '',
    issueType: '',
    priority: 'Medium',
    subject: '',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const issueTypes = [
    'Hardware Issue',
    'Software Problem',
    'Network Connectivity',
    'Security Concern',
    'Performance Issue',
    'Configuration Support',
    'General Inquiry',
    'Other'
  ];

  const priorities = ['Low', 'Medium', 'High', 'Critical'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/support-case`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            organizationName: '',
            contact: '',
            organizationEmail: '',
            issueType: '',
            priority: 'Medium',
            subject: '',
            description: ''
          });
        }, 3000);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting support case:', error);
      alert('Error submitting support case. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Support</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Get expert technical support for all your IT infrastructure needs. 
                Our support team is here to help you resolve issues quickly and efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Can Help</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from multiple support channels to get the assistance you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Phone Support</CardTitle>
                  <CardDescription>
                    Get immediate assistance from our technical experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-lg mb-2">+977-1-4123456</p>
                  <p className="text-sm text-muted-foreground">
                    Mon-Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 2:00 PM
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>
                    Send us detailed information about your issue
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-lg mb-2">support@techbucket.com.np</p>
                  <p className="text-sm text-muted-foreground">
                    Response within 24 hours<br />
                    Detailed technical assistance
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Case Management</CardTitle>
                  <CardDescription>
                    Submit a support case for tracking and follow-up
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-lg mb-2">Online Portal</p>
                  <p className="text-sm text-muted-foreground">
                    Track case progress<br />
                    Priority-based handling
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Case Form */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Submit a Support Case</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below to create a support case. Our team will respond promptly.
                </p>
              </div>

              {isSubmitted ? (
                <Card className="text-center p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-green-600">Case Submitted Successfully!</h3>
                  <p className="text-muted-foreground mb-4">
                    Your support case has been created. Our technical team will review your request and respond within 24 hours.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Case ID: #TB{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                  </p>
                </Card>
              ) : (
                <Card className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Organization Name *</label>
                        <input
                          type="text"
                          name="organizationName"
                          value={formData.organizationName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your organization name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Contact Number *</label>
                        <input
                          type="tel"
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your contact number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Organization Email *</label>
                        <input
                          type="email"
                          name="organizationEmail"
                          value={formData.organizationEmail}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="organization@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Issue Type *</label>
                        <select
                          name="issueType"
                          value={formData.issueType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select issue type</option>
                          {issueTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Priority</label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {priorities.map((priority) => (
                            <option key={priority} value={priority}>{priority}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Brief description of the issue"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Detailed Description *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Please provide detailed information about the issue, including any error messages, steps to reproduce, and impact on your operations..."
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button type="submit" size="lg" className="flex-1">
                        Submit Support Case
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="lg"
                        onClick={() => setFormData({
                          name: '',
                          organizationName: '',
                          contact: '',
                          organizationEmail: '',
                          issueType: '',
                          priority: 'Medium',
                          subject: '',
                          description: ''
                        })}
                      >
                        Clear Form
                      </Button>
                    </div>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Resources</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Additional resources to help you resolve common issues and optimize your IT infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">📚</span>
                  </div>
                  <CardTitle className="text-lg">Knowledge Base</CardTitle>
                  <CardDescription>
                    Browse our comprehensive documentation and guides
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🎥</span>
                  </div>
                  <CardTitle className="text-lg">Video Tutorials</CardTitle>
                  <CardDescription>
                    Step-by-step video guides for common procedures
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">💬</span>
                  </div>
                  <CardTitle className="text-lg">Community Forum</CardTitle>
                  <CardDescription>
                    Connect with other users and share experiences
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🔧</span>
                  </div>
                  <CardTitle className="text-lg">Remote Support</CardTitle>
                  <CardDescription>
                    Schedule remote assistance sessions with our experts
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    contact: '',
    email: '',
    eventId: '',
    additionalInfo: ''
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const events = [
    {
      id: 1,
      title: "Network Security Workshop 2025",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "TechBucket Training Center, Balaju",
      type: "Workshop",
      status: "Open",
      capacity: "30 participants",
      price: "Free",
      description: "Comprehensive workshop on network security best practices, threat detection, and incident response strategies.",
      agenda: [
        "Network Security Fundamentals",
        "Threat Detection and Analysis",
        "Firewall Configuration",
        "Incident Response Planning",
        "Hands-on Lab Sessions"
      ],
      speaker: "Senior Network Security Expert",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Cloud Infrastructure Seminar",
      date: "April 8, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Hotel Himalaya, Kathmandu",
      type: "Seminar",
      status: "Open",
      capacity: "50 participants",
      price: "NPR 2,000",
      description: "Learn about modern cloud infrastructure solutions, migration strategies, and cost optimization techniques.",
      agenda: [
        "Cloud Computing Overview",
        "Infrastructure as Code",
        "Migration Strategies",
        "Cost Optimization",
        "Q&A Session"
      ],
      speaker: "Cloud Solutions Architect",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "IT Infrastructure Modernization Conference",
      date: "May 20, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Soaltee Crowne Plaza, Kathmandu",
      type: "Conference",
      status: "Early Bird",
      capacity: "100 participants",
      price: "NPR 5,000",
      description: "Annual conference featuring latest trends in IT infrastructure, digital transformation, and emerging technologies.",
      agenda: [
        "Keynote: Future of IT Infrastructure",
        "Digital Transformation Case Studies",
        "Emerging Technologies Panel",
        "Networking Lunch",
        "Breakout Sessions"
      ],
      speaker: "Industry Leaders & Experts",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Cisco Networking Certification Bootcamp",
      date: "June 10-12, 2025",
      time: "9:00 AM - 5:00 PM (3 Days)",
      location: "TechBucket Training Center, Balaju",
      type: "Training",
      status: "Limited Seats",
      capacity: "20 participants",
      price: "NPR 15,000",
      description: "Intensive 3-day bootcamp to prepare for Cisco networking certifications with hands-on lab practice.",
      agenda: [
        "Day 1: Routing Fundamentals",
        "Day 2: Switching Technologies",
        "Day 3: Network Troubleshooting",
        "Practice Exams",
        "Certification Guidance"
      ],
      speaker: "Cisco Certified Instructors",
      image: "/api/placeholder/400/250"
    }
  ];

  const handleRegistration = (event) => {
    setSelectedEvent(event);
    setRegistrationData({
      ...registrationData,
      eventId: event.id
    });
    setShowRegistrationForm(true);
  };

  const handleSubmitRegistration = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/event-registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: registrationData.name,
          contact: registrationData.contact,
          email: registrationData.email,
          eventName: selectedEvent.title,
          eventDate: selectedEvent.date,
          eventTime: selectedEvent.time,
          eventPrice: selectedEvent.price,
          additionalInfo: registrationData.additionalInfo
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsRegistered(true);
        setTimeout(() => {
          setIsRegistered(false);
          setShowRegistrationForm(false);
          setRegistrationData({
            name: '',
            contact: '',
            email: '',
            eventId: '',
            additionalInfo: ''
          });
        }, 3000);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting event registration:', error);
      alert('Error submitting event registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'bg-green-100 text-green-800';
      case 'Early Bird': return 'bg-blue-100 text-blue-800';
      case 'Limited Seats': return 'bg-orange-100 text-orange-800';
      case 'Closed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Training</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Join our technical workshops, seminars, and training programs to enhance your IT skills 
                and stay updated with the latest technology trends.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our upcoming workshops, seminars, and training programs designed to advance your technical expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event) => (
                <Card key={event.id} className="hover-lift overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">Event Image</div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
                        {event.status}
                      </span>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {event.type}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {event.description}
                    </CardDescription>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        <strong>Date:</strong> <span className="ml-1">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        <strong>Time:</strong> <span className="ml-1">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        <strong>Location:</strong> <span className="ml-1">{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        <strong>Capacity:</strong> <span className="ml-1">{event.capacity}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        <strong>Price:</strong> <span className="ml-1 font-semibold text-primary">{event.price}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Agenda:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {event.agenda.slice(0, 3).map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                        {event.agenda.length > 3 && (
                          <li className="text-xs text-muted-foreground">
                            +{event.agenda.length - 3} more topics...
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => handleRegistration(event)}
                        className="flex-1"
                        disabled={event.status === 'Closed'}
                      >
                        {event.status === 'Closed' ? 'Registration Closed' : 'Register Now'}
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Categories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer various types of learning experiences to suit different needs and skill levels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <CardTitle className="text-lg">Workshops</CardTitle>
                  <CardDescription>
                    Hands-on learning sessions with practical exercises and real-world scenarios
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <CardTitle className="text-lg">Seminars</CardTitle>
                  <CardDescription>
                    Expert presentations on latest trends and technologies in IT infrastructure
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <CardTitle className="text-lg">Conferences</CardTitle>
                  <CardDescription>
                    Large-scale events featuring industry leaders and networking opportunities
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <CardTitle className="text-lg">Training</CardTitle>
                  <CardDescription>
                    Intensive certification preparation and skill development programs
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Attend Our Events */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Attend Our Events?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of IT professionals who have enhanced their skills through our events.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍🏫</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p className="text-muted-foreground">
                  Learn from industry experts with years of practical experience in IT infrastructure and networking.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Networking</h3>
                <p className="text-muted-foreground">
                  Connect with like-minded professionals and expand your professional network in the IT industry.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📜</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Certificates</h3>
                <p className="text-muted-foreground">
                  Receive certificates of completion and continuing education credits for professional development.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Registration Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {isRegistered ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-green-600">Registration Successful!</h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for registering for <strong>{selectedEvent?.title}</strong>. 
                    You will receive a confirmation email shortly with event details.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Registration ID: #EVT{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Event Registration</h3>
                    <button 
                      onClick={() => setShowRegistrationForm(false)} 
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  
                  <div className="mb-4 p-3 bg-muted rounded-lg">
                    <h4 className="font-medium">{selectedEvent?.title}</h4>
                    <p className="text-sm text-muted-foreground">{selectedEvent?.date} • {selectedEvent?.time}</p>
                    <p className="text-sm font-medium text-primary">Price: {selectedEvent?.price}</p>
                  </div>

                  <form onSubmit={handleSubmitRegistration} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={registrationData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Contact Number *</label>
                      <input
                        type="tel"
                        name="contact"
                        value={registrationData.contact}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your contact number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={registrationData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Additional Information</label>
                      <textarea
                        name="additionalInfo"
                        value={registrationData.additionalInfo}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Dietary restrictions, accessibility needs, etc."
                      />
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setShowRegistrationForm(false)} 
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="flex-1">
                        Register
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About TechBucket</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Your trusted technology partner, enabling entrepreneurs, small businesses, and enterprises 
                with the best technological expertise, guidance, and support for achieving efficiency and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    TechBucket was founded with the aim to enable entrepreneurs, small businesses, and enterprises 
                    with the best technological expertise, guidance, and support for achieving efficiency and growth. 
                    Our team is composed of energetic and qualified professionals who specialize in networking, 
                    system and security, hardware and software solutions, and web designing.
                  </p>
                  <p>
                    Our primary goal is to deliver the products and technical capabilities to the customer in the 
                    best possible way. We believe that our perseverance and dedication along with the ability to 
                    adapt and innovate allows us to stand out from the crowd and establish ourselves as the go-to 
                    choice for integrated IT solutions and infrastructure.
                  </p>
                  <p>
                    TechBucket's principle is to facilitate the technological needs of individuals and businesses 
                    in an integrated manner through the efficient and strategic implementation and incorporation 
                    of information technology.
                  </p>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl mb-4 block">🏢</span>
                  <h3 className="text-xl font-semibold mb-2">TechBucket Office</h3>
                  <p className="text-muted-foreground">Balaju, Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission & Vision</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence drives everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 text-center hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To enable entrepreneurs, small businesses, and enterprises with the best technological 
                  expertise, guidance, and support for achieving efficiency and growth through innovative 
                  IT solutions and exceptional service delivery.
                </p>
              </Card>

              <Card className="p-8 text-center hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading technology partner in Nepal, recognized for our ability to adapt, 
                  innovate, and deliver integrated IT solutions that transform businesses and drive 
                  digital transformation across industries.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our work and define our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Continuously adapting and innovating to provide cutting-edge solutions
                </p>
              </Card>

              <Card className="p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🏆</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Delivering the highest quality products and services to our customers
                </p>
              </Card>

              <Card className="p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Partnership</h3>
                <p className="text-muted-foreground text-sm">
                  Building long-term relationships based on trust and mutual success
                </p>
              </Card>

              <Card className="p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Efficiency</h3>
                <p className="text-muted-foreground text-sm">
                  Streamlining processes to deliver maximum value and performance
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive IT solutions tailored to your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Network Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Complete network infrastructure design, implementation, and wireless deployment services.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Network Infrastructure Design</li>
                  <li>• Network Implementation</li>
                  <li>• Wireless Deployment</li>
                </ul>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🖥️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">System Administration</h3>
                <p className="text-muted-foreground mb-4">
                  Professional server and system administration with ongoing maintenance and support.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Server Administration</li>
                  <li>• System Maintenance</li>
                  <li>• IT Infrastructure Audit</li>
                </ul>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Support & Maintenance</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive support contracts and monitoring services for peace of mind.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Annual Maintenance Contracts</li>
                  <li>• Service Maintenance</li>
                  <li>• Backup & Monitoring</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Energetic and qualified professionals specializing in various aspects of IT infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center hover-lift">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Leadership Team</h3>
                <p className="text-muted-foreground text-sm">
                  Experienced leaders driving strategic vision and company growth
                </p>
              </Card>

              <Card className="p-6 text-center hover-lift">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Network Engineers</h3>
                <p className="text-muted-foreground text-sm">
                  Certified professionals specializing in network design and implementation
                </p>
              </Card>

              <Card className="p-6 text-center hover-lift">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🔧</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">System Administrators</h3>
                <p className="text-muted-foreground text-sm">
                  Expert administrators ensuring optimal system performance and security
                </p>
              </Card>

              <Card className="p-6 text-center hover-lift">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🎓</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Support Team</h3>
                <p className="text-muted-foreground text-sm">
                  Dedicated support professionals providing exceptional customer service
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TechBucket?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our perseverance, dedication, and ability to adapt make us stand out from the crowd.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Tailored Solutions</h3>
                <p className="text-muted-foreground">
                  We understand that every business is unique. Our solutions are customized to meet your specific requirements and goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Implementation</h3>
                <p className="text-muted-foreground">
                  Our experienced team ensures quick and efficient implementation without compromising on quality or reliability.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  We provide comprehensive ongoing support and maintenance to ensure your systems run smoothly 24/7.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Expertise</h3>
                <p className="text-muted-foreground">
                  Our team brings years of experience and industry certifications to deliver the best possible outcomes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
                <p className="text-muted-foreground">
                  We provide maximum value for your investment with transparent pricing and no hidden costs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Long-term Partnership</h3>
                <p className="text-muted-foreground">
                  We build lasting relationships with our clients, growing together and adapting to changing needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how TechBucket can help your business achieve efficiency and growth through innovative IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="px-8">
                    Get Started Today
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="px-8">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

function ContactPage() {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    organizationName: '',
    contact: '',
    organizationEmail: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setInquiryData({
      ...inquiryData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inquiryData),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setInquiryData({
            name: '',
            organizationName: '',
            contact: '',
            organizationEmail: '',
            subject: '',
            message: ''
          });
        }, 3000);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      alert('Error submitting inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Get in touch with our team for any inquiries, support, or business opportunities. 
                We're here to help you with all your IT infrastructure needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  {/* Office Address */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Office Address</h3>
                        <p className="text-muted-foreground">
                          Balaju, Kathmandu, Nepal<br />
                          Ward No. 16, Kathmandu Metropolitan City
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Phone */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📞</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <p className="text-muted-foreground">
                          +977-1-4123456<br />
                          +977-9841234567 (Mobile)
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Mon-Fri: 9:00 AM - 6:00 PM<br />
                          Sat: 9:00 AM - 2:00 PM
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Email */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">✉️</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          info@techbucket.com.np<br />
                          sales@techbucket.com.np<br />
                          support@techbucket.com.np
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Business Hours */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🕒</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                          <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                          <p><strong>Sunday:</strong> Closed</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Inquiry Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send us an Inquiry</h2>
                
                {isSubmitted ? (
                  <Card className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✓</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-green-600">Inquiry Sent Successfully!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for your inquiry. Our team will get back to you within 24 hours.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Inquiry ID: #INQ{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                    </p>
                  </Card>
                ) : (
                  <Card className="p-8">
                    <form onSubmit={handleSubmitInquiry} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={inquiryData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Organization Name *</label>
                          <input
                            type="text"
                            name="organizationName"
                            value={inquiryData.organizationName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your organization name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Contact Number *</label>
                          <input
                            type="tel"
                            name="contact"
                            value={inquiryData.contact}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your contact number"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Organization Email *</label>
                          <input
                            type="email"
                            name="organizationEmail"
                            value={inquiryData.organizationEmail}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="organization@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Subject *</label>
                        <input
                          type="text"
                          name="subject"
                          value={inquiryData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Brief subject of your inquiry"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Message *</label>
                        <textarea
                          name="message"
                          value={inquiryData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Please provide detailed information about your inquiry, requirements, or questions..."
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Send Inquiry
                      </Button>
                    </form>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit our office in Balaju, Kathmandu for in-person consultations and support.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl mb-4 block">🗺️</span>
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    Balaju, Kathmandu, Nepal<br />
                    Ward No. 16, Kathmandu Metropolitan City
                  </p>
                  <Button variant="outline" className="mt-4">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Contact</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Need immediate assistance? Choose the best way to reach us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our experts for immediate assistance
                </p>
                <Button variant="outline" className="w-full">
                  +977-1-4123456
                </Button>
              </Card>

              <Card className="text-center p-8 hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-4">
                  Chat with our support team for quick answers
                </p>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </Card>

              <Card className="text-center p-8 hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we'll respond within 24 hours
                </p>
                <Button variant="outline" className="w-full">
                  info@techbucket.com.np
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner with TechBucket?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing exceptional service and building long-term partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Response</h3>
                <p className="text-muted-foreground text-sm">
                  Quick response times for all inquiries and support requests
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Tailored IT solutions designed by experienced professionals
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Trusted Partner</h3>
                <p className="text-muted-foreground text-sm">
                  Long-term partnerships built on trust and reliability
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Service</h3>
                <p className="text-muted-foreground text-sm">
                  Committed to delivering the highest quality of service
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;



// Admin Application Component
function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/check-auth`, {
        credentials: 'include'
      });
      const data = await response.json();
      
      if (data.authenticated) {
        setIsAuthenticated(true);
        setAdmin(data.admin);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={checkAuth} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<AdminDashboard admin={admin} />} />
        <Route path="/products" element={<AdminProducts />} />
        <Route path="/brands" element={<AdminBrands />} />
        <Route path="/categories" element={<AdminCategories />} />
        <Route path="/services" element={<AdminServices />} />
        <Route path="/events" element={<AdminEvents />} />
        <Route path="/quotes" element={<AdminQuotes />} />
        <Route path="/support" element={<AdminSupport />} />
        <Route path="/inquiries" element={<AdminInquiries />} />
        <Route path="/registrations" element={<AdminRegistrations />} />
        <Route path="/settings" element={<AdminSettings admin={admin} />} />
      </Routes>
    </div>
  );
}

// Admin Login Component
function AdminLogin({ onLogin }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        onLogin();
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img src={logoImage} alt="TechBucket" className="mx-auto h-16 w-auto" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Panel
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to manage TechBucket
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Enter username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <Shield className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Admin Layout Component
function AdminLayout({ children, title, admin }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/admin/logout`, {
        method: 'POST',
        credentials: 'include'
      });
      window.location.reload();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const menuItems = [
    { path: '/admin', icon: BarChart3, label: 'Dashboard' },
    { path: '/admin/products', icon: Package, label: 'Products' },
    { path: '/admin/brands', icon: Tag, label: 'Brands' },
    { path: '/admin/categories', icon: Layers, label: 'Categories' },
    { path: '/admin/services', icon: Settings, label: 'Services' },
    { path: '/admin/events', icon: Calendar, label: 'Events' },
    { path: '/admin/quotes', icon: FileText, label: 'Quote Requests' },
    { path: '/admin/support', icon: Users, label: 'Support Cases' },
    { path: '/admin/inquiries', icon: Mail, label: 'Inquiries' },
    { path: '/admin/registrations', icon: Users, label: 'Event Registrations' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300`}>
        <div className="flex items-center justify-between p-4 border-b">
          {isSidebarOpen && (
            <img src={logoImage} alt="TechBucket" className="h-8 w-auto" />
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>
        
        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
            >
              <item.icon className="w-5 h-5" />
              {isSidebarOpen && <span className="ml-3">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {admin?.username}</span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

// Admin Dashboard Component
function AdminDashboard({ admin }) {
  const [stats, setStats] = useState(null);
  const [recentActivity, setRecentActivity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/dashboard`, {
        credentials: 'include'
      });
      const data = await response.json();
      
      if (data.success) {
        setStats(data.stats);
        setRecentActivity(data.recent_activity);
      }
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Dashboard" admin={admin}>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Dashboard" admin={admin}>
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.total_products || 0}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Services</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.total_services || 0}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Quotes</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.pending_quotes || 0}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Support Cases</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.open_support_cases || 0}</div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Quote Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity?.quotes?.map((quote) => (
                  <div key={quote.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">{quote.name}</p>
                      <p className="text-sm text-gray-600">{quote.product_name}</p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(quote.created_at).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Support Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity?.support?.map((support) => (
                  <div key={support.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">{support.name}</p>
                      <p className="text-sm text-gray-600">{support.subject}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded ${
                      support.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                      support.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {support.priority}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}


// Admin Products Management Component
function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    specifications: [],
    image_url: '',
    price: '',
    brand_id: '',
    category_id: '',
    is_active: true,
    featured: false
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [productsRes, brandsRes, categoriesRes] = await Promise.all([
        fetch(`${API_BASE_URL}/admin/products`, { credentials: 'include' }),
        fetch(`${API_BASE_URL}/admin/brands`, { credentials: 'include' }),
        fetch(`${API_BASE_URL}/admin/categories`, { credentials: 'include' })
      ]);

      const [productsData, brandsData, categoriesData] = await Promise.all([
        productsRes.json(),
        brandsRes.json(),
        categoriesRes.json()
      ]);

      if (productsData.success) setProducts(productsData.data);
      if (brandsData.success) setBrands(brandsData.data);
      if (categoriesData.success) setCategories(categoriesData.data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = editingProduct 
      ? `${API_BASE_URL}/admin/products/${editingProduct.id}`
      : `${API_BASE_URL}/admin/products`;
    
    const method = editingProduct ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          ...formData,
          specifications: formData.specifications.filter(spec => spec.trim() !== '')
        })
      });

      const data = await response.json();
      
      if (data.success) {
        fetchData();
        setShowForm(false);
        setEditingProduct(null);
        resetForm();
      }
    } catch (error) {
      console.error('Failed to save product:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/products/${id}`, {
          method: 'DELETE',
          credentials: 'include'
        });

        if (response.ok) {
          fetchData();
        }
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      specifications: [],
      image_url: '',
      price: '',
      brand_id: '',
      category_id: '',
      is_active: true,
      featured: false
    });
  };

  const startEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      specifications: product.specifications || [],
      image_url: product.image_url,
      price: product.price,
      brand_id: product.brand_id,
      category_id: product.category_id,
      is_active: product.is_active,
      featured: product.featured
    });
    setShowForm(true);
  };

  const addSpecification = () => {
    setFormData({
      ...formData,
      specifications: [...formData.specifications, '']
    });
  };

  const updateSpecification = (index, value) => {
    const newSpecs = [...formData.specifications];
    newSpecs[index] = value;
    setFormData({ ...formData, specifications: newSpecs });
  };

  const removeSpecification = (index) => {
    const newSpecs = formData.specifications.filter((_, i) => i !== index);
    setFormData({ ...formData, specifications: newSpecs });
  };

  if (isLoading) {
    return (
      <AdminLayout title="Products Management">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Products Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Products ({products.length})</h2>
          <Button onClick={() => { setShowForm(true); setEditingProduct(null); resetForm(); }}>
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>

        {/* Product Form Modal */}
        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Product Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Price</label>
                    <input
                      type="number"
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Brand</label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.brand_id}
                      onChange={(e) => setFormData({ ...formData, brand_id: e.target.value })}
                    >
                      <option value="">Select Brand</option>
                      {brands.map(brand => (
                        <option key={brand.id} value={brand.id}>{brand.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.category_id}
                      onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                    >
                      <option value="">Select Category</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Image URL</label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium">Specifications</label>
                    <Button type="button" variant="outline" size="sm" onClick={addSpecification}>
                      <Plus className="w-4 h-4 mr-1" />
                      Add Spec
                    </Button>
                  </div>
                  {formData.specifications.map((spec, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={spec}
                        onChange={(e) => updateSpecification(index, e.target.value)}
                        placeholder="Enter specification"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeSpecification(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={formData.is_active}
                      onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    />
                    Active
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    />
                    Featured
                  </label>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingProduct ? 'Update' : 'Create'} Product
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Products List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm" onClick={() => startEdit(product)}>
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(product.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p><strong>Brand:</strong> {product.brand?.name}</p>
                  <p><strong>Category:</strong> {product.category?.name}</p>
                  <p><strong>Price:</strong> {product.price ? `$${product.price}` : 'Contact for pricing'}</p>
                  <p className="text-gray-600">{product.description}</p>
                  
                  <div className="flex space-x-2">
                    {product.is_active && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</span>
                    )}
                    {product.featured && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Featured</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

// Admin Brands Management Component
function AdminBrands() {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBrand, setEditingBrand] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    logo_url: '',
    website: '',
    is_active: true
  });

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/brands`, { credentials: 'include' });
      const data = await response.json();
      
      if (data.success) {
        setBrands(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch brands:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = editingBrand 
      ? `${API_BASE_URL}/admin/brands/${editingBrand.id}`
      : `${API_BASE_URL}/admin/brands`;
    
    const method = editingBrand ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (data.success) {
        fetchBrands();
        setShowForm(false);
        setEditingBrand(null);
        resetForm();
      }
    } catch (error) {
      console.error('Failed to save brand:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this brand?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/brands/${id}`, {
          method: 'DELETE',
          credentials: 'include'
        });

        if (response.ok) {
          fetchBrands();
        }
      } catch (error) {
        console.error('Failed to delete brand:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      logo_url: '',
      website: '',
      is_active: true
    });
  };

  const startEdit = (brand) => {
    setEditingBrand(brand);
    setFormData({
      name: brand.name,
      description: brand.description,
      logo_url: brand.logo_url,
      website: brand.website,
      is_active: brand.is_active
    });
    setShowForm(true);
  };

  if (isLoading) {
    return (
      <AdminLayout title="Brands Management">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Brands Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Brands ({brands.length})</h2>
          <Button onClick={() => { setShowForm(true); setEditingBrand(null); resetForm(); }}>
            <Plus className="w-4 h-4 mr-2" />
            Add Brand
          </Button>
        </div>

        {/* Brand Form */}
        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>{editingBrand ? 'Edit Brand' : 'Add New Brand'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Brand Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Website</label>
                    <input
                      type="url"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Logo URL</label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.logo_url}
                    onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
                  />
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={formData.is_active}
                      onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    />
                    Active
                  </label>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingBrand ? 'Update' : 'Create'} Brand
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Brands List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Card key={brand.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{brand.name}</h3>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm" onClick={() => startEdit(brand)}>
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(brand.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">{brand.description}</p>
                  {brand.website && (
                    <p><strong>Website:</strong> <a href={brand.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{brand.website}</a></p>
                  )}
                  
                  <div className="flex space-x-2">
                    {brand.is_active && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}


// Admin Categories Management Component
function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    icon: '',
    is_active: true
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/categories`, { credentials: 'include' });
      const data = await response.json();
      
      if (data.success) {
        setCategories(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = editingCategory 
      ? `${API_BASE_URL}/admin/categories/${editingCategory.id}`
      : `${API_BASE_URL}/admin/categories`;
    
    const method = editingCategory ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (data.success) {
        fetchCategories();
        setShowForm(false);
        setEditingCategory(null);
        resetForm();
      }
    } catch (error) {
      console.error('Failed to save category:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/categories/${id}`, {
          method: 'DELETE',
          credentials: 'include'
        });

        if (response.ok) {
          fetchCategories();
        }
      } catch (error) {
        console.error('Failed to delete category:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      icon: '',
      is_active: true
    });
  };

  const startEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
      icon: category.icon,
      is_active: category.is_active
    });
    setShowForm(true);
  };

  if (isLoading) {
    return (
      <AdminLayout title="Categories Management">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Categories Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Categories ({categories.length})</h2>
          <Button onClick={() => { setShowForm(true); setEditingCategory(null); resetForm(); }}>
            <Plus className="w-4 h-4 mr-2" />
            Add Category
          </Button>
        </div>

        {/* Category Form */}
        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>{editingCategory ? 'Edit Category' : 'Add New Category'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Category Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Icon</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.icon}
                      onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                      placeholder="e.g., network, server, wireless"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={formData.is_active}
                      onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    />
                    Active
                  </label>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingCategory ? 'Update' : 'Create'} Category
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Categories List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm" onClick={() => startEdit(category)}>
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(category.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">{category.description}</p>
                  {category.icon && (
                    <p><strong>Icon:</strong> {category.icon}</p>
                  )}
                  
                  <div className="flex space-x-2">
                    {category.is_active && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

// Admin Services Management Component
function AdminServices() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    features: [],
    benefits: [],
    process: [],
    icon: '',
    is_active: true,
    featured: false
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/services`, { credentials: 'include' });
      const data = await response.json();
      
      if (data.success) {
        setServices(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch services:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = editingService 
      ? `${API_BASE_URL}/admin/services/${editingService.id}`
      : `${API_BASE_URL}/admin/services`;
    
    const method = editingService ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          ...formData,
          features: formData.features.filter(item => item.trim() !== ''),
          benefits: formData.benefits.filter(item => item.trim() !== ''),
          process: formData.process.filter(item => item.trim() !== '')
        })
      });

      const data = await response.json();
      
      if (data.success) {
        fetchServices();
        setShowForm(false);
        setEditingService(null);
        resetForm();
      }
    } catch (error) {
      console.error('Failed to save service:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/services/${id}`, {
          method: 'DELETE',
          credentials: 'include'
        });

        if (response.ok) {
          fetchServices();
        }
      } catch (error) {
        console.error('Failed to delete service:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      features: [],
      benefits: [],
      process: [],
      icon: '',
      is_active: true,
      featured: false
    });
  };

  const startEdit = (service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      features: service.features || [],
      benefits: service.benefits || [],
      process: service.process || [],
      icon: service.icon,
      is_active: service.is_active,
      featured: service.featured
    });
    setShowForm(true);
  };

  const addArrayItem = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], '']
    });
  };

  const updateArrayItem = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const removeArrayItem = (field, index) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: newArray });
  };

  if (isLoading) {
    return (
      <AdminLayout title="Services Management">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Services Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Services ({services.length})</h2>
          <Button onClick={() => { setShowForm(true); setEditingService(null); resetForm(); }}>
            <Plus className="w-4 h-4 mr-2" />
            Add Service
          </Button>
        </div>

        {/* Service Form */}
        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>{editingService ? 'Edit Service' : 'Add New Service'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Service Title</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Icon</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.icon}
                      onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                      placeholder="e.g., network, server, wireless"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    rows="3"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                {/* Features */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium">Features</label>
                    <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem('features')}>
                      <Plus className="w-4 h-4 mr-1" />
                      Add Feature
                    </Button>
                  </div>
                  {formData.features.map((feature, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={feature}
                        onChange={(e) => updateArrayItem('features', index, e.target.value)}
                        placeholder="Enter feature"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeArrayItem('features', index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium">Benefits</label>
                    <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem('benefits')}>
                      <Plus className="w-4 h-4 mr-1" />
                      Add Benefit
                    </Button>
                  </div>
                  {formData.benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={benefit}
                        onChange={(e) => updateArrayItem('benefits', index, e.target.value)}
                        placeholder="Enter benefit"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeArrayItem('benefits', index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Process */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium">Process Steps</label>
                    <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem('process')}>
                      <Plus className="w-4 h-4 mr-1" />
                      Add Step
                    </Button>
                  </div>
                  {formData.process.map((step, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={step}
                        onChange={(e) => updateArrayItem('process', index, e.target.value)}
                        placeholder="Enter process step"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeArrayItem('process', index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={formData.is_active}
                      onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    />
                    Active
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    />
                    Featured
                  </label>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingService ? 'Update' : 'Create'} Service
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card key={service.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm" onClick={() => startEdit(service)}>
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(service.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">{service.description}</p>
                  
                  {service.features && service.features.length > 0 && (
                    <div>
                      <strong>Features:</strong>
                      <ul className="list-disc list-inside ml-2">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                        {service.features.length > 3 && <li>... and {service.features.length - 3} more</li>}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex space-x-2">
                    {service.is_active && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</span>
                    )}
                    {service.featured && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Featured</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}


// Admin Events Management Component
function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    capacity: '',
    price: '',
    event_type: '',
    status: 'Open',
    agenda: [],
    is_active: true,
    featured: false
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/events`, { credentials: 'include' });
      const data = await response.json();
      
      if (data.success) {
        setEvents(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch events:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = editingEvent 
      ? `${API_BASE_URL}/admin/events/${editingEvent.id}`
      : `${API_BASE_URL}/admin/events`;
    
    const method = editingEvent ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          ...formData,
          agenda: formData.agenda.filter(item => item.trim() !== '')
        })
      });

      const data = await response.json();
      
      if (data.success) {
        fetchEvents();
        setShowForm(false);
        setEditingEvent(null);
        resetForm();
      }
    } catch (error) {
      console.error('Failed to save event:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/events/${id}`, {
          method: 'DELETE',
          credentials: 'include'
        });

        if (response.ok) {
          fetchEvents();
        }
      } catch (error) {
        console.error('Failed to delete event:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      capacity: '',
      price: '',
      event_type: '',
      status: 'Open',
      agenda: [],
      is_active: true,
      featured: false
    });
  };

  const startEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      capacity: event.capacity,
      price: event.price,
      event_type: event.event_type,
      status: event.status,
      agenda: event.agenda || [],
      is_active: event.is_active,
      featured: event.featured
    });
    setShowForm(true);
  };

  const addAgendaItem = () => {
    setFormData({
      ...formData,
      agenda: [...formData.agenda, '']
    });
  };

  const updateAgendaItem = (index, value) => {
    const newAgenda = [...formData.agenda];
    newAgenda[index] = value;
    setFormData({ ...formData, agenda: newAgenda });
  };

  const removeAgendaItem = (index) => {
    const newAgenda = formData.agenda.filter((_, i) => i !== index);
    setFormData({ ...formData, agenda: newAgenda });
  };

  if (isLoading) {
    return (
      <AdminLayout title="Events Management">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Events Management">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Events ({events.length})</h2>
          <Button onClick={() => { setShowForm(true); setEditingEvent(null); resetForm(); }}>
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </div>

        {/* Event Form */}
        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>{editingEvent ? 'Edit Event' : 'Add New Event'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Event Title</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Event Type</label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.event_type}
                      onChange={(e) => setFormData({ ...formData, event_type: e.target.value })}
                    >
                      <option value="">Select Type</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Seminar">Seminar</option>
                      <option value="Conference">Conference</option>
                      <option value="Training">Training</option>
                      <option value="Webinar">Webinar</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <input
                      type="date"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Time</label>
                    <input
                      type="time"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Location</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Capacity</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.capacity}
                      onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Price (NPR)</label>
                    <input
                      type="number"
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                      <option value="Open">Open</option>
                      <option value="Early Bird">Early Bird</option>
                      <option value="Limited Seats">Limited Seats</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    rows="3"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                {/* Agenda */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium">Agenda</label>
                    <Button type="button" variant="outline" size="sm" onClick={addAgendaItem}>
                      <Plus className="w-4 h-4 mr-1" />
                      Add Item
                    </Button>
                  </div>
                  {formData.agenda.map((item, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        value={item}
                        onChange={(e) => updateAgendaItem(index, e.target.value)}
                        placeholder="Enter agenda item"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeAgendaItem(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={formData.is_active}
                      onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    />
                    Active
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    />
                    Featured
                  </label>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingEvent ? 'Update' : 'Create'} Event
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Events List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm" onClick={() => startEdit(event)}>
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(event.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p><strong>Type:</strong> {event.event_type}</p>
                  <p><strong>Date:</strong> {event.date} at {event.time}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p><strong>Price:</strong> {event.price ? `NPR ${event.price}` : 'Free'}</p>
                  <p className="text-gray-600">{event.description}</p>
                  
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 text-xs rounded ${
                      event.status === 'Open' ? 'bg-green-100 text-green-800' :
                      event.status === 'Early Bird' ? 'bg-blue-100 text-blue-800' :
                      event.status === 'Limited Seats' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {event.status}
                    </span>
                    {event.is_active && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Active</span>
                    )}
                    {event.featured && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Featured</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

// Admin Quote Requests Management Component
function AdminQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [responseData, setResponseData] = useState({
    response_message: '',
    status: 'pending'
  });

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/quotes`, { credentials: 'include' });
      const data = await response.json();
      
      if (data.success) {
        setQuotes(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch quotes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/quotes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ status, admin_notes: responseData.response_message })
      });

      if (response.ok) {
        fetchQuotes();
        setShowResponseModal(false);
        setSelectedQuote(null);
        setResponseData({ response_message: '', status: 'pending' });
      }
    } catch (error) {
      console.error('Failed to update quote:', error);
    }
  };

  const openResponseModal = (quote) => {
    setSelectedQuote(quote);
    setResponseData({
      response_message: quote.admin_notes || '',
      status: quote.status || 'pending'
    });
    setShowResponseModal(true);
  };

  if (isLoading) {
    return (
      <AdminLayout title="Quote Requests">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Quote Requests">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Quote Requests ({quotes.length})</h2>
        </div>

        {/* Response Modal */}
        {showResponseModal && selectedQuote && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Respond to Quote Request</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p><strong>Customer:</strong> {selectedQuote.name}</p>
                    <p><strong>Product:</strong> {selectedQuote.product_name}</p>
                    <p><strong>Quantity:</strong> {selectedQuote.quantity}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={responseData.status}
                      onChange={(e) => setResponseData({ ...responseData, status: e.target.value })}
                    >
                      <option value="pending">Pending</option>
                      <option value="responded">Responded</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Response Message</label>
                    <textarea
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={responseData.response_message}
                      onChange={(e) => setResponseData({ ...responseData, response_message: e.target.value })}
                      placeholder="Enter your response..."
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setShowResponseModal(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => handleUpdateStatus(selectedQuote.id, responseData.status)}>
                      Update
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quotes List */}
        <div className="space-y-4">
          {quotes.map((quote) => (
            <Card key={quote.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <h3 className="font-semibold">{quote.name}</h3>
                      <span className={`px-2 py-1 text-xs rounded ${
                        quote.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        quote.status === 'responded' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {quote.status || 'pending'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>Product:</strong> {quote.product_name}</p>
                        <p><strong>Quantity:</strong> {quote.quantity}</p>
                        <p><strong>Contact:</strong> {quote.contact}</p>
                      </div>
                      <div>
                        <p><strong>Email:</strong> {quote.office_email}</p>
                        <p><strong>Company:</strong> {quote.company || 'N/A'}</p>
                        <p><strong>Date:</strong> {new Date(quote.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    {quote.requirements && (
                      <div>
                        <p><strong>Requirements:</strong></p>
                        <p className="text-gray-600">{quote.requirements}</p>
                      </div>
                    )}
                    
                    {quote.admin_notes && (
                      <div>
                        <p><strong>Admin Notes:</strong></p>
                        <p className="text-gray-600">{quote.admin_notes}</p>
                      </div>
                    )}
                  </div>
                  
                  <Button variant="outline" size="sm" onClick={() => openResponseModal(quote)}>
                    Respond
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}


// Admin Support Cases Management Component
function AdminSupport() {
  const [supportCases, setSupportCases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCase, setSelectedCase] = useState(null);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [responseData, setResponseData] = useState({
    response_message: '',
    status: 'open'
  });

  useEffect(() => {
    fetchSupportCases();
  }, []);

  const fetchSupportCases = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/support`, { credentials: 'include' });
      const data = await response.json();
      
      if (data.success) {
        setSupportCases(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch support cases:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/support/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ status, admin_notes: responseData.response_message })
      });

      if (response.ok) {
        fetchSupportCases();
        setShowResponseModal(false);
        setSelectedCase(null);
        setResponseData({ response_message: '', status: 'open' });
      }
    } catch (error) {
      console.error('Failed to update support case:', error);
    }
  };

  const openResponseModal = (supportCase) => {
    setSelectedCase(supportCase);
    setResponseData({
      response_message: supportCase.admin_notes || '',
      status: supportCase.status || 'open'
    });
    setShowResponseModal(true);
  };

  if (isLoading) {
    return (
      <AdminLayout title="Support Cases">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Support Cases">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Support Cases ({supportCases.length})</h2>
        </div>

        {/* Response Modal */}
        {showResponseModal && selectedCase && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Respond to Support Case</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p><strong>Customer:</strong> {selectedCase.name}</p>
                    <p><strong>Organization:</strong> {selectedCase.organization_name}</p>
                    <p><strong>Subject:</strong> {selectedCase.subject}</p>
                    <p><strong>Priority:</strong> {selectedCase.priority}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={responseData.status}
                      onChange={(e) => setResponseData({ ...responseData, status: e.target.value })}
                    >
                      <option value="open">Open</option>
                      <option value="in_progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Response Message</label>
                    <textarea
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={responseData.response_message}
                      onChange={(e) => setResponseData({ ...responseData, response_message: e.target.value })}
                      placeholder="Enter your response..."
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setShowResponseModal(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => handleUpdateStatus(selectedCase.id, responseData.status)}>
                      Update
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Support Cases List */}
        <div className="space-y-4">
          {supportCases.map((supportCase) => (
            <Card key={supportCase.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <h3 className="font-semibold">{supportCase.subject}</h3>
                      <span className={`px-2 py-1 text-xs rounded ${
                        supportCase.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                        supportCase.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                        supportCase.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {supportCase.priority}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded ${
                        supportCase.status === 'open' ? 'bg-green-100 text-green-800' :
                        supportCase.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                        supportCase.status === 'resolved' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {supportCase.status || 'open'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>Customer:</strong> {supportCase.name}</p>
                        <p><strong>Organization:</strong> {supportCase.organization_name}</p>
                        <p><strong>Contact:</strong> {supportCase.contact}</p>
                      </div>
                      <div>
                        <p><strong>Email:</strong> {supportCase.organization_email}</p>
                        <p><strong>Issue Type:</strong> {supportCase.issue_type}</p>
                        <p><strong>Date:</strong> {new Date(supportCase.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p><strong>Description:</strong></p>
                      <p className="text-gray-600">{supportCase.description}</p>
                    </div>
                    
                    {supportCase.admin_notes && (
                      <div>
                        <p><strong>Admin Notes:</strong></p>
                        <p className="text-gray-600">{supportCase.admin_notes}</p>
                      </div>
                    )}
                  </div>
                  
                  <Button variant="outline" size="sm" onClick={() => openResponseModal(supportCase)}>
                    Respond
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

// Admin Inquiries Management Component
function AdminInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [responseData, setResponseData] = useState({
    response_message: '',
    status: 'new'
  });

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/inquiries`, { credentials: 'include' });
      const data = await response.json();
      
      if (data.success) {
        setInquiries(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch inquiries:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/inquiries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ status, admin_notes: responseData.response_message })
      });

      if (response.ok) {
        fetchInquiries();
        setShowResponseModal(false);
        setSelectedInquiry(null);
        setResponseData({ response_message: '', status: 'new' });
      }
    } catch (error) {
      console.error('Failed to update inquiry:', error);
    }
  };

  const openResponseModal = (inquiry) => {
    setSelectedInquiry(inquiry);
    setResponseData({
      response_message: inquiry.admin_notes || '',
      status: inquiry.status || 'new'
    });
    setShowResponseModal(true);
  };

  if (isLoading) {
    return (
      <AdminLayout title="Inquiries">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Inquiries">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Inquiries ({inquiries.length})</h2>
        </div>

        {/* Response Modal */}
        {showResponseModal && selectedInquiry && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Respond to Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p><strong>Customer:</strong> {selectedInquiry.name}</p>
                    <p><strong>Organization:</strong> {selectedInquiry.organization_name}</p>
                    <p><strong>Subject:</strong> {selectedInquiry.subject}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={responseData.status}
                      onChange={(e) => setResponseData({ ...responseData, status: e.target.value })}
                    >
                      <option value="new">New</option>
                      <option value="responded">Responded</option>
                      <option value="archived">Archived</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Response Message</label>
                    <textarea
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={responseData.response_message}
                      onChange={(e) => setResponseData({ ...responseData, response_message: e.target.value })}
                      placeholder="Enter your response..."
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setShowResponseModal(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => handleUpdateStatus(selectedInquiry.id, responseData.status)}>
                      Update
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Inquiries List */}
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <Card key={inquiry.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <h3 className="font-semibold">{inquiry.subject}</h3>
                      <span className={`px-2 py-1 text-xs rounded ${
                        inquiry.status === 'new' ? 'bg-green-100 text-green-800' :
                        inquiry.status === 'responded' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {inquiry.status || 'new'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>Customer:</strong> {inquiry.name}</p>
                        <p><strong>Organization:</strong> {inquiry.organization_name}</p>
                        <p><strong>Contact:</strong> {inquiry.contact}</p>
                      </div>
                      <div>
                        <p><strong>Email:</strong> {inquiry.organization_email}</p>
                        <p><strong>Date:</strong> {new Date(inquiry.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p><strong>Message:</strong></p>
                      <p className="text-gray-600">{inquiry.message}</p>
                    </div>
                    
                    {inquiry.admin_notes && (
                      <div>
                        <p><strong>Admin Notes:</strong></p>
                        <p className="text-gray-600">{inquiry.admin_notes}</p>
                      </div>
                    )}
                  </div>
                  
                  <Button variant="outline" size="sm" onClick={() => openResponseModal(inquiry)}>
                    Respond
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

// Admin Event Registrations Management Component
function AdminRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/registrations`, { credentials: 'include' });
      const data = await response.json();
      
      if (data.success) {
        setRegistrations(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch registrations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/registrations/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        fetchRegistrations();
      }
    } catch (error) {
      console.error('Failed to update registration:', error);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Event Registrations">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Event Registrations">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Event Registrations ({registrations.length})</h2>
        </div>

        {/* Registrations List */}
        <div className="space-y-4">
          {registrations.map((registration) => (
            <Card key={registration.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <h3 className="font-semibold">{registration.name}</h3>
                      <span className={`px-2 py-1 text-xs rounded ${
                        registration.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        registration.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {registration.status || 'pending'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>Event:</strong> {registration.event_name}</p>
                        <p><strong>Contact:</strong> {registration.contact}</p>
                        <p><strong>Email:</strong> {registration.email}</p>
                      </div>
                      <div>
                        <p><strong>Registration Date:</strong> {new Date(registration.created_at).toLocaleDateString()}</p>
                        <p><strong>Event Date:</strong> {registration.event_date}</p>
                        <p><strong>Event Time:</strong> {registration.event_time}</p>
                      </div>
                    </div>
                    
                    {registration.additional_info && (
                      <div>
                        <p><strong>Additional Information:</strong></p>
                        <p className="text-gray-600">{registration.additional_info}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleUpdateStatus(registration.id, 'confirmed')}
                      disabled={registration.status === 'confirmed'}
                    >
                      Confirm
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleUpdateStatus(registration.id, 'cancelled')}
                      disabled={registration.status === 'cancelled'}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

// Admin Settings Component
function AdminSettings({ admin }) {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordData, setPasswordData] = useState({
    current_password: '',
    new_password: '',
    confirm_password: ''
  });
  const [emailSettings, setEmailSettings] = useState({
    smtp_server: 'smtp.zoho.com',
    smtp_port: '587',
    smtp_username: 'admin@techbucket.com.np',
    smtp_password: '',
    use_tls: true
  });
  const [message, setMessage] = useState('');

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    
    if (passwordData.new_password !== passwordData.confirm_password) {
      setMessage('New passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/admin/change-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          current_password: passwordData.current_password,
          new_password: passwordData.new_password
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setMessage('Password changed successfully');
        setPasswordData({ current_password: '', new_password: '', confirm_password: '' });
      } else {
        setMessage(data.error || 'Failed to change password');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSettingsUpdate = async (e) => {
    e.preventDefault();
    
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/admin/email-settings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(emailSettings)
      });

      const data = await response.json();
      
      if (data.success) {
        setMessage('Email settings updated successfully');
      } else {
        setMessage(data.error || 'Failed to update email settings');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminLayout title="Settings" admin={admin}>
      <div className="space-y-6">
        {message && (
          <div className={`p-4 rounded ${
            message.includes('successfully') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {message}
          </div>
        )}

        {/* Change Password */}
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Current Password</label>
                <input
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={passwordData.current_password}
                  onChange={(e) => setPasswordData({ ...passwordData, current_password: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">New Password</label>
                <input
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={passwordData.new_password}
                  onChange={(e) => setPasswordData({ ...passwordData, new_password: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                <input
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={passwordData.confirm_password}
                  onChange={(e) => setPasswordData({ ...passwordData, confirm_password: e.target.value })}
                />
              </div>
              
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Updating...' : 'Change Password'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Email Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Email Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleEmailSettingsUpdate} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">SMTP Server</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={emailSettings.smtp_server}
                    onChange={(e) => setEmailSettings({ ...emailSettings, smtp_server: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">SMTP Port</label>
                  <input
                    type="number"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={emailSettings.smtp_port}
                    onChange={(e) => setEmailSettings({ ...emailSettings, smtp_port: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">SMTP Username</label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={emailSettings.smtp_username}
                    onChange={(e) => setEmailSettings({ ...emailSettings, smtp_username: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">SMTP Password</label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={emailSettings.smtp_password}
                    onChange={(e) => setEmailSettings({ ...emailSettings, smtp_password: e.target.value })}
                    placeholder="Enter to update password"
                  />
                </div>
              </div>
              
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={emailSettings.use_tls}
                    onChange={(e) => setEmailSettings({ ...emailSettings, use_tls: e.target.checked })}
                  />
                  Use TLS
                </label>
              </div>
              
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Updating...' : 'Update Email Settings'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}

