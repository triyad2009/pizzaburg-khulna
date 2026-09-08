# Admin Guide - PizzaBurg Khulna (Phase 2)

## Admin Dashboard Overview

The admin dashboard will provide restaurant owners/managers with complete control over:

### Core Sections

1. **Dashboard Overview**
   - Today's bookings count
   - Revenue metrics
   - Popular items
   - Quick actions

2. **Reservations Management**
   - List view / Calendar view
   - Filter by date, status, table
   - Confirm/Cancel/Complete bookings
   - Customer contact info
   - Special requests management

3. **Table Management**
   - Add/Edit/Delete tables
   - Drag-and-drop positioning
   - Set capacity, features
   - Enable/Disable tables
   - Floor plan preview

4. **Menu Management**
   - Add/Edit/Delete items
   - Set prices, descriptions
   - Add images
   - Mark as popular/featured/new
   - Manage categories
   - Set availability

5. **Pizza Builder Configuration**
   - Configure sizes
   - Configure crusts
   - Configure sauces
   - Configure cheeses
   - Configure toppings
   - Set prices for each option

6. **Offers & Promotions**
   - Create new offers
   - Set start/end dates
   - Discount percentage
   - Track usage

7. **Gallery Management**
   - Upload images
   - Organize by category
   - Set display order
   - Add captions

8. **Customer Management**
   - View all customers
   - Booking history
   - Contact preferences
   - Loyalty tracking (future)

9. **Reviews Moderation**
   - Approve/Reject reviews
   - Mark as featured
   - Hide if needed
   - View aggregate ratings

10. **External Ordering Platforms**
    - Add/Edit platforms
    - Set URLs
    - Display order
    - Performance tracking

11. **Website Content Management**
    - Edit homepage copy
    - Update about page
    - Contact information
    - Opening hours
    - Social links

12. **Analytics**
    - Menu view counts
    - Popular items
    - Booking trends
    - Table occupancy
    - Revenue tracking

## Default Admin Credentials (Phase 2)

```
Email: admin@pizzaburg.com
Password: (Set on first login)
```

## Admin Data Models

### User (with Admin Role)
```typescript
interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'owner' | 'manager' | 'staff';
  permissions: string[];
  createdAt: Date;
}
```

### Audit Log
```typescript
interface AuditLog {
  id: string;
  adminId: string;
  action: string;
  resource: string;
  changes: Record<string, any>;
  timestamp: Date;
}
```

## Access Control

### Owner
- Full access to all features
- Can manage staff
- Can view all analytics

### Manager
- Booking management
- Menu management
- Gallery management
- Cannot manage users

### Staff
- View-only access to:
  - Today's bookings
  - Menu
  - Offers

## Security Features

- Two-factor authentication
- Session timeout (30 mins)
- Activity logging
- IP whitelisting (optional)
- Password reset flow
- Email verification

## Reporting

### Available Reports
1. **Revenue Report**
   - Daily/Weekly/Monthly
   - Breakdown by category
   - Comparison with previous periods

2. **Occupancy Report**
   - Table usage
   - Peak hours
   - Capacity analysis

3. **Menu Performance**
   - Most viewed items
   - Most booked restaurants
   - Average order value

4. **Customer Report**
   - New customers
   - Returning customers
   - Booking frequency

## Maintenance Tasks

### Daily
- Review new bookings
- Update table status
- Check for issues

### Weekly
- Update menu if needed
- Review analytics
- Respond to reviews

### Monthly
- Analyze trends
- Update promotions
- Review performance
- Plan for next month

---

**Admin Dashboard UI:** Coming in Phase 2
**ETA:** Q4 2024
