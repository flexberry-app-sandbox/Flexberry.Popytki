docker build --no-cache -f SQL\Dockerfile.PostgreSql -t popytki-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t popytki-java/app ../../..
