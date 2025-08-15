#!/bin/sh
set -e

echo "Starting SSH service..."
# Start SSH service in the background
/usr/sbin/sshd -D &

echo "Starting Next.js application..."
# Run Next.js using npm start (which executes next start)
exec npm start
