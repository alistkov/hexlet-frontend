install: install-deps

install-deps:
	npm ci

test:
	npm test

test-watch:
	npm run test-watch

lint:
	npx eslint .

run:
	npm run start
