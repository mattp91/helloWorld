test:
	echo "Don't forget to read through the license before using this code"

	cat ./LICENSE

	docker build -t hello-world .
	docker run hello-world
