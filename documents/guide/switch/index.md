# Switch

`Switch statements` thể hiện nhiều điều kiện qua nhiều nhánh.

Dưới đây là một `switch` cơ bản:
```go
package main

import "fmt"

func main() {
    i := 2
    fmt.Print("Write ", i, " as ")
    switch i {
    case 1:
        fmt.Println("one")
    case 2:
        fmt.Println("two")
    case 3:
        fmt.Println("three")
    }
```

Bạn có thể sử dụng dấu `,` để phân tách nhiều biểu thức trong cùng một `case`</br>
Ở ví dụ này chúng ta cũng sẽ sử dụng cả trường hợp `default`
```go
    switch time.Now().Weekday() {
    case time.Saturday, time.Sunday:
        fmt.Println("It's the weekend")
    default:
        fmt.Println("It's a weekday")
    }
```

`switch` mà không có biểu thức thì cũng được coi như là 1 cách để thay thế cho việc thể hiện `if/else`
```go
    t := time.Now()
    switch {
    case t.Hour() < 12:
        fmt.Println("It's before noon")
    default:
        fmt.Println("It's after noon")
    }
```
Một kiểu `switch` so sánh các kiểu dữ liệu thay vì so sánh các giá trị. Có thể sử dụng kiểu này để biết được kiểu giá trị của một `interface`.</br>
Trong ví dụ này, biến `t` sẽ có kiểu tương đương với mệnh đề của nó.
```go
    whatAmI := func(i interface{}) {
        switch t := i.(type) {
        case bool:
            fmt.Println("I'm a bool")
        case int:
            fmt.Println("I'm an int")
        default:
            fmt.Printf("Don't know type %T\n", t)
        }
    }
    whatAmI(true)
    whatAmI(1)
    whatAmI("hey")
}
```
```syntax{1}
$ go run switch.go 
Write 2 as two
It's a weekday
It's after noon
I'm a bool
I'm an int
Don't know type string
```