# For

`for` là cấu trúc vòng lặp của <b>Go</b>. Có 3 kiểu của vòng lặp `for`

Kiểu cơ bản đó là vòng lặp với 1 điều kiện:
```go
package main

import "fmt"

func main() {

    i := 1
    for i <= 3 {
        fmt.Println(i)
        i = i + 1
    }
```

Một kiểu thông thường của vòng lặp `for` là khởi tạo/điều kiện/lặp:
```go
    for j := 7; j <= 9; j++ {
        fmt.Println(j)
    }
```

`for` không có điều kiện sẽ lặp liên tục cho đến khi bị `break` hoặc `return` để dừng vòng lặp.
```go
    for {
        fmt.Println("loop")
        break
    }
```

Bạn cũng có thể sử dụng `continue` để nhảy đến lần lặp tiếp theo của vòng lặp.
```go
    for n := 0; n <= 5; n++ {
        if n%2 == 0 {
            continue
        }
        fmt.Println(n)
    }
```

```syntax{1}
$ go run for.go
1
2
3
7
8
9
loop
1
3
5
```