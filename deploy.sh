#!/bin/bash

# Karl Portfolio Deployment Script
# This script builds and deploys the portfolio to Kubernetes

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
REGISTRY="your-registry"
IMAGE_NAME="karl-portfolio"
NAMESPACE="karl-portfolio"
VERSION=${1:-"latest"}

echo -e "${BLUE}🚀 Karl Portfolio Deployment Script${NC}"
echo -e "${BLUE}====================================${NC}"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo -e "${YELLOW}📋 Checking prerequisites...${NC}"

if ! command_exists docker; then
    echo -e "${RED}❌ Docker is not installed${NC}"
    exit 1
fi

if ! command_exists kubectl; then
    echo -e "${RED}❌ kubectl is not installed${NC}"
    exit 1
fi

if ! command_exists npm; then
    echo -e "${RED}❌ npm is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ All prerequisites are met${NC}"

# Build the application
echo -e "${YELLOW}🔨 Building the application...${NC}"
npm run build

# Build Docker image
echo -e "${YELLOW}🐳 Building Docker image...${NC}"
docker build -t ${IMAGE_NAME}:${VERSION} .
docker tag ${IMAGE_NAME}:${VERSION} ${REGISTRY}/${IMAGE_NAME}:${VERSION}

# Push to registry (uncomment when ready to push)
# echo -e "${YELLOW}📤 Pushing to registry...${NC}"
# docker push ${REGISTRY}/${IMAGE_NAME}:${VERSION}

# Create namespace if it doesn't exist
echo -e "${YELLOW}🔧 Setting up Kubernetes namespace...${NC}"
kubectl apply -f k8s/namespace.yaml

# Deploy to Kubernetes
echo -e "${YELLOW}☸️  Deploying to Kubernetes...${NC}"
kubectl apply -f k8s/

# Wait for deployment to be ready
echo -e "${YELLOW}⏳ Waiting for deployment to be ready...${NC}"
kubectl wait --for=condition=available --timeout=300s deployment/karl-portfolio -n ${NAMESPACE}

# Get deployment status
echo -e "${YELLOW}📊 Deployment Status:${NC}"
kubectl get pods -n ${NAMESPACE}
kubectl get svc -n ${NAMESPACE}
kubectl get ingress -n ${NAMESPACE}

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}Your portfolio is now running on Kubernetes${NC}"

# Show useful commands
echo -e "${BLUE}📝 Useful commands:${NC}"
echo -e "View pods: ${YELLOW}kubectl get pods -n ${NAMESPACE}${NC}"
echo -e "View logs: ${YELLOW}kubectl logs -f deployment/karl-portfolio -n ${NAMESPACE}${NC}"
echo -e "Scale deployment: ${YELLOW}kubectl scale deployment karl-portfolio --replicas=5 -n ${NAMESPACE}${NC}"
echo -e "Delete deployment: ${YELLOW}kubectl delete -f k8s/${NC}"