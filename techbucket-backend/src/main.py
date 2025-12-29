import os
import sys
import hashlib
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory
from flask_cors import CORS

# Import Database and Models
from src.models.user import db
from src.models.admin import Brand, Category, Product, Service, Event, Admin
from src.models.forms import QuoteRequest, SupportCase, Inquiry, EventRegistration
from src.routes.user import user_bp
from src.routes.forms import forms_bp
from src.routes.admin import admin_bp

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'techbucket-secret-key-2025')

# Enable CORS for Production
CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

# Email Configuration (Zoho Mail)
app.config['MAIL_SERVER'] = 'smtp.zoho.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'admin@techbucket.com.np'
app.config['MAIL_PASSWORD'] = 'Uzumaki@123'
app.config['MAIL_DEFAULT_SENDER'] = 'admin@techbucket.com.np'

# Register Blueprints
app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(forms_bp, url_prefix='/api')
app.register_blueprint(admin_bp)

# --- DATABASE CONFIGURATION (UPDATED FOR SUPABASE) ---
database_url = os.environ.get('DATABASE_URL')

# SQLAlchemy requires 'postgresql://' instead of 'postgres://'
if database_url and database_url.startswith("postgres://"):
    database_url = database_url.replace("postgres://", "postgresql://", 1)

# Use Supabase if available, otherwise fallback to local SQLite
app.config['SQLALCHEMY_DATABASE_URI'] = database_url or f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Ensure database directory exists (for local fallback only)
os.makedirs(os.path.join(os.path.dirname(__file__), 'database'), exist_ok=True)

# Initialize database with app
db.init_app(app)

# Email sending function
def send_email(to_emails, subject, body):
    try:
        msg = MIMEMultipart()
        msg['From'] = app.config['MAIL_DEFAULT_SENDER']
        msg['To'] = ', '.join(to_emails) if isinstance(to_emails, list) else to_emails
        msg['Subject'] = subject
        
        msg.attach(MIMEText(body, 'plain'))
        
        server = smtplib.SMTP(app.config['MAIL_SERVER'], app.config['MAIL_PORT'])
        server.starttls()
        server.login(app.config['MAIL_USERNAME'], app.config['MAIL_PASSWORD'])
        
        text = msg.as_string()
        server.sendmail(app.config['MAIL_DEFAULT_SENDER'], to_emails, text)
        server.quit()
        
        print(f"EMAIL SENT SUCCESSFULLY to {to_emails}")
        return True
    except Exception as e:
        print(f"EMAIL SENDING FAILED: {str(e)}")
        return False

app.send_email = send_email

# Initialize database and create default data
def init_database():
    with app.app_context():
        # Tables are created based on the imports at the top of the file
        db.create_all()
        
        # Create default admin if not exists
        admin = Admin.query.filter_by(username='admin').first()
        if not admin:
            default_admin = Admin(
                username='admin',
                password=hashlib.sha256('admin'.encode()).hexdigest(),
                email='admin@techbucket.com.np',
                role='admin'
            )
            db.session.add(default_admin)
        
        # Create default brands if not exist
        if Brand.query.count() == 0:
            brands = [
                Brand(name='Cisco', description='Leading networking equipment manufacturer'),
                Brand(name='Dell', description='Enterprise server and computing solutions'),
                Brand(name='HP', description='Hewlett Packard Enterprise solutions')
            ]
            db.session.add_all(brands)
        
        # Create default categories if not exist
        if Category.query.count() == 0:
            categories = [
                Category(name='Networking', description='Network infrastructure equipment'),
                Category(name='Servers', description='Server hardware and solutions'),
                Category(name='Wireless', description='Wireless networking solutions')
            ]
            db.session.add_all(categories)
        
        # Create default services if not exist
        if Service.query.count() == 0:
            services = [
                Service(
                    title='Network Infrastructure Design',
                    description='Comprehensive network design and planning services',
                    features=['Network topology design', 'Scalability planning', 'Security integration'],
                    benefits=['Optimized performance', 'Future-ready infrastructure', 'Cost-effective solutions'],
                    process=['Requirements analysis', 'Design planning', 'Implementation roadmap'],
                    icon='network'
                ),
                Service(
                    title='Network Infrastructure Implementation',
                    description='Professional network deployment and configuration',
                    features=['Equipment installation', 'Configuration management', 'Testing and validation'],
                    benefits=['Expert deployment', 'Minimal downtime', 'Quality assurance'],
                    process=['Site preparation', 'Equipment installation', 'Configuration and testing'],
                    icon='implementation'
                )
            ]
            db.session.add_all(services)
        
        try:
            db.session.commit()
            print("Database initialized successfully!")
        except Exception as e:
            db.session.rollback()
            print(f"Error initializing database: {e}")

# Call initialization
init_database()

@
