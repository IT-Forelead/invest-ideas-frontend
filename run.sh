#!/bin/bash
echo '--------------------------------------------------------------------'
echo 'Removing Frontend image...'
echo '--------------------------------------------------------------------'
docker rmi -f invest-ideas:latest
echo '===================================================================='
echo 'Building Frontend image...'
echo '--------------------------------------------------------------------'
docker build -t invest-ideas .
echo '--------------------------------------------------------------------'
docker compose down
docker compose up -d