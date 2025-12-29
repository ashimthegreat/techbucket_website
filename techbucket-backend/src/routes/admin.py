from flask import Blueprint, request, jsonify, session
from src.models.user import db
from src.models.admin import Brand, Category, Product, Service, Event, Admin
from src.models.forms import QuoteRequest, SupportCase, Inquiry, EventRegistration
from datetime import datetime
import hashlib

admin_bp = Blueprint('admin', __name__, url_prefix='/api/admin')

# Authentication decorator
def require_auth(f):
    def decorated_function(*args, **kwargs):
        if 'admin_logged_in' not in session:
            return jsonify({'error': 'Authentication required'}), 401
        return f(*args, **kwargs)
    decorated_function.__name__ = f.__name__
    return decorated_function

# Authentication Routes
@admin_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'error': 'Username and password required'}), 400
    
    # Hash password for comparison
    password_hash = hashlib.sha256(password.encode()).hexdigest()
    
    admin = Admin.query.filter_by(username=username, password=password_hash, is_active=True).first()
    
    if admin:
        session['admin_logged_in'] = True
        session['admin_id'] = admin.id
        session['admin_username'] = admin.username
        
        # Update last login
        admin.last_login = datetime.utcnow()
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Login successful',
            'admin': admin.to_dict()
        })
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

@admin_bp.route('/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({'success': True, 'message': 'Logged out successfully'})

@admin_bp.route('/check-auth', methods=['GET'])
def check_auth():
    if 'admin_logged_in' in session:
        admin = Admin.query.get(session['admin_id'])
        return jsonify({'authenticated': True, 'admin': admin.to_dict() if admin else None})
    return jsonify({'authenticated': False})

# Dashboard
@admin_bp.route('/dashboard', methods=['GET'])
@require_auth
def dashboard():
    stats = {
        'total_products': Product.query.filter_by(is_active=True).count(),
        'total_brands': Brand.query.filter_by(is_active=True).count(),
        'total_categories': Category.query.filter_by(is_active=True).count(),
        'total_services': Service.query.filter_by(is_active=True).count(),
        'total_events': Event.query.filter_by(is_active=True).count(),
        'pending_quotes': QuoteRequest.query.filter_by(status='pending').count(),
        'open_support_cases': SupportCase.query.filter_by(status='open').count(),
        'unread_inquiries': Inquiry.query.filter_by(status='unread').count(),
        'recent_registrations': EventRegistration.query.count()
    }
    
    # Recent activity
    recent_quotes = QuoteRequest.query.order_by(QuoteRequest.created_at.desc()).limit(5).all()
    recent_support = SupportCase.query.order_by(SupportCase.created_at.desc()).limit(5).all()
    recent_inquiries = Inquiry.query.order_by(Inquiry.created_at.desc()).limit(5).all()
    
    return jsonify({
        'success': True,
        'stats': stats,
        'recent_activity': {
            'quotes': [q.to_dict() for q in recent_quotes],
            'support': [s.to_dict() for s in recent_support],
            'inquiries': [i.to_dict() for i in recent_inquiries]
        }
    })

# Brand Management
@admin_bp.route('/brands', methods=['GET'])
@require_auth
def get_brands():
    brands = Brand.query.all()
    return jsonify({'success': True, 'data': [brand.to_dict() for brand in brands]})

@admin_bp.route('/brands', methods=['POST'])
@require_auth
def create_brand():
    data = request.get_json()
    
    brand = Brand(
        name=data.get('name'),
        description=data.get('description'),
        logo_url=data.get('logo_url'),
        website=data.get('website'),
        is_active=data.get('is_active', True)
    )
    
    try:
        db.session.add(brand)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Brand created successfully', 'data': brand.to_dict()}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@admin_bp.route('/brands/<int:brand_id>', methods=['PUT'])
@require_auth
def update_brand(brand_id):
    brand = Brand.query.get_or_404(brand_id)
    data = request.get_json()
    
    brand.name = data.get('name', brand.name)
    brand.description = data.get('description', brand.description)
    brand.logo_url = data.get('logo_url', brand.logo_url)
    brand.website = data.get('website', brand.website)
    brand.is_active = data.get('is_active', brand.is_active)
    brand.updated_at = datetime.utcnow()
    
    try:
        db.session.commit()
        return jsonify({'success': True, 'message': 'Brand updated successfully', 'data': brand.to_dict()})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@admin_bp.route('/brands/<int:brand_id>', methods=['DELETE'])
@require_auth
def delete_brand(brand_id):
    brand = Brand.query.get_or_404(brand_id)
    
    try:
        db.session.delete(brand)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Brand deleted successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

# Category Management
@admin_bp.route('/categories', methods=['GET'])
@require_auth
def get_categories():
    categories = Category.query.all()
    return jsonify({'success': True, 'data': [category.to_dict() for category in categories]})

@admin_bp.route('/categories', methods=['POST'])
@require_auth
def create_category():
    data = request.get_json()
    
    category = Category(
        name=data.get('name'),
        description=data.get('description'),
        icon=data.get('icon'),
        is_active=data.get('is_active', True)
    )
    
    try:
        db.session.add(category)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Category created successfully', 'data': category.to_dict()}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@admin_bp.route('/categories/<int:category_id>', methods=['PUT'])
@require_auth
def update_category(category_id):
    category = Category.query.get_or_404(category_id)
    data = request.get_json()
    
    category.name = data.get('name', category.name)
    category.description = data.get('description', category.description)
    category.icon = data.get('icon', category.icon)
    category.is_active = data.get('is_active', category.is_active)
    category.updated_at = datetime.utcnow()
    
    try:
        db.session.commit()
        return jsonify({'success': True, 'message': 'Category updated successfully', 'data': category.to_dict()})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@admin_bp.route('/categories/<int:category_id>', methods=['DELETE'])
@require_auth
def delete_category(category_id):
    category = Category.query.get_or_404(category_id)
    
    try:
        db.session.delete(category)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Category deleted successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

# Product Management
@admin_bp.route('/products', methods=['GET'])
@require_auth
def get_products():
    products = Product.query.all()
    return jsonify({'success': True, 'data': [product.to_dict() for product in products]})

@admin_bp.route('/products', methods=['POST'])
@require_auth
def create_product():
    data = request.get_json()
    
    product = Product(
        name=data.get('name'),
        description=data.get('description'),
        specifications=data.get('specifications', []),
        image_url=data.get('image_url'),
        price=data.get('price'),
        brand_id=data.get('brand_id'),
        category_id=data.get('category_id'),
        is_active=data.get('is_active', True),
        featured=data.get('featured', False)
    )
    
    try:
        db.session.add(product)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Product created successfully', 'data': product.to_dict()}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@admin_bp.route('/products/<int:product_id>', methods=['PUT'])
@require_auth
def update_product(product_id):
    product = Product.query.get_or_404(product_id)
    data = request.get_json()
    
    product.name = data.get('name', product.name)
    product.description = data.get('description', product.description)
    product.specifications = data.get('specifications', product.specifications)
    product.image_url = data.get('image_url', product.image_url)
    product.price = data.get('price', product.price)
    product.brand_id = data.get('brand_id', product.brand_id)
    product.category_id = data.get('category_id', product.category_id)
    product.is_active = data.get('is_active', product.is_active)
    product.featured = data.get('featured', product.featured)
    product.updated_at = datetime.utcnow()
    
    try:
        db.session.commit()
        return jsonify({'success': True, 'message': 'Product updated successfully', 'data': product.to_dict()})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@admin_bp.route('/products/<int:product_id>', methods=['DELETE'])
@require_auth
def delete_product(product_id):
    product = Product.query.get_or_404(product_id)
    
    try:
        db.session.delete(product)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Product deleted successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400


# Service Management
@admin_bp.route('/services', methods=['GET'])
@require_auth
def get_services():
    services = Service.query.all()
    return jsonify({'success': True, 'data': [service.to_dict() for service in services]})

@admin_bp.route('/services', methods=['POST'])
@require_auth
def create_service():
    data = request.get_json()
    
    service = Service(
        title=data.get('title'),
        description=data.get('description'),
        features=data.get('features', []),
        benefits=data.get('benefits', []),
        process=data.get('process', []),
        icon=data.get('icon'),
        is_active=data.get('is_active', True),
        featured=data.get('featured', False)
    )
    
    try:
        db.session.add(service)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Service created successfully', 'data': service.to_dict()}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@admin_bp.route('/services/<int:service_id>', methods=['PUT'])
@require_auth
def update_service(service_id):
    service = Service.query.get_or_404(service_id)
    data = request.get_json()
    
    service.title = data.get('title', service.title)
    service.description = data.get('description', service.description)
    service.features = data.get('features', service.features)
    service.benefits = data.get('benefits', service.benefits)
    service.process = data.get('process', service.process)
    service.icon = data.get('icon', service.icon)
    service.is_active = data.get('is_active', service.is_active)
    service.featured = data.get('featured', service.featured)
    service.updated_at = datetime.utcnow()
    
    try:
        db.session.commit()
        return jsonify({'success': True, 'message': 'Service updated successfully', 'data': service.to_dict()})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@admin_bp.route('/services/<int:service_id>', methods=['DELETE'])
@require_auth
def delete_service(service_id):
    service = Service.query.get_or_404(service_id)
    
    try:
        db.session.delete(service)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Service deleted successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

# Event Management
@admin_bp.route('/events', methods=['GET'])
@require_auth
def get_events():
    events = Event.query.all()
    return jsonify({'success': True, 'data': [event.to_dict() for event in events]})

@admin_bp.route('/events', methods=['POST'])
@require_auth
def create_event():
    data = request.get_json()
    
    event = Event(
        title=data.get('title'),
        description=data.get('description'),
        date=datetime.strptime(data.get('date'), '%Y-%m-%d').date(),
        time=datetime.strptime(data.get('time'), '%H:%M').time(),
        location=data.get('location'),
        capacity=data.get('capacity'),
        price=data.get('price', 0),
        event_type=data.get('event_type'),
        status=data.get('status', 'Open'),
        agenda=data.get('agenda', []),
        is_active=data.get('is_active', True)
    )
    
    try:
        db.session.add(event)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Event created successfully', 'data': event.to_dict()}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@admin_bp.route('/events/<int:event_id>', methods=['PUT'])
@require_auth
def update_event(event_id):
    event = Event.query.get_or_404(event_id)
    data = request.get_json()
    
    event.title = data.get('title', event.title)
    event.description = data.get('description', event.description)
    if data.get('date'):
        event.date = datetime.strptime(data.get('date'), '%Y-%m-%d').date()
    if data.get('time'):
        event.time = datetime.strptime(data.get('time'), '%H:%M').time()
    event.location = data.get('location', event.location)
    event.capacity = data.get('capacity', event.capacity)
    event.price = data.get('price', event.price)
    event.event_type = data.get('event_type', event.event_type)
    event.status = data.get('status', event.status)
    event.agenda = data.get('agenda', event.agenda)
    event.is_active = data.get('is_active', event.is_active)
    event.updated_at = datetime.utcnow()
    
    try:
        db.session.commit()
        return jsonify({'success': True, 'message': 'Event updated successfully', 'data': event.to_dict()})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@admin_bp.route('/events/<int:event_id>', methods=['DELETE'])
@require_auth
def delete_event(event_id):
    event = Event.query.get_or_404(event_id)
    
    try:
        db.session.delete(event)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Event deleted successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

# Form Management Routes
@admin_bp.route('/quote-requests', methods=['GET'])
@require_auth
def get_quote_requests():
    quotes = QuoteRequest.query.order_by(QuoteRequest.created_at.desc()).all()
    return jsonify({'success': True, 'data': [quote.to_dict() for quote in quotes]})

@admin_bp.route('/quote-requests/<int:quote_id>/status', methods=['PUT'])
@require_auth
def update_quote_status(quote_id):
    quote = QuoteRequest.query.get_or_404(quote_id)
    data = request.get_json()
    
    quote.status = data.get('status', quote.status)
    quote.admin_notes = data.get('admin_notes', quote.admin_notes)
    
    try:
        db.session.commit()
        return jsonify({'success': True, 'message': 'Quote status updated successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@admin_bp.route('/support-cases', methods=['GET'])
@require_auth
def get_support_cases():
    cases = SupportCase.query.order_by(SupportCase.created_at.desc()).all()
    return jsonify({'success': True, 'data': [case.to_dict() for case in cases]})

@admin_bp.route('/support-cases/<int:case_id>/status', methods=['PUT'])
@require_auth
def update_support_status(case_id):
    case = SupportCase.query.get_or_404(case_id)
    data = request.get_json()
    
    case.status = data.get('status', case.status)
    case.admin_notes = data.get('admin_notes', case.admin_notes)
    
    try:
        db.session.commit()
        return jsonify({'success': True, 'message': 'Support case status updated successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@admin_bp.route('/inquiries', methods=['GET'])
@require_auth
def get_inquiries():
    inquiries = Inquiry.query.order_by(Inquiry.created_at.desc()).all()
    return jsonify({'success': True, 'data': [inquiry.to_dict() for inquiry in inquiries]})

@admin_bp.route('/inquiries/<int:inquiry_id>/status', methods=['PUT'])
@require_auth
def update_inquiry_status(inquiry_id):
    inquiry = Inquiry.query.get_or_404(inquiry_id)
    data = request.get_json()
    
    inquiry.status = data.get('status', inquiry.status)
    inquiry.admin_notes = data.get('admin_notes', inquiry.admin_notes)
    
    try:
        db.session.commit()
        return jsonify({'success': True, 'message': 'Inquiry status updated successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@admin_bp.route('/event-registrations', methods=['GET'])
@require_auth
def get_event_registrations():
    registrations = EventRegistration.query.order_by(EventRegistration.created_at.desc()).all()
    return jsonify({'success': True, 'data': [reg.to_dict() for reg in registrations]})

# Settings Management
@admin_bp.route('/settings/admin-credentials', methods=['PUT'])
@require_auth
def update_admin_credentials():
    data = request.get_json()
    admin_id = session.get('admin_id')
    admin = Admin.query.get_or_404(admin_id)
    
    if data.get('current_password'):
        current_hash = hashlib.sha256(data.get('current_password').encode()).hexdigest()
        if admin.password != current_hash:
            return jsonify({'error': 'Current password is incorrect'}), 400
    
    if data.get('new_username'):
        admin.username = data.get('new_username')
        session['admin_username'] = admin.username
    
    if data.get('new_password'):
        admin.password = hashlib.sha256(data.get('new_password').encode()).hexdigest()
    
    if data.get('email'):
        admin.email = data.get('email')
    
    try:
        db.session.commit()
        return jsonify({'success': True, 'message': 'Admin credentials updated successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

