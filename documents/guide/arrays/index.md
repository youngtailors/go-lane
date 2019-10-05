# Arrays

Trong `Go`, một `array` là một chuỗi các phần tử được đánh số và có độ dài cụ thể.
Kiểu dữ liệu của các phần tử và độ dài mảng đều là các kiểu của mảng.</br>
Một mảng mặc định sẽ có `zero-valued` có nghĩa là đối với mảng `ints` các phần tử đều là 0.</br>
Dưới đây là ví dụ tạo ra một mảng với chính xác 5 phần tử kiểu `int`.
```go
package main

import "fmt"

func main() {
    var ints [5]int
    fmt.Println("emp: ", a)
```

Chúng ta có thể thiết lập 1 giá trị tới một vị trí cụ thể thông qua cú pháp `array[index] = value`, và cũng có thể lấy một giá trị với `array[index]`

```go
    ints[4] = 100
    fmt.Println("set: ", ints)
    fmt.Println("get: ", ints[4])
```

Với hàm `len` đã được xây dựng sẵn sẽ trả về độ dài của mảng.
```go
    fmt.Println("length: ", len(ints))
```

Chúng ta cũng có thể vừa định nghĩa và khởi tạo một mảng chỉ với 1 dòng code.</br>
Với cú pháp rút gọn như sau:
```go
    b := [5]int{1, 2, 3, 4, 5}
    fmt.Println("dcl: ", b)
```

Các kiểu của mảng là một chiều - `one-dimensional`, nhưng bạn có thể tự tạo ra các kiểu để xây dựng lên câu trúc dữ liệu nhiều chiều - `multi-dimensional`

```go
    var twoD [2][3]int
    for i := 0; i < 2; i++ {
        for j := 0; j < 3; j++ {
            twoD[i][j] = i + j
        }
    }
    fmt.Println("2d: ", twoD)
}
```

::: tip
<i>Chú ý:</i> Mảng sẽ xuất hiện theo dạng `[v1 v2 v3 ...]` khi được in ra bời `fmt.Println`
:::

<i>Nhưng ở trong `Go` bạn sẽ thấy `slices` được sử dụng thường xuyên hơn `array`.</br>
Bạn sẽ biết `slices` là gì trong phần tiếp theo.</i>
