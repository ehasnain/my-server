SHELL := /bin/sh

help:		## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

build:		## Build Docker image for the app
	@docker compose build app

start:			## Start the app locally
	@npm run start

start-docker: ## Start the app in docker
	@docker compose up app-local