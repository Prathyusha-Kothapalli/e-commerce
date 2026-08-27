# Makefile for Luna Dresses E-Commerce Project

.PHONY: all install build run test clean

all: install build test

install:
	npm install

build:
	npm run build

run:
	npm start

test:
	node tests/run_tests.js

clean:
	rm -rf node_modules
