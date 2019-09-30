# Variables

Ở trong Go <i><u>các biến (variables)</u></i> được trình biên dịch định nghĩa và sử dụng rõ ràng.

`var` có thể định nghĩa 1 hoặc nhiều biến.

Bạn có thể định nghĩa nhiều biến cùng 1 lúc.

```go
package main

import "fmt"

func main() {
    var a = "initial"
    fmt.Println(a)

    var b, c int = 1, 2
    fmt.Println(b, c)
```

Go sẽ suy luận ra các kiểu của biến.

```go
    var d = true
    fmt.Println(d)
```

Các biến được định nghĩa mà không có giá trị tương ứng thì sẽ được khởi tạo với giá trị là <i><u>zero_valued</u></i>.</br>
Ví dụ: <i><u>zero_value</u></i> của `int` là 0.

```go
    var e int
    fmt.Println(e)
```

Ngoài ra bạn có thể định nghĩa và khởi tạo một biến theo cú pháp rút gọn là `:=`</br>
Ví dụ: `var f string = "apple"` thì ở trong trường hợp này nó sẽ được rút gọn theo cú pháp như sau:

```go
    f := "apple"
    fmt.Println(f)
}
```

```syntax{1}
$ go run variables.go
initial
1 2
true
0
apple
```