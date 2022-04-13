# Title: Sơ lược về Props và State trong ReactJS cho người mới bắt đầu
## Language: Tiếng Việt 

### Translator Contact Information
- Name: Trung Quân 
- Email: quantrung286@gmail.com
- Social Media Account to Contact: [Github](https://github.com/tquann286)

### Translation

React là một thư viện Javascript giúp các lập trình viên xây dựng giao diện người dùng (UI) dễ dàng hơn với các thành phần (components) - là các "lát cắt" được tạo nên giao diện website.

# Component trong React là gì?

React Component gồm 2 loại thường được sử dụng: Class Component và Function Component. Các components này trả về JSX (JavaScript Syntax Extension). JSX có cách viết tương tự với HTML nhưng bạn có thể chèn vào biến chuỗi, số hoặc null.

Các component trong React có thể tái sử dụng. Ví dụ, giả sử bạn có một thanh điều hướng bao gồm một ```<nav>``` , bạn có thể đặt nó trong một React component và hiển thị nó ở bất cứ đâu bạn muốn để hiển thị cho người dùng thanh điều hướng.
![code-snapshot](https://user-images.githubusercontent.com/88314050/162560305-5bc3b252-004e-4e86-8a75-cbca0012ff4d.png)

# Hiểu về Props và State

- **Props** là một đối tượng (object) được chuyển đến một component con từ component cha của nó còn **State** là bất kỳ giá trị nào được khởi tạo bởi chính component đó và có thể thay đổi trong vòng đời (life cycle) của component.
- Props là **bên ngoài** (nhận từ bên ngoài component) trong khi trạng thái (state) là **bên trong** (nó không thể bị thao tác trực tiếp bởi những component khác).

React components là hàm và props là **đối số** được truyền từ component cha
Mặt khác, **state** là giá trị được khởi tạo bên trong component. State có thể được thay đổi khi sử dụng hàm ```setState```. Khi state thay đổi, component sẽ được render lại với giá trị state mới

> Một mô hình phổ biến là sử dụng state của component này (cha) làm props cho component khác (con). 

## Cùng tìm hiểu sâu hơn về Props
Props là đối số được truyền vào một component và không thể thay đổi trực tiếp. `Đừng cố gắng thay đổi props trực tiếp bên trong các components con, chúng chỉ có thể được thay đổi trong component cha. Thay vào đó hãy sử dụng state`
Dưới đây là một ví dụ về các components lồng nhau (nested components), một component cha có thể chứa nhiều component con. Trong trường hợp này, ```<ParentComponent>``` truyền prop `color` cho ```<ChildComponent>```
![code-snapshot](https://user-images.githubusercontent.com/88314050/162562387-2680b24e-0d8c-4a5b-ba6a-e89da52a661c.png)
```<ChildComponent>``` có thể truy cập prop bằng cú pháp dưới đây:
![code-snapshot](https://user-images.githubusercontent.com/88314050/162562407-74ffc65d-71ef-4bcc-a40d-5641736d29bc.png)

## Còn State thì sao?

State là một giá trị mà bạn muốn thay đổi trong suốt vòng đời của một component. Khi giá trị State thay đổi component sẽ hiển thị lại (re-render). Nếu bạn có state không bao giờ thay đổi, bạn có thể cân nhắc đặt nó là một biến bình thường.

Để thay đổi giá trị của một state, bạn có thể dùng hàm ```setState```. **setState()** không trực tiếp sửa đổi state của bạn mà thay vào đó yêu cầu React gọi (kết xuất lại) thành phần với giá trị state mới là giá trị trả về của hàm callback trong setState.
![code-snapshot](https://user-images.githubusercontent.com/88314050/162562732-5e6fd35c-5f5e-48f9-a961-d3ee233ad07d.png)

## ⚠️ Lưu ý quan trọng
Props là **bất biến**! Một component không thể và không nên sửa đổi props của nó. Tuy nhiên, nó có thể cập nhật state của nó và props của component con của nó. Nếu bạn muốn cập nhật props của một component, component cha phải truyền một hàm để thực hiện điều đó cho component con, khi đó thành phần con sẽ gọi hàm đó và thay đổi props của mình.
![code](https://user-images.githubusercontent.com/88314050/162562913-f3ec5238-431d-4df9-9e5d-af93ed535ef3.png)
## 🌈 Khi nào thì sử dụng Props và State?
- Một component nên sử dụng props khi nó cần sử dụng các giá trị từ những component khác.
- Một component nên sử dụng state để lưu trữ dữ liệu thay đổi theo thời gian. Nếu trạng thái không bao giờ thay đổi, hãy dùng biến thay cho state.

## 🌸 Tổng kết
Bạn sẽ hiểu hơn về props và state nếu bạn sử dụng chúng ngày càng nhiều hơn trong các ứng dụng của mình. Hiện tại, bạn có thể tập trung vào một số điểm khác biệt chính giữa chúng:

**State:**
- Cách sử dụng: Lưu trữ dữ liệu thay đổi theo thời gian
- Có thể thay đổi: Có
- Cách thay đổi: dùng `state` để truy cập và `setState` để thay đổi

**Props:**
- Cách sử dụng: Component cha dùng để truyền dữ liệu vào component con
- Có thể thay đổi: Bất biến, không thể thay đổi từ thành phần con
- Cách thay đổi: Chỉ đọc
