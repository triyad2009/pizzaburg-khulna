# Deployment Guide - PizzaBurg Khulna

## Pre-Deployment Checklist

- [ ] All pages tested in mobile & desktop
- [ ] No console errors
- [ ] Images optimized
- [ ] Meta tags updated
- [ ] Environment variables set
- [ ] Database migrations ready
- [ ] API endpoints tested
- [ ] Forms validated
- [ ] Links verified
- [ ] Performance metrics checked

## Environment Setup

### Development
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Staging
```bash
NEXT_PUBLIC_API_URL=https://staging-api.pizzaburg.com/api
```

### Production
```bash
NEXT_PUBLIC_API_URL=https://api.pizzaburg.com/api
```

## Database Setup (Phase 2)

### PostgreSQL Schema
```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR UNIQUE NOT NULL,
  name VARCHAR NOT NULL,
  role VARCHAR DEFAULT 'customer',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Menu Items
CREATE TABLE menu_items (
  id UUID PRIMARY KEY,
  name VARCHAR NOT NULL,
  price DECIMAL(10, 2),
  category VARCHAR,
  is_popular BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Reservations
CREATE TABLE reservations (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  date DATE NOT NULL,
  time TIME NOT NULL,
  guests INT,
  status VARCHAR DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Deployment Options

### Option 1: Vercel (Recommended)

**Pros:**
- Zero-config Next.js deployment
- Auto-scaling
- Edge functions
- Free tier available

**Steps:**
```bash
1. Push code to GitHub
2. Visit vercel.com
3. Import repository
4. Add environment variables
5. Deploy
```

### Option 2: Docker + Cloud Run

**Dockerfile:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**Deploy:**
```bash
gcloud run deploy pizzaburg-khulna \
  --source . \
  --region asia-south1 \
  --allow-unauthenticated
```

### Option 3: Self-Hosted (VPS)

**Using PM2:**
```bash
npm install -g pm2
pm2 start npm --name pizzaburg -- start
pm2 save
pm2 startup
```

**Nginx Config:**
```nginx
server {
  listen 80;
  server_name pizzaburg-khulna.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}
```

## SSL/HTTPS

**Using Let's Encrypt:**
```bash
sudo certbot certonly --standalone -d pizzaburg-khulna.com
sudo certbot renew --dry-run
```

## CDN Setup

**Cloudflare:**
1. Add domain to Cloudflare
2. Update nameservers
3. Enable caching
4. Set SSL to "Full"

## Monitoring

### Application
- Sentry for error tracking
- LogRocket for session replay
- Datadog for performance

### Infrastructure
- Uptime monitoring (Pingdom)
- Database monitoring
- Server resource usage

## Backup Strategy

**Database:**
```bash
# Daily automated backups
0 2 * * * pg_dump dbname > backup-$(date +%Y%m%d).sql
```

**Files:**
- S3/Google Cloud Storage
- 30-day retention
- Test restore monthly

## Performance Optimization

### Caching
```bash
# Browser cache (1 year)
Cache-Control: public, max-age=31536000, immutable

# API responses (5 minutes)
Cache-Control: public, max-age=300
```

### Image Optimization
- WebP format
- Responsive sizes
- Lazy loading
- CDN delivery

### Code Splitting
```typescript
const Heavy = dynamic(() => import('./Heavy'), {
  loading: () => <div>Loading...</div>,
});
```

## Security Checklist

- [ ] HTTPS enforced
- [ ] Environment secrets not in code
- [ ] Rate limiting enabled
- [ ] CORS configured
- [ ] SQL injection prevention
- [ ] XSS protection
- [ ] CSRF tokens implemented
- [ ] Regular security audits

## Scaling Strategy

### Phase 1 (Current)
- Single instance
- Shared database
- Static CDN

### Phase 2 (10K users)
- Load balancer
- Multiple app instances
- Database replication
- Redis cache

### Phase 3 (100K users)
- Auto-scaling
- Database sharding
- Microservices
- Message queues

## Post-Deployment

1. Test all features
2. Verify analytics
3. Monitor errors
4. Check performance
5. Test mobile experience
6. Verify SEO
7. Test email notifications
8. Stress test (load testing)

## Rollback Plan

```bash
# If deployment fails
vercel rollback  # Vercel
rm -rf .next && npm run build  # Manual
```

## Maintenance

**Weekly:**
- Check error logs
- Monitor performance
- Verify backups

**Monthly:**
- Security updates
- Dependency updates
- Performance review
- User feedback analysis

**Quarterly:**
- Security audit
- Database optimization
- Architecture review
- Capacity planning

---

For questions, contact: devops@pizzaburg.com
