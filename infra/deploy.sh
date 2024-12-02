#!/bin/bash

# Nome do bucket S3 e arquivo zip
S3_BUCKET="meu-bucket-deploy-lambda"
S3_KEY="lambda-deploy-files/lambda-code.zip"

# 1. Zipa o código da Lambda
echo "Zipping Lambda code..."
zip -j lambda-code.zip ./src

# 2. Faz upload do zip para o S3
echo "Uploading Lambda code to S3..."
aws s3 cp lambda-code.zip s3://$S3_BUCKET/$S3_KEY

# 3. Deploy da stack da Lambda
echo "Deploying Lambda stack..."
aws cloudformation deploy \
  --template-file lambda-template.yaml \
  --stack-name LambdaStack \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides S3BucketName=$S3_BUCKET S3ObjectKey=$S3_KEY

# 4. Pega o ARN da Lambda criada
LAMBDA_ARN=$(aws cloudformation describe-stacks --stack-name LambdaStack --query "Stacks[0].Outputs[?OutputKey=='LambdaFunctionArn'].OutputValue" --output text)
echo "Lambda ARN: $LAMBDA_ARN"

# 5. Deploy da stack da API Gateway
echo "Deploying API Gateway stack..."
aws cloudformation deploy \
  --template-file api-template.yaml \
  --stack-name ApiStack \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides LambdaFunctionArn=$LAMBDA_ARN

echo "Deploy complete!"
