# Values

Go có nhiều loại giá trị khác nhau bao gồm `strings`, `integers`, `floats`, `booleans`, ...</br>
Dưới đây là một số ví dụ cơ bản:</br>

Strings có thể được nối với nhau thông qua `+`.

Intergers và floats.

Booleans, cho ra kết quả của các phép tính boolean mà bạn mong muốn.

```go
package main

import "fmt"

func main() {
    fmt.Println("go" + "lang")
    
    fmt.Println("1+1 = ", 1+1)
    fmt.Println("7.0/3.0", 7.0/3.0)

    fmt.Println(true && false)
    fmt.Println(true || false)
    fmt.Println(!true)
}
```

```syntax{1}
$ go run values.go
golang
1+1 = 2
7.0/3.0 = 2.3333333333333335
false
true
false
```