#!/bin/bash
echo '--------------------------------------------------------------------'
echo 'Removing Frontend image...'
echo '--------------------------------------------------------------------'
docker rmi -f team-website:latest
echo '===================================================================='
echo 'Building Frontend image...'
echo '--------------------------------------------------------------------'
docker build -t team-website .
echo '--------------------------------------------------------------------'
docker compose down
docker compose up -d