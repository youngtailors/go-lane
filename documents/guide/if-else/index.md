# If-Else

Dễ dàng để có thể phân nhanh trong <b>Go</b> với việc sử đụng `If` và `Else`

Dưới đây là một ví dụ:
```go
package main

import "fmt"

func main() {
    if 7%2 == 0 {
        fmt.Println("7 is even")
    } else {
        fmt.Println("7 is odd")
    }
```

Có thể sử dụng `if` mà không có `else`
```go
    if 8%4 == 0 {
        fmt.Println("8 is divisible by 4")
    }
```

Có thể đưa ra 1 khởi tạo giá trị trước các điều kiện.
Những biến đã được khai báo ở khởi tạo này đều sẵn sàng cho tất cả các nhánh.</br>
Ví dụ:
```go
    if num := 9; num < 0 {
        fmt.Println(num, "is negative")
    } else if num < 10 {
        fmt.Println(num, "has 1 digit")
    } else {
        fmt.Println(num, "has multiple digits")
    }
}
```
::: tip
<i><b><u>Chú ý: </u></b></i> không cần có dấu `( )` bao quanh những điều kiện ở trong `Go` những `{}` là yêu cầu phải có.
:::

```syntax{1}
$ go run if-else.go 
7 is odd
8 is divisible by 4
9 has 1 digit
```
::: warning
Ngoài ra trong `Go` không có <a href="https://en.wikipedia.org/wiki/%3F:"><i><u>ternary if</u></i></a>, vì vậy bạn cần phải sử dụng một câu lệnh `if` đầy đủ với tất cả các điệu kiện.
:::