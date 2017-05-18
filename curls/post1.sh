curl -v -X POST   \
	-H 'Content-Type: application/json' \
	-d '{ "title": "Hitchhikers Guide", "author": "Douglas Adams", "year": 1979, "pages": 224 }' \
	http://localhost:8001/book
