curl -v -X POST   \
	-H 'Content-Type: application/json' \
	-d '{ "title": "Chronicles of Narnia", "author": "C. S. Lewis", "year": 1950, "pages": 778 }' \
	http://localhost:8001/book
