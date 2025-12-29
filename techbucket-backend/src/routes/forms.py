from flask import Blueprint, jsonify, request
from src.models.forms import QuoteRequest, SupportCase, Inquiry, EventRegistration, db
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

forms_bp = Blueprint('forms', __name__)

def send_email(to_emails, subject, body, is_html=False):
    """
    Send email notification
    Note: This is a placeholder function for email sending.
    In production, you would configure SMTP settings or use a service like SendGrid.
    """
    try:
        # For now, we'll just log the email details
        print(f"EMAIL NOTIFICATION:")
        print(f"To: {', '.join(to_emails)}")
        print(f"Subject: {subject}")
        print(f"Body: {body}")
        print("-" * 50)
        return True
    except Exception as e:
        print(f"Email sending failed: {str(e)}")
        return False

@forms_bp.route('/quote-request', methods=['POST'])
def submit_quote_request():
    try:
        data = request.json
        
        # Create quote request record
        quote_request = QuoteRequest(
            name=data['name'],
            contact=data['contact'],
            office_email=data['officeEmail'],
            company=data.get('company', ''),
            product_name=data['productName'],
            quantity=data['quantity'],
            requirements=data.get('requirements', ''),
            created_at=datetime.utcnow()
        )
        
        db.session.add(quote_request)
        db.session.commit()
        
        # Send email notification to sales team
        subject = f"New Quote Request - {data['productName']}"
        body = f"""
New Quote Request Received:

Product: {data['productName']}
Quantity: {data['quantity']}
Customer Name: {data['name']}
Contact: {data['contact']}
Email: {data['officeEmail']}
Company: {data.get('company', 'Not specified')}
Requirements: {data.get('requirements', 'None specified')}

Quote Request ID: {quote_request.id}
Submitted: {quote_request.created_at}
        """
        
        send_email(['sales@techbucket.com.np'], subject, body)
        
        return jsonify({
            'success': True,
            'message': 'Quote request submitted successfully',
            'quote_id': quote_request.id
        }), 201
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error submitting quote request: {str(e)}'
        }), 500

@forms_bp.route('/support-case', methods=['POST'])
def submit_support_case():
    try:
        data = request.json
        
        # Create support case record
        support_case = SupportCase(
            name=data['name'],
            organization_name=data['organizationName'],
            contact=data['contact'],
            organization_email=data['organizationEmail'],
            issue_type=data['issueType'],
            priority=data['priority'],
            subject=data['subject'],
            description=data['description'],
            status='Open',
            created_at=datetime.utcnow()
        )
        
        db.session.add(support_case)
        db.session.commit()
        
        # Send email notification to support team
        subject = f"New Support Case - {data['subject']} (Priority: {data['priority']})"
        body = f"""
New Support Case Received:

Case ID: {support_case.id}
Priority: {data['priority']}
Issue Type: {data['issueType']}
Subject: {data['subject']}

Customer Details:
Name: {data['name']}
Organization: {data['organizationName']}
Contact: {data['contact']}
Email: {data['organizationEmail']}

Description:
{data['description']}

Status: Open
Submitted: {support_case.created_at}
        """
        
        send_email(['support@techbucket.com.np'], subject, body)
        
        return jsonify({
            'success': True,
            'message': 'Support case submitted successfully',
            'case_id': support_case.id
        }), 201
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error submitting support case: {str(e)}'
        }), 500

@forms_bp.route('/inquiry', methods=['POST'])
def submit_inquiry():
    try:
        data = request.json
        
        # Create inquiry record
        inquiry = Inquiry(
            name=data['name'],
            organization_name=data['organizationName'],
            contact=data['contact'],
            organization_email=data['organizationEmail'],
            subject=data['subject'],
            message=data['message'],
            created_at=datetime.utcnow()
        )
        
        db.session.add(inquiry)
        db.session.commit()
        
        # Send email notification to sales and info teams
        subject = f"New Inquiry - {data['subject']}"
        body = f"""
New Inquiry Received:

Inquiry ID: {inquiry.id}
Subject: {data['subject']}

Customer Details:
Name: {data['name']}
Organization: {data['organizationName']}
Contact: {data['contact']}
Email: {data['organizationEmail']}

Message:
{data['message']}

Submitted: {inquiry.created_at}
        """
        
        send_email(['sales@techbucket.com.np', 'info@techbucket.com.np'], subject, body)
        
        return jsonify({
            'success': True,
            'message': 'Inquiry submitted successfully',
            'inquiry_id': inquiry.id
        }), 201
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error submitting inquiry: {str(e)}'
        }), 500

@forms_bp.route('/event-registration', methods=['POST'])
def submit_event_registration():
    try:
        data = request.json
        
        # Create event registration record
        registration = EventRegistration(
            name=data['name'],
            contact=data['contact'],
            email=data['email'],
            event_name=data['eventName'],
            event_date=data['eventDate'],
            event_time=data['eventTime'],
            event_price=data['eventPrice'],
            additional_info=data.get('additionalInfo', ''),
            created_at=datetime.utcnow()
        )
        
        db.session.add(registration)
        db.session.commit()
        
        # Send email notification to info team
        subject = f"New Event Registration - {data['eventName']}"
        body = f"""
New Event Registration Received:

Registration ID: {registration.id}
Event: {data['eventName']}
Date: {data['eventDate']}
Time: {data['eventTime']}
Price: {data['eventPrice']}

Attendee Details:
Name: {data['name']}
Contact: {data['contact']}
Email: {data['email']}

Additional Information:
{data.get('additionalInfo', 'None provided')}

Registered: {registration.created_at}
        """
        
        send_email(['info@techbucket.com.np'], subject, body)
        
        return jsonify({
            'success': True,
            'message': 'Event registration submitted successfully',
            'registration_id': registration.id
        }), 201
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error submitting event registration: {str(e)}'
        }), 500

# Admin endpoints for viewing submissions
@forms_bp.route('/admin/quote-requests', methods=['GET'])
def get_quote_requests():
    try:
        quotes = QuoteRequest.query.order_by(QuoteRequest.created_at.desc()).all()
        return jsonify([quote.to_dict() for quote in quotes])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@forms_bp.route('/admin/support-cases', methods=['GET'])
def get_support_cases():
    try:
        cases = SupportCase.query.order_by(SupportCase.created_at.desc()).all()
        return jsonify([case.to_dict() for case in cases])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@forms_bp.route('/admin/inquiries', methods=['GET'])
def get_inquiries():
    try:
        inquiries = Inquiry.query.order_by(Inquiry.created_at.desc()).all()
        return jsonify([inquiry.to_dict() for inquiry in inquiries])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@forms_bp.route('/admin/event-registrations', methods=['GET'])
def get_event_registrations():
    try:
        registrations = EventRegistration.query.order_by(EventRegistration.created_at.desc()).all()
        return jsonify([registration.to_dict() for registration in registrations])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

