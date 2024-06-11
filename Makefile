yarn-install:
	yarn install --immutable --immutable-cache

yarn-build:
	yarn build

build: yarn-install yarn-build