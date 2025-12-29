from src.models.user import db
from datetime import datetime

# Update existing models to add missing fields
class QuoteRequest(db.Model):
    __tablename__ = 'quote_requests'
    
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(200), nullable=False)
    quantity = db.Column(db.Integer, default=1)
    name = db.Column(db.String(100), nullable=False)
    contact = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    company = db.Column(db.String(200))
    requirements = db.Column(db.Text)
    status = db.Column(db.String(20), default='pending')
    admin_notes = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'product_name': self.product_name,
            'quantity': self.quantity,
            'name': self.name,
            'contact': self.contact,
            'email': self.email,
            'company': self.company,
            'requirements': self.requirements,
            'status': self.status,
            'admin_notes': self.admin_notes,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }

class SupportCase(db.Model):
    __tablename__ = 'support_cases'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    organization_name = db.Column(db.String(200), nullable=False)
    contact = db.Column(db.String(20), nullable=False)
    organization_email = db.Column(db.String(100), nullable=False)
    issue_type = db.Column(db.String(50), nullable=False)
    priority = db.Column(db.String(20), nullable=False)
    subject = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    status = db.Column(db.String(20), default='open')
    admin_notes = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'organization_name': self.organization_name,
            'contact': self.contact,
            'organization_email': self.organization_email,
            'issue_type': self.issue_type,
            'priority': self.priority,
            'subject': self.subject,
            'description': self.description,
            'status': self.status,
            'admin_notes': self.admin_notes,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }

class Inquiry(db.Model):
    __tablename__ = 'inquiries'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    organization_name = db.Column(db.String(200), nullable=False)
    contact = db.Column(db.String(20), nullable=False)
    organization_email = db.Column(db.String(100), nullable=False)
    subject = db.Column(db.String(200), nullable=False)
    message = db.Column(db.Text, nullable=False)
    status = db.Column(db.String(20), default='unread')
    admin_notes = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'organization_name': self.organization_name,
            'contact': self.contact,
            'organization_email': self.organization_email,
            'subject': self.subject,
            'message': self.message,
            'status': self.status,
            'admin_notes': self.admin_notes,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }

class EventRegistration(db.Model):
    __tablename__ = 'event_registrations'
    
    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'), nullable=True)
    event_name = db.Column(db.String(200), nullable=False)
    event_date = db.Column(db.String(50))
    event_time = db.Column(db.String(50))
    event_price = db.Column(db.String(50))
    name = db.Column(db.String(100), nullable=False)
    contact = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    additional_info = db.Column(db.Text)
    status = db.Column(db.String(20), default='registered')
    admin_notes = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'event_id': self.event_id,
            'event_name': self.event_name,
            'event_date': self.event_date,
            'event_time': self.event_time,
            'event_price': self.event_price,
            'name': self.name,
            'contact': self.contact,
            'email': self.email,
            'additional_info': self.additional_info,
            'status': self.status,
            'admin_notes': self.admin_notes,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }