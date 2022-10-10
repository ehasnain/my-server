#!/usr/bin/env bash

DIR="$(cd "$(dirname $0)" >/dev/null && pwd)"

YELLOW="\033[39;43;1m"
BLUE_URL="\033[34;4m"
BLUE="\033[39;44;1m"
GREEN="\033[39;42;1m"
RESET="\033[0m"

service="app-local"

random_port=$((5000 + $RANDOM % 65535))
export PORT=$random_port

server_url="http://localhost:${PORT}"

function openBrowser() {
	until lsof -i :${PORT} -sTCP:LISTEN &>/dev/null; do
		echo -e "⏳ ${YELLOW}Waiting for the server to fire up ..${RESET}"
		sleep 1
	done
	echo -e "👍 ${GREEN}Opening browser:${RESET} ${BLUE_URL}${server_url}${RESET}"
	open ${server_url}
}

openBrowser &

docker compose up $service

echo -e "⏳ ${BLUE}Removing container ..${RESET}"

docker-compose down
