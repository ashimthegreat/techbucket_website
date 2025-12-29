import os
import sys
# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory
from flask_cors import CORS
from src.models.user import db
from src.models.admin import Brand, Category, Product, Service, Event, Admin
from src.models.forms import QuoteRequest, SupportCase, Inquiry, EventRegistration
from src.routes.user import user_bp
from src.routes.forms import forms_bp
from src.routes.admin import admin_bp
import hashlib
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'techbucket-secret-key-2025'

# Enable CORS for all routes with credentials support
CORS(app, origins="*", supports_credentials=True)

# Email Configuration (Zoho Mail)
app.config['MAIL_SERVER'] = 'smtp.zoho.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'admin@techbucket.com.np'
app.config['MAIL_PASSWORD'] = 'Uzumaki@123'
app.config['MAIL_DEFAULT_SENDER'] = 'admin@techbucket.com.np'

app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(forms_bp, url_prefix='/api')
app.register_blueprint(admin_bp)

app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Ensure database directory exists
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
        print(f"EMAIL NOTIFICATION:")
        print(f"To: {to_emails}")
        print(f"Subject: {subject}")
        print(f"Body: {body}")
        print("-" * 50)
        return False

# Make send_email available globally
app.send_email = send_email

# Initialize database and create default data
def init_database():
    with app.app_context():
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
            for brand in brands:
                db.session.add(brand)
        
        # Create default categories if not exist
        if Category.query.count() == 0:
            categories = [
                Category(name='Networking', description='Network infrastructure equipment'),
                Category(name='Servers', description='Server hardware and solutions'),
                Category(name='Wireless', description='Wireless networking solutions')
            ]
            for category in categories:
                db.session.add(category)
        
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
                ),
                Service(
                    title='Wireless Deployment',
                    description='Wireless network design and implementation',
                    features=['Site survey', 'Access point placement', 'Security configuration'],
                    benefits=['Seamless connectivity', 'Optimal coverage', 'Secure wireless'],
                    process=['Site assessment', 'Design planning', 'Deployment and testing'],
                    icon='wireless'
                ),
                Service(
                    title='Server and System Administration',
                    description='Complete server management and administration',
                    features=['Server setup', 'Performance monitoring', 'Security management'],
                    benefits=['Reliable performance', '24/7 monitoring', 'Proactive maintenance'],
                    process=['Server deployment', 'Configuration', 'Ongoing management'],
                    icon='server'
                ),
                Service(
                    title='Annual Maintenance Contract',
                    description='Comprehensive annual maintenance and support',
                    features=['Regular maintenance', 'Priority support', 'Hardware replacement'],
                    benefits=['Reduced downtime', 'Cost predictability', 'Expert support'],
                    process=['Contract setup', 'Regular checkups', 'Issue resolution'],
                    icon='maintenance'
                ),
                Service(
                    title='Service Maintenance Contract',
                    description='Dedicated service support contracts',
                    features=['Service level agreements', 'Response time guarantees', 'Escalation procedures'],
                    benefits=['Guaranteed response', 'Service quality', 'Business continuity'],
                    process=['SLA definition', 'Service delivery', 'Performance monitoring'],
                    icon='service'
                ),
                Service(
                    title='Backup and Monitoring',
                    description='24/7 backup solutions and system monitoring',
                    features=['Automated backups', 'Real-time monitoring', 'Alert systems'],
                    benefits=['Data protection', 'System visibility', 'Proactive alerts'],
                    process=['Backup setup', 'Monitoring configuration', 'Alert management'],
                    icon='backup'
                ),
                Service(
                    title='IT Infrastructure Audit',
                    description='Comprehensive infrastructure assessment and audit',
                    features=['Security assessment', 'Performance analysis', 'Compliance review'],
                    benefits=['Risk identification', 'Performance optimization', 'Compliance assurance'],
                    process=['Infrastructure review', 'Analysis and reporting', 'Recommendations'],
                    icon='audit'
                )
            ]
            for service in services:
                db.session.add(service)
        
        try:
            db.session.commit()
            print("Database initialized successfully!")
        except Exception as e:
            db.session.rollback()
            print(f"Error initializing database: {e}")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    static_folder_path = app.static_folder
    if static_folder_path is None:
            return "Static folder not configured", 404

    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:
        index_path = os.path.join(static_folder_path, 'index.html')
        if os.path.exists(index_path):
            return send_from_directory(static_folder_path, 'index.html')
        else:
            return "index.html not found", 404

if __name__ == '__main__':
    init_database()
    import os
    port = int(os.environ.get('PORT', 5002))
    app.run(host='0.0.0.0', port=port, debug=True)

