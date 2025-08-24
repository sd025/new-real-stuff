# 🚀 Deployment Guide - Aanav Healthcare

This guide covers setting up and deploying the Aanav Healthcare application to staging and production environments.

## 📋 **Environment Overview**

| Environment | Branch | URL | Purpose |
|-------------|--------|-----|---------|
| **Development** | `main` | `http://localhost:3000` | Local development |
| **Staging** | `staging` | `https://aanav-staging.vercel.app` | Testing & QA |
| **Production** | `production` | `https://aanavhealthcare.com` | Live application |

## 🔧 **Prerequisites**

1. **GitHub Account** with repository access
2. **Vercel Account** for hosting
3. **Environment Variables** configured
4. **Domain Names** (optional)

## 🛠️ **Setup Steps**

### **1. Vercel Project Setup**

1. **Create Vercel Project:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Link project
   vercel link
   ```

2. **Configure Environment Variables in Vercel:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add variables for each environment (Development, Preview, Production)

### **2. GitHub Secrets Setup**

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
SNYK_TOKEN=your_snyk_token (optional)
```

### **3. Environment Variables**

Create environment files for each environment:

#### **Development (.env.local)**
```bash
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

#### **Staging (.env.staging)**
```bash
NODE_ENV=staging
NEXT_PUBLIC_APP_URL=https://aanav-staging.vercel.app
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_GA_TRACKING_ID=GA_STAGING_ID
```

#### **Production (.env.production)**
```bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://aanavhealthcare.com
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_GA_TRACKING_ID=GA_PRODUCTION_ID
```

## 🚀 **Deployment Workflow**

### **Development → Staging**

1. **Create feature branch:**
   ```bash
   git checkout -b feature/new-feature
   git add .
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```

2. **Create Pull Request:**
   - PR: `feature/new-feature` → `staging`
   - GitHub Actions will run tests and build
   - Merge when approved

3. **Deploy to Staging:**
   ```bash
   git checkout staging
   git merge feature/new-feature
   git push origin staging
   # GitHub Actions automatically deploys to staging
   ```

### **Staging → Production**

1. **Test in Staging:**
   - Verify all features work correctly
   - Run QA testing
   - Check performance and SEO

2. **Deploy to Production:**
   ```bash
   git checkout production
   git merge staging
   git push origin production
   # GitHub Actions automatically deploys to production
   ```

## 🔄 **CI/CD Pipeline**

The GitHub Actions workflow automatically:

1. **Lint & Test** - Code quality checks
2. **Build** - Create production build
3. **Deploy Staging** - Auto-deploy on staging branch push
4. **Deploy Production** - Auto-deploy on production branch push
5. **Security Scan** - Vulnerability checks

## 📊 **Monitoring & Analytics**

### **Performance Monitoring**
- **Vercel Analytics** - Built-in performance monitoring
- **Core Web Vitals** - Automatic tracking
- **Error Tracking** - Sentry integration (optional)

### **Analytics Setup**
1. **Google Analytics 4** - Configure GA4 property
2. **Google Tag Manager** - For advanced tracking
3. **Vercel Analytics** - Performance insights

## 🔒 **Security & Compliance**

### **Security Headers**
- XSS Protection
- Content Type Options
- Frame Options
- Referrer Policy

### **Healthcare Compliance**
- HIPAA considerations (if applicable)
- Data encryption
- Secure authentication
- Privacy policy compliance

## 🚨 **Rollback Procedure**

If issues occur in production:

1. **Quick Rollback:**
   ```bash
   git checkout production
   git revert HEAD
   git push origin production
   ```

2. **Vercel Rollback:**
   - Go to Vercel Dashboard → Deployments
   - Find previous working deployment
   - Click "Redeploy"

## 📞 **Support & Troubleshooting**

### **Common Issues**

1. **Build Failures:**
   - Check GitHub Actions logs
   - Verify environment variables
   - Test locally with `npm run build`

2. **Deployment Issues:**
   - Check Vercel deployment logs
   - Verify domain configuration
   - Check environment variables

3. **Performance Issues:**
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Optimize images and code

### **Contact Information**
- **Development Team** - Internal team
- **Vercel Support** - For hosting issues
- **GitHub Support** - For repository issues

## 📈 **Performance Optimization**

### **Pre-deployment Checklist**
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals pass
- [ ] Images optimized
- [ ] Code minified
- [ ] CDN configured
- [ ] Caching enabled

### **Post-deployment Monitoring**
- [ ] Monitor error rates
- [ ] Track performance metrics
- [ ] Check user analytics
- [ ] Monitor uptime
- [ ] Review security alerts

---

**Last Updated:** $(date)
**Version:** 1.0.0
