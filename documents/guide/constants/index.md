# Constants

Go hỗ trợ <i><u>constants</u></i>(hằng số không đổi) cho các giá trị của `character` `string` `boolean` và `numeric`

`const` dùng để định nghĩa một giá trị hằng số không đổi.

```go
package main

import "fmt"

const s string = "constant"
```

Một `const` có thể xuất hiện ở bất kì chỗ nào mà `var` có thể được khởi tạo.

```go
func main() {
    fmt.Println(s)

    const n = 500000000
```

Biểu thức hằng số thực hiện phép toán với độ chính xác tùy ý.
```go
    const d = 3e20 / n
    fmt.Println(d)
```

Một hằng số sẽ không có kiểu cho đến khi mình đưa vào một chuyển đổi rõ ràng cho nó:
```go
    fmt.Println(int64(d))
```
Tùy vào từng hoàn cảnh, 1 số sẽ được yêu cầu 1 kiểu dữ liệu chẳng hạn như việc gán biến hoặc gọi hàm.</br>
Ví dụ: `math.Sin` cho ra `float64`.
```go
    fmt.Println(math.Sin(n))
}
```

```syntax{1}
$ go run constant.go 
constant
6e+11
600000000000
-0.28470407323754404
```