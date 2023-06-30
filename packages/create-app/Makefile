EXT :=
ifeq ($(OS),Windows_NT)
	UNAME := Windows
	EXT = .exe
else
	UNAME := $(shell uname -s)
endif

GOARCH:=$(shell go env GOARCH | xargs)
GOOS:=$(shell go env GOOS | xargs)

.PHONY: build
build:
	go build -o hello$(EXT) hello.go

dev:
	go run hello.go