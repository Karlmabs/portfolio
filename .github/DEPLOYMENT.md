# GitHub Actions Deployment Guide

This repository includes automated CI/CD workflows that build, test, and deploy your Karl Portfolio application on every push to the main branch.

## 🚀 Workflows Overview

### 1. Main Deployment Workflow (`deploy.yml`)

**Triggers:** Push to `main` branch
**Purpose:** Full CI/CD pipeline including build, test, containerization, and deployment

**Steps:**

1. **Build & Test** - Installs dependencies, runs linting, and builds the application
2. **Docker Build & Push** - Creates multi-platform Docker image and pushes to GitHub Container Registry
3. **Deploy** - Updates Kubernetes deployment with the new image
4. **Verify** - Checks deployment status and provides rollback on failure
5. **Notify** - Reports deployment status

### 2. PR Quality Check Workflow (`pr-check.yml`)

**Triggers:** Pull requests to `main` branch
**Purpose:** Quality assurance without deployment

**Steps:**

1. **Quality Check** - Linting, building, and security audit
2. **Docker Build Test** - Verifies Docker image builds and runs correctly
3. **PR Comment** - Adds automated feedback to the pull request

## 🔧 Setup Requirements

### 1. Kubernetes Configuration

You need to set up the following GitHub repository secret:

```bash
# Get your kubeconfig (base64 encoded)
cat ~/.kube/config | base64 -w 0
```

Add this as a repository secret named `KUBECONFIG`:

- Go to your repository → Settings → Secrets and variables → Actions
- Click "New repository secret"
- Name: `KUBECONFIG`
- Value: Your base64-encoded kubeconfig content

### 2. Docker Hub Configuration

The workflow uses Docker Hub as the container registry. You need to set up these repository secrets:

**DOCKERHUB_USERNAME**: Your Docker Hub username
**DOCKERHUB_TOKEN**: Your Docker Hub access token

To create a Docker Hub access token:

1. Go to Docker Hub → Account Settings → Security
2. Click "New Access Token"
3. Give it a name (e.g., "GitHub Actions")
4. Copy the generated token

Add both secrets to your repository:

- Go to your repository → Settings → Secrets and variables → Actions
- Add `DOCKERHUB_USERNAME` with your Docker Hub username
- Add `DOCKERHUB_TOKEN` with your access token

### 3. Kubernetes Cluster Requirements

Your cluster should have:

- The `karl-portfolio` namespace (created automatically by the workflow)
- Proper RBAC permissions for deployments
- Ingress controller (optional, for external access)

## 📋 Workflow Features

### Security Features

- ✅ Multi-platform Docker builds (AMD64 + ARM64)
- ✅ Non-root container execution
- ✅ Security context configurations
- ✅ Automated security audits
- ✅ Base64-encoded kubeconfig handling

### Performance Features

- ✅ Docker layer caching
- ✅ npm dependency caching
- ✅ Parallel job execution
- ✅ Artifact sharing between jobs

### Reliability Features

- ✅ Automatic rollback on deployment failure
- ✅ Health checks and readiness probes
- ✅ Rolling update strategy
- ✅ Deployment status verification

### Monitoring Features

- ✅ Build size analysis
- ✅ Deployment status reporting
- ✅ Container startup verification
- ✅ Automated PR feedback

## 🎯 Usage

### For Regular Development

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes and commit them
3. Push and create a pull request
4. The PR workflow will automatically run quality checks
5. Once approved and merged, the deployment workflow will deploy automatically

### For Hotfixes

1. Create a hotfix branch: `git checkout -b hotfix/urgent-fix`
2. Make your changes and commit them
3. Push directly to main (if you have permissions) or create a PR
4. The deployment will happen automatically

### Manual Deployment Trigger

You can manually trigger the deployment workflow:

1. Go to Actions tab in your repository
2. Select "Build and Deploy Karl Portfolio"
3. Click "Run workflow" and select the main branch

## 🔍 Monitoring Deployments

### Check Deployment Status

```bash
# View pods
kubectl get pods -n karl-portfolio

# View services
kubectl get svc -n karl-portfolio

# View ingress
kubectl get ingress -n karl-portfolio

# Check deployment logs
kubectl logs -f deployment/karl-portfolio -n karl-portfolio
```

### View Container Images

Your built images are available at:

```
<your-dockerhub-username>/karl-portfolio:latest
<your-dockerhub-username>/karl-portfolio:main-<commit-sha>
```

You can pull and run them locally:

```bash
docker pull <your-dockerhub-username>/karl-portfolio:latest
docker run -p 3000:3000 <your-dockerhub-username>/karl-portfolio:latest
```

## 🛠️ Customization

### Environment Variables

Add environment-specific variables in the workflow file:

```yaml
env:
  NODE_ENV: production
  API_URL: https://api.example.com
```

### Different Deployment Targets

To deploy to different environments, create separate workflow files:

- `.github/workflows/deploy-staging.yml`
- `.github/workflows/deploy-production.yml`

### Custom Build Steps

Add additional build steps in the `build-and-test` job:

```yaml
- name: Run tests
  run: npm test

- name: Generate documentation
  run: npm run docs
```

## 🚨 Troubleshooting

### Common Issues

1. **Kubeconfig Authentication Failed**

   - Verify your `KUBECONFIG` secret is correctly base64 encoded
   - Check if your cluster credentials are still valid

2. **Docker Build Failed**

   - Check if all dependencies are properly listed in package.json
   - Verify Dockerfile syntax and build context

3. **Deployment Timeout**

   - Check if your cluster has sufficient resources
   - Verify image pull policies and registry access

4. **Health Check Failed**
   - Ensure your application responds on the health check endpoint
   - Verify port configurations match between Dockerfile and Kubernetes manifests

### Getting Help

- Check the Actions tab for detailed workflow logs
- Review the Kubernetes events: `kubectl get events -n karl-portfolio`
- Check pod logs: `kubectl logs <pod-name> -n karl-portfolio`

## 📈 Next Steps

Consider adding:

- [ ] Integration tests
- [ ] Performance testing
- [ ] Automated security scanning
- [ ] Slack/Discord notifications
- [ ] Blue-green deployments
- [ ] Canary releases
