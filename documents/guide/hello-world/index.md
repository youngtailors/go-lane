# Hello World

Chương trình đầu tiên của chúng ta là hiển thị một đoạn tin nhắn "Hello World"</br>
Dưới đây là <i>source code</i> đầy đủ để thực hiện.

```go
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
```

Để chạy chương trình, chúng ta viết vào vào tập tin `hello-world.go` và sau đó sử dụng cú pháp `go run`.

```syntax{1}
$ go run hello-world.go
hello world
```

Đôi khi bạn muốn xây dựng những chương trình của mình thành những chương trình nhị phân.</br>
Bạn có thể sử dụng cú pháp `go build`

```syntax{1,2}
$ go build hello-world.go
$ ls
hello-world    hello-world.go
```

Bạn có thể chạy trực tiếp tệp nhị phân đã được xây dựng.
```syntax{1}
$ ./hello-world
hello world
```

Bây giờ bạn có thể chạy và xây dựng ra những chương trình `Go` cơ bản và hãy tiếp tục học nhiều hơn về ngôn ngữ