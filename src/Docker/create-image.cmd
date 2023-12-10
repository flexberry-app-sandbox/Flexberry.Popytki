docker build --no-cache -f SQL\Dockerfile.PostgreSql -t popytki/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t popytki/app ../..
