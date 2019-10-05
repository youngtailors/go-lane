# Slices

`Slices` là kiểu dữ liệu quan trọng trong `Go`, nó đưa ra một giao diện thứ tự mạnh mẽ hơn `array`

Không giống `array`, `slices` là một tham chiếu đến `array`, nó mô tả một phần hoặc toàn bộ `array`.</br>
Nó có kích thước động nên thường được sử dụng nhiều hơn `array`.

Để tạo một `slice` trống với độ dài khác 0 thì chúng ta sẽ sử dụng hàm `make` có sẵn</br>
Dưới đây là ví dụ tạo ra một `slice` của `strings` với độ dài là 3. (khởi tạo với <i>zero_valued</i>)
```go
package main

import "fmt"

func main() {
    s := make([]string, 3)
    fmt.Print("emp: ", s)
```

Chúng ta cũng có thể thiết lập và lấy giá trị giống với mảng
```go
    s[0] = "a"
    s[1] = "b"
    s[2] = "c"
    fmt.Println("set:", s)
    fmt.Println("get:", s[2])
```

`len` trả về độ dài của `slice`
```go
fmt.Println("len: ", len(s))
```

Ngoài những phép tính cơ bản thì `slice` hỗ trợ thêm một số khác. `append` trả về một `slice` gồm một hoặc nhiều giá trị mới.
```go
    s = append(s, "d")
    s = append(s, "e", "f")
    fmt.Println("apd:", s)
```
Slices cũng có thể được `copy`.</br>
Ví dụ dưới đây chúng ta sẽ tạo ra một `slice c` trống có độ dài bằng với `slice s` và sao chép từ `s` sang `c`.
```go
    c := make([]string, len(s))
    copy(c, s)
    fmt.Println("cpy:", c)
```

Slices có hỗ trợ phép tính `slice` trả về một `slice` gồm những giá trị mà mình mong muốn.</br>
Với cú pháp: `slice[low:high]`. Dưới đây là ví dụ lấy ra một `slice` gồm những phần tử `s[2], s[3] và s[4]`
```go
    l := s[2:5]
    fmt.Println("sl1:", l)
```

Trường hợp khác của `slice`
```go
    l = s[:5]
    fmt.Println("sl2:", l)
```
::: tip
Ở ví dú này sẽ trả về các phần từ cho tới s[5] (ngoại trừ s[5]).
:::

```go
    l = s[2:]
    fmt.Println("sl3:", l)
```
::: tip
Ở ví dụ này sẽ trả về các phần tử từ s[2] trở về sau (bao gồm cả s[2]).
:::

Có thể định nghĩa và khởi tạo một biến cho `slice` với chỉ một dòng.
```go
t := []string{"g", "h", "i"}
fmt.Println("dcl:", t)
```

`Slices` có thể tạo ra những cấu trúc dữ liệu đa chiều - `multi-dimensional` và độ dài của các `slices` bên trong nó có thể khác nhau, không giống với đa chiều của `arrays`
```go
    twoD := make([][]int, 3)
    for i := 0; i < 3; i++ {
        innerLen := i + 1
        twoD[i] = make([]int, innerLen)
        for j := 0; j < innerLen; j++ {
            twoD[i][j] = i + j
        }
    }
    fmt.Println("2d: ", twoD)
}
```
```syntax{1}
$ go run slices.go
emp: [  ]
set: [a b c]
get: c
len: 3
apd: [a b c d e f]
cpy: [a b c d e f]
sl1: [c d e]
sl2: [a b c d e]
sl3: [c d e f]
dcl: [g h i]
2d:  [[0] [1 2] [2 3 4]]
```

::: tip
Để có thể biết chi tiết về thiết kế và cách thực hiện của `slices` trong `Go` thì các bạn có thể xem ở <a href="https://blog.golang.org/go-slices-usage-and-internals">great blog.post</a> của nhóm Go.
:::