package main

import (
	"fmt"
	"net/http"
)

func main() {
	fs := http.StripPrefix("/resources/", http.FileServer(http.Dir("./imgs")))
	http.Handle("/resources/", fs)

	fmt.Println("listening...")
	http.ListenAndServe(":8080", nil)
}
